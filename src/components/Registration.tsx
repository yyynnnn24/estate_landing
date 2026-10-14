
import { CalendarDays, Mail, Smartphone } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { eventInfo } from '@/data/eventData';

const registerLink =
  'http://app.mysmartwills.com/event/?id=SGESTATEPLANNING';

export default function Registration() {
  return (
    <section
      id="register"
      className="bg-[#f4efe6] px-4 py-8 sm:px-6 lg:py-12"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionReveal>
          <div className="relative isolate grid items-center gap-6 overflow-hidden rounded-[24px] border border-[#b98e48]/40 bg-[#0b1b36] px-4 py-6 text-[#f5f0e7] shadow-[0_18px_45px_rgba(7,20,42,0.18)] min-[480px]:grid-cols-[minmax(135px,0.42fr)_1fr] min-[480px]:gap-5 sm:rounded-[30px] sm:px-6 sm:py-8 md:grid-cols-[minmax(190px,0.55fr)_1fr] md:gap-10 md:px-10 lg:gap-14 lg:px-14 lg:py-12">

            {/* Decorative gold rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-36 -top-44 -z-10 h-[360px] w-[500px] -rotate-[24deg] rounded-[45%] border border-[#d3a34f]/20 shadow-[0_0_0_22px_rgba(211,163,79,0.025),0_0_0_48px_rgba(211,163,79,0.02)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-52 -right-32 -z-10 h-[400px] w-[580px] rotate-[-25deg] rounded-[45%] border border-[#d3a34f]/30 shadow-[0_0_0_22px_rgba(211,163,79,0.025),0_0_0_48px_rgba(211,163,79,0.02)]"
            />

            {/* QR code */}
            <div className="mx-auto w-full max-w-[160px] min-[480px]:max-w-[175px] sm:max-w-[190px] md:max-w-[240px] lg:max-w-[270px]">
              <a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the registration form"
                className="block rounded-[24px] border-[3px] border-[#d3a34f] bg-[#f7f1e6] p-2 transition-transform duration-300 hover:scale-[1.02] sm:rounded-[28px] sm:p-3"
              >
                <img
                  src="/qr.jpeg"
                  alt="Scan this QR code to register for Singapore Estate Planning Forum 2026"
                  className="block aspect-square w-full rounded-[15px] object-contain"
                  loading="lazy"
                />
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-[#d3a34f]">
                <Smartphone
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] sm:text-xs">
                  Scan to register
                </span>
              </div>
            </div>

            {/* Registration information */}
            <div className="min-w-0">
              <h2 className="font-display text-[clamp(1.75rem,7vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#f5f0e7] sm:text-[3.2rem] lg:text-[5rem]">
                Register <span className="italic text-[#d3a34f]">and</span> Pay
              </h2>

              <div
                className="my-4 flex items-center gap-3 sm:my-5 sm:gap-5"
                aria-hidden="true"
              >
                <span className="h-[2px] flex-1 bg-[#d3a34f]" />
                <span className="h-3 w-3 rotate-45 bg-[#d3a34f]" />
                <span className="h-[2px] flex-1 bg-[#d3a34f]" />
              </div>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-[clamp(3rem,12vw,4.2rem)] font-semibold leading-none tracking-[-0.04em] text-[#d3a34f] sm:text-[4.5rem]">
                  {eventInfo.ticketPrice.split(' ')[0]}
                </span>

                <span className="text-base text-[#f5f0e7] sm:text-xl">
                  nett per participant
                </span>
              </div>

              <p className="mt-3 text-[0.95rem] leading-relaxed text-[#e0ddd8] sm:mt-4 sm:text-xl">
                Click the button below or scan the QR code to register.
              </p>

              {/* Register button */}
              <a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#d3a34f] px-5 py-2.5 text-sm font-semibold text-[#0b1b36] transition-colors hover:bg-[#e2b968] sm:mt-5 sm:px-7 sm:py-3 sm:text-base"
              >
                Register Now
                <span aria-hidden="true" className="text-xl">
                  →
                </span>
              </a>

              {/* Deadline and enquiries */}
              <div className="mt-5 border-t border-[#d3a34f]/50 pt-4 sm:mt-7 sm:pt-5">
                <div className="flex items-start gap-3">
                  <Mail
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 shrink-0 text-[#d3a34f] sm:h-7 sm:w-7"
                    strokeWidth={1.8}
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#d3a34f] sm:text-base">
                      Enquiries
                    </p>
                    <p className="mt-1 break-words text-sm text-[#e0ddd8] sm:text-base">
                      {eventInfo.contact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
