import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import Link from 'next/link';

export default async function PrivacyPolicyPage() {
  return (
    <div className="font-jost">
      <HeroSection name={'Privacy Policy'} />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 lg:pb-14">
          <Ruler />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-14 xl:px-0 [@media(width=1280px)]:px-4">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            <span className="border-b-4 border-red-600 pb-1">Privacy</span>{' '}
            <span className="text-accent">Policy</span>
          </h1>

          <p className="pt-3">
            At Millennium Buildings we are committed to safeguarding and preserving the privacy of
            our visitors.
          </p>
          <p>
            This Policy explains what happens to any personal data that you provide to us, or that
            we collect from you whilst you visit our site and how we use cookies on this website.
          </p>
          <p>
            We do update this Policy from time to time so please do review this Policy regularly.
          </p>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Information <span className="text-accent">That We Collect</span>
          </h2>
          <p>
            In running and maintaining our website we may collect and process the following data
            about you:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Information about your use of our site including details of your visits such as pages
              viewed and the resources that you access. Such information includes traffic data,
              location data and other communication data.
            </li>
            <li>
              Information provided voluntarily by you. For example, when you register for
              information or make a purchase.
            </li>
            <li>Information that you provide when you communicate with us by any means.</li>
          </ul>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Use of <span className="text-accent">Cookies</span>
          </h2>
          <p>
            Cookies provide information regarding the computer used by a visitor. We may use cookies
            where appropriate to gather information about your computer in order to assist us in
            improving our website.
          </p>
          <p>
            We may gather information about your general internet use by using the cookie. Where
            used, these cookies are downloaded to your computer and stored on the computer’s hard
            drive. Such information will not identify you personally; it is statistical data which
            does not identify any personal details whatsoever.
          </p>
          <p>
            Our advertisers may also use cookies, over which we have no control. Such cookies (if
            used) would be downloaded once you click on advertisements on our website.
          </p>
          <p>
            You can adjust the settings on your computer to decline any cookies if you wish. This
            can be done within the “settings” section of your computer. For more information please
            read the advice at{' '}
            <Link
              href="http://www.aboutcookies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              AboutCookies.org
            </Link>
            .
          </p>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Use of <span className="text-accent">Your Information</span>
          </h2>
          <p>
            We use the information that we collect from you to provide our services to you. In
            addition to this we may use the information for one or more of the following purposes:
          </p>
          <ul className="list-disc pl-6">
            <li>
              To provide information to you that you request from us relating to our products or
              services.
            </li>
            <li>
              To provide information to you relating to other products that may be of interest to
              you. Such additional information will only be provided where you have consented to
              receive such information.
            </li>
            <li>To inform you of any changes to our website, services or goods and products.</li>
          </ul>
          <p className="pt-3">
            If you have previously purchased goods or services from us we may provide to you details
            of similar goods or services, or other goods and services, that you may be interested
            in.
          </p>
          <p className="font-semibold">
            We never give your details to third parties to use your data to enable them to provide
            you with information regarding unrelated goods or services.
          </p>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Storing Your <span className="text-accent">Personal Data</span>
          </h2>
          <p>
            In operating our website it may become necessary to transfer data that we collect from
            you to locations outside of the United States for processing and storing. By providing
            your personal data to us, you agree to this transfer, storing and processing. We do our
            utmost to ensure that all reasonable steps are taken to make sure that your data is
            stored securely.
          </p>
          <p className="pt-2">
            Unfortunately the sending of information via the internet is not totally secure and on
            occasion such information can be intercepted. We cannot guarantee the security of data
            that you choose to send us electronically, sending such information is entirely at your
            own risk.
          </p>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Disclosing <span className="text-accent">Your Information</span>
          </h2>
          <p>
            We will not disclose your personal information to any other party other than in
            accordance with this Privacy Policy and in the circumstances detailed below:
          </p>
          <ul className="list-disc pl-6">
            <li>In the event that we sell any or all of our business to the buyer.</li>
            <li>Where we are legally required by law to disclose your personal information.</li>
            <li>To further fraud protection and reduce the risk of fraud.</li>
          </ul>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Third Party <span className="text-accent">Links</span>
          </h2>
          <p>
            On occasion we include links to third parties on this website. Where we provide a link
            it does not mean that we endorse or approve that site’s policy towards visitor privacy.
            You should review their privacy policy before sending them any personal data.
          </p>

          {/* Section */}
          <h2 className="pt-6 pb-3 text-2xl font-semibold">
            Contacting <span className="text-accent">Us</span>
          </h2>
          <p>
            Please do not hesitate to contact us regarding any matter relating to this Privacy and
            Cookies Policy via our{' '}
            <Link href="/contact-us" className="text-accent underline">
              contact page
            </Link>
            .
          </p>
        </div>
        <div>
          <Ruler variant={2} />
        </div>
      </div>

      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
