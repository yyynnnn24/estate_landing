import { Scale, MapPin, Calendar } from 'lucide-react';
import { eventInfo } from '@/data/eventData';

export default function Footer() {
  return (
    <footer className="bg-navy-700 border-t border-navy-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center">
              <Scale size={20} className="text-gold-400" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-sm">
                {eventInfo.title}
              </p>
              <p className="text-navy-200/60 text-xs mt-0.5">
                Presented by {eventInfo.presentedBy}
              </p>
            </div>
          </div>

          {/* Right: venue-date note */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-navy-200/60 text-xs">
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

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-navy-600/50 text-center">
          <p className="text-navy-200/50 text-xs">
            © 2026 {eventInfo.presentedBy}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
