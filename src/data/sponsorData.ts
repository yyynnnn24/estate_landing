export type Sponsor = {
  name: string;
  logo: string;
  className: string;
};

export const sponsorContactEmail = 'admin@smartwills.com.my';

export const mainSponsor: Sponsor = {
  name: 'Synergy Financial Advisers',
  logo: '/logo2.png',
  className: 'h-auto w-full max-w-[340px] sm:max-w-[400px]',
};

export const goldSponsors: Sponsor[] = [
  {
    name: 'Riverside Planning Services',
    logo: '/sponsors/riverside-planning.png',
    className: 'h-20 sm:h-24',
  },
  {
    name: 'Financial Perspectives',
    logo: '/sponsors/financial-perspectives.png',
    className: 'h-16 sm:h-20',
  },
  {
    name: 'GoalsMapper',
    logo: '/sponsors/goalsmapper.png',
    className: 'h-6 sm:h-7',
  },
];

export const supportingSponsors: Sponsor[] = [
  {
    name: 'Advisors Alliance Group',
    logo: '/sponsors/advisors-alliance.png',
    className: 'h-10 sm:h-12',
  },
  {
    name: 'GoalsMapper',
    logo: '/sponsors/goalsmapper.png',
    className: 'h-6 sm:h-7',
  },
];
