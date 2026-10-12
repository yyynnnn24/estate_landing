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
    <section id="highlights" className="py-20 lg:py-28 bg-navy-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-gold-400 font-semibold text-xs tracking-widest uppercase mb-3">
              <span>Forum Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Key moments of the forum
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
          </div>
        </SectionReveal>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, idx) => {
            const Icon = iconMap[highlight.icon] ?? Award;
            return (
              <SectionReveal key={idx}>
                <div
                  className="group relative bg-navy-600/40 border border-navy-400/20 rounded-2xl p-8 hover:bg-navy-600/60 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 h-full backdrop-blur-sm"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gold-500/15 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-all duration-500">
                    <Icon size={28} className="text-gold-400 group-hover:text-navy-600 transition-colors duration-500" />
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-300 text-xs font-bold tracking-widest uppercase rounded-md mb-4">
                    {highlight.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-snug">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-100/70 text-sm lg:text-base leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 w-12 h-0.5 bg-gold-500/40 group-hover:w-full transition-all duration-500" />
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
