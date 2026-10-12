import { Rocket, GraduationCap, Award, type LucideIcon } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { highlights } from '@/data/eventData';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  GraduationCap,
  Award,
};

export default function Highlights() {
  return (
    <section id="highlights" className="bg-[#f4efe6] pt-12 pb-16 lg:pt-14 lg:pb-20">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-5 lg:px-6">
        <SectionReveal>
          <div className="mb-8">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a67a3c]">
              Key Highlights
            </div>
            <h2 className="font-display text-[3.2rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b5b]">
              What to Expect
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, idx) => {
            const Icon = iconMap[highlight.icon] ?? Award;
            return (
              <SectionReveal key={idx}>
                <div className="h-full rounded-[14px] border border-[#d7d0c6] bg-[#f7f3eb] p-5 shadow-[0_8px_20px_rgba(16,29,55,0.03)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#dabd8b] bg-[#f4ead6] text-[#0f2b5b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold leading-[1.4] text-[#0f2b5b]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#495f7d]">
                    {highlight.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
