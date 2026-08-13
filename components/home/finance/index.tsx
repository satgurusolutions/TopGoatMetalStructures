import Link from 'next/link';
import RTOPaymentsForm from '@/components/shared/quote-form/rto-payment-form';

const benefits = [
  'Fast and simple approval process',
  'Financing terms up to 84 months',
  '$0 down options on qualifying buildings',
  // 'Military and first-responder discount',
];

export default function Finance() {
  return (
    <section
      id="financing"
      className="relative overflow-hidden border-y border-white/5 bg-[#0b0b0c] py-20 text-[#f4f1ea] sm:py-24 lg:min-h-[680px] lg:py-[120px]"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute top-1/2 left-[24%] h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#d49a20]/[0.035] blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-7 lg:grid-cols-[2fr_1fr] lg:items-center lg:gap-20">
        {/* Left content */}
        <div className="max-w-[610px]">
          <span className="font-oswald inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#d9a225] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#d9a225]" />
            Financing options
          </span>

          <h2 className="font-anton mt-5 text-[clamp(3rem,5.5vw,4.7rem)] leading-[0.92] font-normal tracking-[-0.02em] uppercase">
            Build now.{' '}
            <span className="bg-gradient-to-r from-[#f5ca55] via-[#dfa72e] to-[#b57a15] bg-clip-text text-transparent">
              Pay over time.
            </span>
          </h2>

          <p className="mt-5 max-w-[590px] text-[16px] leading-[1.55] text-[#aaa397]">
            Flexible financing helps you get your building installed sooner with affordable monthly
            payments and fast approvals.
          </p>

          <ul className="mt-7 space-y-4">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px] font-medium text-[#f1eee7] sm:text-base"
              >
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f6cf63] to-[#c88a18] text-[13px] font-bold text-[#171109]">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#quote"
              className="font-oswald inline-flex min-h-[58px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#f6cf63] via-[#e2aa2f] to-[#bd8218] px-8 text-sm font-bold tracking-[0.04em] text-[#171109] uppercase shadow-[0_18px_40px_-18px_rgba(224,168,45,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_-16px_rgba(224,168,45,0.75)]"
            >
              Check my payment
            </Link>

            <a
              href="tel:tel:+13365093443"
              className="font-oswald inline-flex min-h-[58px] items-center justify-center rounded-[10px] border border-[#d9a225] px-8 text-sm font-bold tracking-[0.04em] text-[#e5b43f] uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#d9a225] hover:text-[#171109]"
            >
              Call (336) 509-3443
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <RTOPaymentsForm />
        </div>
      </div>
    </section>
  );
}
