'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { states, statesWithShortNames } from '@/configs/navigation.config';
import { HouseHeightIcon, HouseLengthIcon, HouseWidthIcon } from '@/icons';
import LinkIconInactive from '@/icons/link-inactive';
import { cn } from '@/lib/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as yup from 'yup';

const formSchema = yup.object({
  FirstName: yup.string().min(2, 'First name is required').required(),
  LastName: yup.string().min(2, 'Last name is required').required(),
  Email: yup.string().email('Invalid email').required(),
  Phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[\d+()\-\s]+$/, 'Invalid phone number format'),
  State: yup.string().min(2, 'State is required').required().default(states[0]),
  Zip: yup.string().min(3, 'Zip code is required').required(),
  Width: yup.string().required('Width is required'),
  Length: yup.string().required('Length is required'),
  Height: yup.string().required('Height is required'),
  BuildingStyle: yup.string().required('Building Style is required'),
  BuyingTime: yup.string().default('ASAP'),
  Notes: yup.string().default(''),
  LeadSource: yup.string().default('Website Get a Quote Form'),
  MilitaryBranch: yup.string().default('Navy'),
  Terms: yup.boolean().default(false),
  BuildingStyleOther: yup
    .string()
    .when('BuildingStyle', {
      is: (val: string) => val === 'Other',
      then: (schema) => schema.required('Please specify the building style'),
      otherwise: (schema) => schema.notRequired(),
    })
    .default(''),
  EstimatedBudget: yup.string().default(''),
});

type QuoteFormValues = yup.InferType<typeof formSchema>;

export default function QuoteFormComponent({ isMilitary }: Readonly<{ isMilitary?: boolean }>) {
  const [open, setOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEstimatedBudgetOpen, setIsEstimatedBudgetOpen] = useState(false);

  const options = [
    { value: '0–3 Months (Urgent)', label: '0-3 Months (Urgent)' },
    { value: '3-6 Months  (Near Future)', label: '3-6 Months  (Near Future)' },
    { value: '6+ Months (Planning Stage)', label: '6+ Months (Planning Stage)' },
  ];

  const militaryBranches = [
    { value: 'Navy', label: 'Navy' },
    { value: 'Airforce', label: 'Airforce' },
    { value: 'Army', label: 'Army' },
    { value: 'Marines', label: 'Marines' },
    { value: 'Coast Guard', label: 'Coast Guard' },
    { value: 'Fire', label: 'Fire' },
    { value: 'EMS', label: 'EMS' },
    { value: 'Law Enforcement', label: 'Law Enforcement' },
  ];

  const estimatedBudgetOptions = [
    { value: 'Under $5,000', label: 'Under $5,000' },
    { value: '$5,000 – $10,000', label: '$5,000 – $10,000' },
    { value: '$10,000 – $30,000', label: '$10,000 – $30,000' },
    { value: '$30,000+', label: '$30,000+' },
  ];

  const form = useForm<QuoteFormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      State: '',
      Zip: '',
      Width: '',
      Length: '',
      Height: '',
      BuildingStyle: '',
      BuyingTime: options[0].value,
      Notes: '',
      LeadSource: 'Website Get a Quote Form',
      MilitaryBranch: 'Navy',
      Terms: false,
      BuildingStyleOther: '',
      EstimatedBudget: '',
    },
  });
  const buildingStyle = form.watch('BuildingStyle');

  async function onSubmit(values: QuoteFormValues) {
    try {
      setLoading(true);
      if (!window.grecaptcha) {
        toast.error('reCAPTCHA not loaded');
        setLoading(false);
        return;
      }

      // Get the reCAPTCHA token
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
        action: 'quote_form',
      });
      const { BuildingStyleOther, ...formValues } = values;
      const body = {
        form: {
          ...formValues,
          FormPage: window.location.href,
          LeadSource: isMilitary
            ? 'Website Military & First Responders Discount Form'
            : values.LeadSource,
          MilitaryBranch: isMilitary ? values.MilitaryBranch : 'N/A',
          BuildingStyle:
            values.BuildingStyle?.toLocaleLowerCase() === 'other'
              ? BuildingStyleOther
              : values.BuildingStyle,
        },
        token,
      };
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        toast.error('Failed to submit form');
        setLoading(false);
        return;
      }

      toast.success('Your request has been submitted successfully!');
      form.reset();
      window.location.href = '/thank-you-quote'; // triggers full reload
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  const termValue = form.watch('Terms');
  return (
    <form
      className="mx-auto max-w-5xl space-y-6 px-4 xl:px-0"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      {/* Military Branch */}
      {isMilitary && (
        <div>
          <Label className="mb-4 block text-lg font-semibold">
            Select your branch <span className="text-red-600">*</span>
          </Label>
          <Controller
            name="MilitaryBranch"
            control={form.control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                className="flex flex-col gap-4 lg:justify-between lg:gap-6 xl:flex-row"
                {...field}
              >
                {militaryBranches.map((opt) => (
                  <div
                    key={opt.value}
                    className={cn(
                      'flex cursor-pointer items-center space-x-2 rounded-full py-2 transition-colors duration-200',
                    )}
                  >
                    <RadioGroupItem
                      value={opt.value}
                      id={opt.value}
                      className={cn(
                        'border-gray-300 data-[state=checked]:border-red-500 data-[state=checked]:text-red-500',
                      )}
                    />
                    <Label htmlFor={opt.value} className="cursor-pointer text-base font-normal">
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
          {form?.formState?.errors?.MilitaryBranch && (
            <p className="mt-1 text-xs text-red-500 lg:text-sm">
              {form?.formState?.errors?.MilitaryBranch.message}
            </p>
          )}
        </div>
      )}

      {/* Building Type */}
      <div>
        <Label className="mb-2 block text-lg font-semibold">
          What type of building are you interested in? <span className="text-red-600">*</span>
        </Label>
        <Controller
          name="BuildingStyle"
          control={form.control}
          render={({ field }) => (
            <Select
              open={open}
              onOpenChange={setOpen}
              onValueChange={(value) => {
                field.onChange(value);
              }}
              {...field}
            >
              <SelectTrigger
                className={`h-12! w-full rounded-[38px] px-4 text-xs md:text-sm lg:text-base ${
                  open || field.value ? '' : 'text-[#777980]'
                }`}
              >
                <SelectValue placeholder="Select Building" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Agricultural (barn, storage)">
                  Agricultural (Barn, Storage)
                </SelectItem>
                <SelectItem value="Commercial (warehouse, shop)">
                  Commercial (Warehouse, Shop)
                </SelectItem>
                <SelectItem value="Residential (carport, garage)">
                  Residential (Carport, Garage)
                </SelectItem>
                <SelectItem value="Other">Other (Please Specify)</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {form?.formState?.errors?.BuildingStyle && (
          <p className="mt-1 text-xs text-red-500 lg:text-sm">
            {form?.formState?.errors?.BuildingStyle.message}
          </p>
        )}
        {buildingStyle === 'Other' && (
          <div className="mt-3">
            <Controller
              name="BuildingStyleOther"
              control={form.control}
              render={({ field }) => (
                <div>
                  <Input
                    placeholder="Please Specify Building Style"
                    className="h-12 rounded-[38px] px-4"
                    {...field}
                  />
                  {form?.formState?.errors?.BuildingStyleOther && (
                    <p className="mt-1 text-xs text-red-500 lg:text-sm">
                      {form?.formState?.errors?.BuildingStyleOther.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        )}
      </div>

      {/* Building Dimensions */}
      <div>
        <Label className="mb-2 block text-base font-semibold lg:text-lg">
          Approximate building size <span className="text-red-600">*</span>
        </Label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Controller
            name="Width"
            control={form.control}
            render={({ field }) => (
              <div>
                <div className="relative">
                  <HouseWidthIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                  <Input
                    placeholder="Width"
                    className="h-12 rounded-[38px] px-4 pl-10"
                    {...field}
                  />
                </div>
                {form?.formState?.errors?.Width && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.Width.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="Length"
            control={form.control}
            render={({ field }) => (
              <div>
                <div className="relative">
                  <HouseLengthIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                  <Input
                    placeholder="Length"
                    className="h-12 rounded-[38px] px-4 pl-10"
                    {...field}
                  />
                </div>
                {form?.formState?.errors?.Length && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.Length.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="Height"
            control={form.control}
            render={({ field }) => (
              <div>
                <div className="relative">
                  <HouseHeightIcon className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2" />
                  <Input
                    placeholder="Height"
                    className="h-12 rounded-[38px] px-4 pl-10"
                    {...field}
                  />
                </div>
                {form?.formState?.errors?.Height && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.Height.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Buying Time */}
      <div>
        <Label className="mb-4 block text-lg font-semibold">When do you plan to build?</Label>
        <Controller
          name="BuyingTime"
          control={form.control}
          render={({ field }) => (
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(value);
              }}
              className="flex flex-col gap-4 lg:flex-wrap lg:justify-between lg:gap-6"
              {...field}
            >
              {options.map((opt) => (
                <div
                  key={opt.value}
                  className="flex cursor-pointer items-center space-x-2 rounded-full py-2 transition-colors duration-200"
                >
                  <RadioGroupItem
                    value={opt.value}
                    id={opt.value}
                    className="border-gray-300 data-[state=checked]:border-red-500 data-[state=checked]:text-red-500"
                  />
                  <Label htmlFor={opt.value} className="cursor-pointer text-base font-normal">
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
        {form?.formState?.errors?.BuyingTime && (
          <p className="mt-1 text-xs text-red-500 lg:text-sm">
            {form?.formState?.errors?.BuyingTime.message}
          </p>
        )}
      </div>

      {/* Name and Email */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
        <div>
          <Label className="mb-2 block text-lg font-semibold">
            Enter Your Name <span className="text-red-600">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="FirstName"
              control={form.control}
              render={({ field }) => (
                <div>
                  <Input placeholder="First Name" className="h-12 rounded-[38px] px-4" {...field} />
                  {form?.formState?.errors?.FirstName && (
                    <p className="mt-1 text-xs text-red-500 lg:text-sm">
                      {form?.formState?.errors?.FirstName.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              name="LastName"
              control={form.control}
              render={({ field }) => (
                <div>
                  <Input placeholder="Last Name" className="h-12 rounded-[38px] px-4" {...field} />
                  {form?.formState?.errors?.LastName && (
                    <p className="mt-1 text-xs text-red-500 lg:text-sm">
                      {form?.formState?.errors?.LastName.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label className="mb-2 block text-lg font-semibold">
            Enter Your Email <span className="text-red-600">*</span>
          </Label>
          <Controller
            name="Email"
            control={form.control}
            render={({ field }) => (
              <div>
                <Input
                  placeholder="Enter Your Email"
                  type="email"
                  className="h-12 rounded-[38px] px-4"
                  {...field}
                />
                {form?.formState?.errors?.Email && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.Email.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div>
          <Label className="mb-2 block text-lg font-semibold">
            Enter Your Phone Number <span className="text-red-600">*</span>
          </Label>
          <Controller
            name="Phone"
            control={form.control}
            render={({ field }) => (
              <div>
                <Input
                  placeholder="Enter Your Phone Number"
                  type="tel"
                  className="h-12 rounded-[38px] px-4"
                  {...field}
                />
                {form?.formState?.errors?.Phone && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.Phone.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* State and Zip */}
      <div className="w-full">
        <Label className="mb-2 block text-lg font-semibold">
          Project Location <span className="text-red-600">*</span>
        </Label>
        <div className="grid grid-cols-2 gap-3">
          <Controller
            name="State"
            control={form.control}
            render={({ field }) => (
              <div>
                <Select
                  open={isStateOpen}
                  onOpenChange={setIsStateOpen}
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  {...field}
                >
                  <SelectTrigger
                    className={`h-12! w-full rounded-[38px] px-4 text-xs md:text-sm lg:text-base ${isStateOpen || field.value ? '' : 'text-[#777980]'}`}
                  >
                    <SelectValue placeholder="State of Install" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {statesWithShortNames.map((item) => (
                      <SelectItem key={item.stateShortName} value={item.stateShortName}>
                        {item.stateName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form?.formState?.errors?.State && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.State.message}
                  </p>
                )}
              </div>
            )}
          />
          {/* <Select
            open={isStateOpen}
            onOpenChange={setIsStateOpen}
            value={stateValue}
            onValueChange={setStateValue}
          >
            <SelectTrigger
              className={`h-12! w-full rounded-[38px] px-4 text-base lg:text-base ${isStateOpen || stateValue ? '' : 'text-[#777980]'}`}
            >
              <SelectValue placeholder="State of install" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {states.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          <Controller
            name="Zip"
            control={form.control}
            render={({ field }) => (
              <div>
                <Input placeholder="Zip Code" className="h-12 rounded-[38px] px-4" {...field} />
                {form?.formState?.errors?.Zip && (
                  <p className="mt-1 text-xs text-red-500 lg:text-sm">
                    {form?.formState?.errors?.Zip.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div>
        <Label className="mb-2 block text-lg font-semibold">Estimated budget</Label>
        <Controller
          name="EstimatedBudget"
          control={form.control}
          render={({ field }) => (
            <Select
              open={isEstimatedBudgetOpen}
              onOpenChange={setIsEstimatedBudgetOpen}
              onValueChange={(value) => {
                field.onChange(value);
              }}
              {...field}
            >
              <SelectTrigger
                className={`h-12! w-full rounded-[38px] px-4 text-xs md:text-sm lg:text-base ${
                  open || field.value ? '' : 'text-[#777980]'
                }`}
              >
                <SelectValue placeholder="Select Estimated Budget" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {estimatedBudgetOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {form?.formState?.errors?.EstimatedBudget && (
          <p className="mt-1 text-xs text-red-500 lg:text-sm">
            {form?.formState?.errors?.EstimatedBudget.message}
          </p>
        )}
      </div>

      {/* Building Notes */}
      <div>
        <Label className="mb-2 block text-lg font-semibold">
          Tell Us A Little About Your Project
        </Label>
        <Controller
          name="Notes"
          control={form.control}
          render={({ field }) => (
            <div>
              <Textarea
                placeholder="Tell Us A Little About Your Project"
                className="min-h-[80px] rounded-[32px] px-4"
                {...field}
              />
              {form?.formState?.errors?.Notes && (
                <p className="mt-1 text-xs text-red-500 lg:text-sm">
                  {form?.formState?.errors?.Notes.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {/* Terms Checkbox */}
      {isMilitary && (
        <div className="mb-8 block text-lg font-semibold italic">
          *Accepted Documentation: DD214, OMPF, Government issued ID with combat veteran component,
          Active Military ID, Select Reserve Military ID, Driver&apos;s License, Combat Veteran
          Affairs Benefit / Awards Letter.
          <div className="mt-4 flex items-center gap-3">
            <Controller
              name="Terms"
              control={form.control}
              render={({ field }) => (
                <div>
                  <Checkbox
                    id="terms"
                    className="text-white data-[state=checked]:text-white"
                    checked={!!field.value} // ensure it's boolean
                    onCheckedChange={(val) => field.onChange(val)}
                  />
                  {form?.formState?.errors?.Terms && (
                    <p className="mt-1 text-xs text-red-500 lg:text-sm">
                      {form?.formState?.errors?.Terms.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Label className="block text-lg" htmlFor="terms">
              I agree (by clicking submit you agree to the privacy terms and conditions.)
            </Label>
          </div>
        </div>
      )}

      <Button
        variant="metallic"
        type="submit"
        className="flex h-[64px] w-full items-center justify-between gap-2 rounded-full px-6 py-6 text-xs font-medium lg:text-base"
        disabled={loading || (isMilitary && !termValue)}
      >
        {loading ? (
          <span className="flex w-full justify-center text-center">
            <Loader2 className="h-6! w-6!" />
          </span>
        ) : (
          <>
            <span className="pl-2 uppercase">{loading ? 'Submitting...' : 'Submit'}</span>
            <LinkIconInactive className="h-[40px]! w-[40px]! lg:h-[50px]! lg:w-[50px]!" />
          </>
        )}
      </Button>
    </form>
  );
}
