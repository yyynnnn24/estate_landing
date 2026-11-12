import type { ReactNode } from 'react';
import GoldSponsors from './GoldSponsors';
import SectionReveal from './SectionReveal';
import {
  mainSponsor,
  sponsorContactEmail,
  supportingSponsors,
  type Sponsor,
} from '@/data/eventData';

function SponsorCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[20px] border border-[#c8a462]/60 bg-white px-6 py-8 shadow-[0_3px_10px_rgba(15,43,91,0.07)] sm:px-10 sm:py-10">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a7430]">
        {label}
      </p>
      {children}
    </div>
  );
}

function SponsorLogos({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
      {sponsors.map((sponsor) => (
        <img
          key={sponsor.name}
          src={sponsor.logo}
          alt={sponsor.name}
          className={`w-auto object-contain ${sponsor.className}`}
        />
      ))}
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className="bg-[#f4efe6] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <SectionReveal>
          <div className="mb-4 flex items-center justify-center gap-5">
            <h2 className="font-display text-[3.1rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b5b]">
              Our Sponsors
            </h2>
            <div/>
          </div>

        <p className="mx-auto mb-3 max-w-[600px] text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a67a3c] leading-[1.8]">
          With thanks to the sponsors who share our commitment to raising the standard of estate planning across the industry.
        </p>

          <div className="space-y-6">
            <SponsorCard label="Main Sponsor">
              <img
                src={mainSponsor.logo}
                alt={mainSponsor.name}
                className={`mx-auto object-contain ${mainSponsor.className}`}
              />
            </SponsorCard>

            <GoldSponsors />

            <SponsorCard label="Supporting Sponsors">
              <SponsorLogos sponsors={supportingSponsors} />
            </SponsorCard>
          </div>

          <p className="mt-10 text-center text-[15px] leading-[1.7] text-[#0f2b5b] sm:text-[16px]">
            Sponsorship opportunities remain open. Interested organisations, please contact{' '}
            <a
              href={`mailto:${sponsorContactEmail}`}
              className="font-semibold text-[#0f2b5b] underline decoration-[#c8a462] underline-offset-4 transition-colors hover:text-[#9a7430] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a462]"
            >
              {sponsorContactEmail}
            </a>{' '}
            (Attention: Fiona).
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
