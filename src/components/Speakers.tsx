
import { Users } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { speakers } from '@/data/eventData';

export default function Speakers() {
  return (
    <section id="speakers" className="py-12 lg:py-16 bg-bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
              <Users size={14} />
              <span>Our Expert Speakers</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-navy-500 mb-3">
              Learn from industry leaders
            </h2>

            <p className="text-navy-600 text-sm max-w-2xl mx-auto">
              Six distinguished practitioners sharing their expertise across the full spectrum of estate planning.
            </p>

            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
          </div>
        </SectionReveal>

        {/* Speaker cards — one per row */}
        <div className="flex flex-col gap-4">
          {speakers.map((speaker, idx) => (
            <SectionReveal key={idx}>
              <div className="group bg-white rounded-xl shadow-sm border border-navy-100/50 overflow-hidden hover:shadow-lg transition-all duration-300 flex items-center gap-4 p-4">
                {/* Avatar */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-full bg-navy-100">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Speaker info */}
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base font-bold text-navy-500 mb-1">
                    {speaker.name}
                  </h3>

                  <p className="text-gold-600 text-xs sm:text-sm font-medium mb-2 leading-snug">
                    {speaker.title}
                  </p>

                  <p className="text-navy-700 text-sm leading-relaxed">
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
