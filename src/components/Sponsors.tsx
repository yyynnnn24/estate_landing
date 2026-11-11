import type { ReactNode } from 'react';
import SectionReveal from './SectionReveal';
import {
  goldSponsors,
  mainSponsor,
  sponsorContactEmail,
  supportingSponsors,
  type Sponsor,
} from '@/data/sponsorData';

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
          <div className="mb-4 flex items-center gap-5">
            <h2 className="font-display whitespace-nowrap text-[32px] font-semibold leading-[1.2] text-[#0f2b5b] sm:text-[40px]">
              Our Sponsors
            </h2>
            <div className="h-px flex-1 bg-[#c8a462]" />
          </div>

          <p className="mb-10 max-w-[720px] text-[17px] leading-[1.7] text-[#0f2b5b]">
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

            <SponsorCard label="Gold Sponsors">
              <SponsorLogos sponsors={goldSponsors} />
            </SponsorCard>

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
