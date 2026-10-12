import SectionReveal from './SectionReveal';
import { speakers } from '@/data/eventData';

export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#0d3e3f] py-16 text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5 lg:px-6">
        <SectionReveal>
          <div className="mb-8 lg:mb-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8c09a]">
              Featured Speakers
            </div>
            <h2 className="font-display text-[3rem] leading-[0.9] tracking-[-0.06em] text-[#f6f0e7] sm:text-[4rem] lg:text-[5rem]">
              Learn from
              <span className="block">Leading Experts</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="space-y-4">
          {speakers.map((speaker, idx) => (
            <SectionReveal key={idx}>
              <div className="flex items-center gap-4 rounded-[18px] border border-[#d2c39c]/30 bg-[#f5f1ea] p-4 text-[#0f2b5b] shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-0.5 sm:gap-6 sm:p-5 lg:gap-7 lg:p-6">
                <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#d9ba76] bg-[#e1e4e8] sm:h-[96px] sm:w-[96px] lg:h-[108px] lg:w-[108px]">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-3">
                    <h3 className="font-display text-[2rem] leading-[1] tracking-[-0.04em] text-[#0f2b5b] sm:text-[2.4rem]">
                      {speaker.name}
                    </h3>
                    <p className="text-[1rem] leading-[1.4] text-[#123a64] sm:text-[1.1rem]">
                      {speaker.title}
                    </p>
                  </div>

                  <p className="mt-2 text-[1.1rem] leading-[1.5] text-[#123a64] sm:text-[1.2rem]">
                    {speaker.topic}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
