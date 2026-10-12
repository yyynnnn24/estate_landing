
import { MapPin, Calendar } from 'lucide-react';
import { eventInfo } from '@/data/eventData';

export default function Footer() {
  return (
    <footer className="bg-navy-700 border-t border-navy-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-6 text-center">

          {/* Closing sentence */}
          <div>
            <div className="w-12 h-0.5 bg-gold-500/50 mx-auto mb-4" />
            <p className="text-navy-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              We look forward to seeing you at {eventInfo.venue} on {eventInfo.date}.
            </p>
          </div>

          {/* Venue and date */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-navy-200/60 text-xs">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-gold-500/70" />
              <span>{eventInfo.date}, {eventInfo.time}</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-navy-500/50" />

            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold-500/70" />
              <span>{eventInfo.venue}</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
