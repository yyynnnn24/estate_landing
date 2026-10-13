import SectionReveal from './SectionReveal';
import { speakers } from '@/data/eventData';

export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#f4efe6] px-4 py-8 text-white sm:px-6 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="rounded-[24px] border border-[#b98e48]/40 bg-[#0b1b36] px-5 py-7 shadow-[0_18px_45px_rgba(7,20,42,0.18)] sm:rounded-[30px] sm:px-8 sm:py-9 lg:px-12 lg:py-11">
          <SectionReveal>
            <div className="mb-8 lg:mb-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d3a34f]">
                Featured Speakers
              </div>
              <h2 className="font-display text-[2.8rem] leading-[0.92] tracking-[-0.05em] text-[#f6f0e7] sm:text-[3.5rem] lg:text-[4rem]">
                Learn from
                <span className="block">Leading Experts</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-3 sm:space-y-4">
            {speakers.map((speaker, idx) => (
              <SectionReveal key={idx}>
                <div className="flex min-w-0 items-center gap-4 rounded-[18px] border border-[#d3a34f]/25 bg-[#f7f3eb] p-4 text-[#0f2b5b] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)] sm:gap-5 sm:p-5">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#d9ba76] bg-[#e1e4e8] sm:h-[84px] sm:w-[84px]">
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-[#0f2b5b] sm:text-lg">
                        {speaker.name}
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-[#a67a3c] sm:text-[15px]">
                        {speaker.title}
                      </p>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-[#34516e] sm:text-[15px]">
                      {speaker.topic}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
