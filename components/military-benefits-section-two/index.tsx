// app/(pages)/military-benefits/section-two.tsx
'use client';

import Image from 'next/image';

export default function MilitaryBenefitsSectionTwo() {
  return (
    <section className="relative bg-white text-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold xl:text-4xl">Leadership opportunities</h3>
          <p>
            Leadership positions in the military &amp; first responders are invaluable in shaping
            managerial and executive level acumen. Private employers need to know that those skills
            can also be applied in a civilian setting. The Leave No Veteran Behind addresses this
            issue directly.
          </p>
          <p>
            If you are a combat veteran who is interested in our Corporate Leadership Training and
            Placement opportunities, Click Here and complete your online application.
          </p>

          <h3 className="text-2xl font-semibold xl:text-4xl">Education</h3>
          <p>
            It’s easy for combat veterans to get the education and training they need to develop a
            career. As part of their GI Bill, some states waive out-of-state tuition fees for all
            honorably discharged combat veterans. Plus, the undergraduate tuition is waived for
            state universities, community colleges, and career and technical schools for recipients
            of the Purple Heart.
          </p>

          <h3 className="text-2xl font-semibold xl:text-4xl">Retirement Benefits</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Major Combat Veteran Benefit Programs</li>
            <li>PTSD Support</li>
            <li>Important Documents</li>
            <li>Eligibility</li>
            <li>Application</li>
            <li>Related Links</li>
          </ul>

          <p>
            <a
              href="http://www.military.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              Visit military.com to learn more…
            </a>
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Image */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/military-discount-iraq.jpg"
              alt="Military Discount Iraq"
              width={600}
              height={334}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Video */}
          <div className="aspect-video overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.youtube.com/embed/rSilTq4shzA"
              title="US Army Best Commercial of All Times - Us Army Commercial 2018"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
