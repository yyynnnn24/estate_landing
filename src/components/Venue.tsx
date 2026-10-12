import { MapPin } from 'lucide-react';
import { eventInfo } from '@/data/eventData';

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=voco+Orchard+Singapore+581+Orchard+Road+Singapore+238883';
const wazeUrl = 'https://waze.com/ul?q=voco%20Orchard%20Singapore%20581%20Orchard%20Road%20Singapore%20238883&navigate=yes';

export default function Venue() {
  return (
    <section id="venue" className="bg-[#0d2f4d] py-0 text-white">
      <div className="mx-auto max-w-[1080px] px-4 py-6 sm:px-5 lg:px-6">
        <div className="overflow-hidden rounded-[18px] border border-[#214b66] bg-[#0d2f4d] shadow-[0_18px_32px_rgba(5,14,26,0.18)]">
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center bg-[#0d2f4d] p-5 sm:p-6">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d9c39f]">
                Event Venue
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#d6b67c] text-[#d6b67c]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#f3eada]">{eventInfo.venue}</div>
                  <div className="mt-1 text-[14px] text-[#d8e4ec]">581 Orchard Road, Singapore 238883</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#f3eada] hover:text-[#d9c39f]">
                  View on Google Maps <span aria-hidden="true">→</span>
                </a>
                <a href={wazeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#f3eada] hover:text-[#d9c39f]">
                  Open in Waze <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <img
              src="/voco-orchard.jpg"
              alt="Entrance to voco Orchard Singapore"
              className="h-[180px] w-full object-cover object-center md:h-full md:min-h-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
