import { Users } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { speakers } from '@/data/eventData';

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
              <Users size={14} />
              <span>Our Expert Speakers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
              Learn from industry leaders
            </h2>
            <p className="text-navy-600 text-base lg:text-lg max-w-2xl mx-auto">
              Six distinguished practitioners sharing their expertise across the full spectrum of estate planning.
            </p>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
          </div>
        </SectionReveal>

        {/* Speaker cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {speakers.map((speaker, idx) => (
            <SectionReveal key={idx}>
              <div
                className="group bg-white rounded-2xl shadow-sm border border-navy-100/50 overflow-hidden hover:shadow-xl hover:shadow-navy-500/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Avatar placeholder box — TODO: Replace with actual speaker headshot */}
                <div className="relative w-full aspect-square overflow-hidden bg-navy-100">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle gold bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Speaker info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-navy-500 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-gold-600 text-sm font-medium mb-4 leading-snug">
                    {speaker.title}
                  </p>
                  <div className="mt-auto pt-4 border-t border-navy-50">
                    <p className="text-xs text-navy-400 font-semibold tracking-wider uppercase mb-1">
                      Presentation
                    </p>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {speaker.topic}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
