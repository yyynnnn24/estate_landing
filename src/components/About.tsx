import { Check, Info, Scale } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { eventInfo, aboutBullets } from '@/data/eventData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
              <Info size={14} />
              <span>About This Forum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
              A full day of practical estate planning insights
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
          </div>

          {/* Intro text */}
          <p className="text-navy-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Join us for a full day of practical talks on divorce, trusts, wills, cross-border probate and estate planning for Muslims — with three MOU signings, a launch, and our joint graduation ceremony
          </p>

          {/* Bullet points */}
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100/50 p-6 sm:p-10">
            <ul className="grid gap-4 sm:grid-cols-2">
              {aboutBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/15 flex items-center justify-center mt-0.5 group-hover:bg-gold-500 transition-all duration-300">
                    <Check size={16} className="text-gold-600 group-hover:text-white transition-colors duration-300" />
                  </span>
                  <span className="text-navy-700 text-base leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Presented by logo — TODO: Replace the ARLC mark with the official sponsor logo */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-navy-100/50 bg-white px-6 py-7 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy-400">
              Presented by
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500 text-gold-400">
                <Scale size={25} strokeWidth={1.8} />
              </div>
              <span className="text-2xl font-bold tracking-[0.12em] text-navy-500">
                {eventInfo.presentedBy}
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
