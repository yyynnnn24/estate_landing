
import { MapPin, Calendar } from 'lucide-react';
import { eventInfo } from '@/data/eventData';

const footerLinks = ['Home', 'About', 'Programme', 'Speakers', 'Venue'];

export default function Footer() {
  return (
    <footer className="bg-[#0d2f3d] text-[#eaf1ee]">
      <div className="mx-auto max-w-[1260px] px-4 py-5 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-4 border-t border-[#1e4857] pt-5 md:flex-row md:items-center md:justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#eaf1ee]">
            Singapore Estate Planning Forum 2026
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-[12px] text-[#d5e3e3]">
            {footerLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-opacity hover:opacity-80">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-[12px] text-[#d5e3e3]">
            <MapPin className="h-4 w-4 text-[#d8bb7a]" />
            <span>{eventInfo.venue}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
