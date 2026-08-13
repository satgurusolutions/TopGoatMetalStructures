import Link from 'next/link';
import { ChooseArea } from '@/components/service-area';

export default function NeedToTalk() {
  return (
    <section id="service-area" className="bg-[#121214] py-20 text-[#f4f1ea] lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="font-oswald inline-flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a87616] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#c89120]" />
            Service area
          </span>
          <h2 className="font-oswald mt-4 text-5xl leading-[1.02] font-bold uppercase lg:text-[45px]">
            Service Area
            {/*Delivering across{' '}
            <span className="bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
              40+ states
            </span>*/}
          </h2>
          <p className="mt-6 text-base leading-7 text-[#a29c8e]">
            Not sure if we reach you? Drop your ZIP in a quote and we&apos;ll
            confirm in minutes.
          </p>
          <Link
            href="/service-area"
            className="font-oswald mt-8 inline-flex h-[50px] items-center rounded-[8px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-6 text-sm font-bold text-[#17130a] uppercase"
          >
            Check my area
          </Link>
        </div>

        <div className="rounded-[18px] border border-[#e7b53c]/20 bg-[#1b1b1f]">
          <ChooseArea />
        </div>
      </div>
    </section>
  );
}
