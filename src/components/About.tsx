import SectionReveal from './SectionReveal';
import { heroImage } from '@/data/eventData';

export default function About() {
  return (
    <section id="about" className="bg-[#f4efe6] py-20">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-5 lg:px-6">
        <SectionReveal>
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.35fr]">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a67a3c]">
                About the forum
              </div>
              <h2 className="font-display text-[3.3rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b5b]">
                Building a Stronger
                <span className="block">Future Together</span>
              </h2>
              <p className="mt-5 max-w-[460px] text-[18px] leading-[1.7] text-[#33506f]">
                The Singapore Estate Planning Forum 2026 brings together industry experts,
                practitioners and community members to share insights, explore the latest developments and foster
                meaningful conversations on estate planning, wealth preservation and legacy.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[18px] border border-[#c9d3d9] bg-[#dfe8ee] shadow-[0_20px_35px_rgba(18,28,42,0.08)]">
                <img src={heroImage} alt="Singapore Skyline" className="h-[360px] w-full object-cover" />
              </div>

              <div className="absolute -bottom-10 right-4 w-[280px] rounded-[18px] border border-[#d9d4cc] bg-[#f8f4ee] p-4 shadow-[0_12px_24px_rgba(15,31,58,0.08)]">
                <ul className="space-y-4 text-[#0f2b5b]">
                  <li className="flex items-start gap-3 text-[14px] leading-[1.5]">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e3d2] text-[12px] font-bold text-[#0f2b5b]">✦</span>
                    <span>Gain insights from industry experts</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] leading-[1.5]">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e3d2] text-[12px] font-bold text-[#0f2b5b]">✦</span>
                    <span>Network with like-minded professionals</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] leading-[1.5]">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e3d2] text-[12px] font-bold text-[#0f2b5b]">✦</span>
                    <span>Be part of a forward-thinking community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
