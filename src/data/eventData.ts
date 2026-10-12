// Event configuration data
export const eventInfo = {
  title: 'Singapore Estate Planning Forum 2026',
  subtitle: 'Practical perspectives on family, property and legacy',
  presentedBy: 'ARLC',
  date: '27 November 2026',
  time: '9am – 5pm',
  venue: 'Voco Orchard Singapore',
  ticketPrice: '$150 nett per participant',
  registrationCloseDate: '[date]', // TODO: Replace with actual registration closing date
  contact: '[contact]', // TODO: Replace with actual contact email/phone
};

// Hero background image — TODO: Replace with actual conference ballroom photo
export const heroImage = 'https://images.pexels.com/photos/19569865/pexels-photo-19569865.jpeg?auto=compress&cs=tinysrgb&w=1920';

export type Speaker = {
  name: string;
  title: string;
  topic: string;
  avatar: string;
};

// Speaker avatars — TODO: Replace with actual speaker headshots
export const speakers: Speaker[] = [
  {
    name: 'Angelina Hing',
    title: 'Founder, Integro Law',
    topic: 'Divorce and its financial implications',
    avatar: '/s1.png',
  },
  {
    name: 'Ooi Li Sun',
    title: 'Director, Wills & Estates, Riverside Planning Services',
    topic: 'Managing a property already held in trust',
    avatar: '/s2.png',
  },
  {
    name: 'Ronald Wong',
    title: 'CFP®, TEP - Managing Director, Financial Perspectives',
    topic: 'Estate planning as the foundation of financial planning and wealth management',
    avatar: '/s3.png',
  },
  {
    name: 'Keon Chee',
    title: 'Founder & Executive Director, Riverside Trustees',
    topic: 'Will and trust missteps',
    avatar: '/s4.png',
  },
  {
    name: 'Low Seow Ling',
    title: 'Founder & Managing Director, Emre Legal LLC',
    topic: 'Cross-border will writing and probate',
    avatar: '/s5.png',
  },
  {
    name: 'Abdul Rahman BMH',
    title: 'Managing Director, Abdul Rahman Law Corporation',
    topic: 'Estate planning for Muslims',
    avatar: '/s6.png',
  },
];

export interface AgendaItem {
  time: string;
  session: string;
  speaker: string;
  isBold?: boolean; // for MOU / Graduation bold text
}

export const agenda: AgendaItem[] = [
  { time: '9:00 AM – 9:30 AM', session: 'Registration & networking', speaker: '—' },
  { time: '9:30 AM – 9:45 AM', session: 'Welcome & Opening Address', speaker: 'Ronald Wong' },
  { time: '9:45 AM – 10:35 AM', session: 'Divorce and its financial implications', speaker: 'Angelina Hing' },
  { time: '10:35 AM – 10:55 AM', session: 'Tea Break', speaker: '—' },
  { time: '10:55 AM – 11:45 AM', session: 'Managing a property already held in trust', speaker: 'Ooi Li Sun' },
  { time: '11:45 AM – 12:00 PM', session: 'Estate planning as the foundation of financial planning and wealth management', speaker: 'Ronald Wong' },
  { time: '12:00 PM – 12:20 PM', session: 'Graduation ceremony: Riverside Training and Financial Perspectives', speaker: '—', isBold: true },
  { time: '12:20 PM – 12:35 PM', session: 'MOU signing: SmartWills RT Academy and Financial Perspectives', speaker: '—', isBold: true },
  { time: '12:35 PM – 1:35 PM', session: 'Lunch', speaker: '—' },
  { time: '1:35 PM – 2:25 PM', session: 'Will and trust missteps', speaker: 'Keon Chee' },
  { time: '2:25 PM – 2:40 PM', session: 'MOU signing: Riverside Trustees and SmartWills', speaker: '—', isBold: true },
  { time: '2:40 PM – 3:30 PM', session: 'Cross‑border will writing and probate', speaker: 'Low Seow Ling' },
  { time: '3:30 PM – 3:45 PM', session: 'Tea Break', speaker: '—' },
  { time: '3:45 PM – 4:35 PM', session: 'Estate planning for Muslims', speaker: 'Abdul Rahman BMH' },
  { time: '4:35 PM – 4:50 PM', session: 'MOU signing: ARLC and SmartWills — launch of Wasiatku Singapore', speaker: '—', isBold: true },
  { time: '4:50 PM – 5:00 PM', session: 'Closing and farewell', speaker: 'Keon Chee and Ronald Wong' },
];


export const highlights = [
  {
    badge: 'LAUNCH',
    title: 'SmartWills Wasiatku Singapore',
    description: 'Marked by an MOU signing between ARLC and SmartWills',
    icon: 'Rocket',
  },
  {
    badge: 'ACADEMY',
    title: 'SmartWills RT Academy',
    description: 'Creating a structured pathway for estate planning education',
    icon: 'GraduationCap',
  },
  {
    badge: 'CEREMONY',
    title: 'Graduation',
    description: 'Celebrating the graduates of Riverside Training and Financial Perspectives',
    icon: 'Award',
  },
];

export const aboutBullets = [
  'Full-day practical talks covering divorce, trusts, wills, cross-border probate, and Muslim estate planning',
  '3 MOU signings',
  'Product launch',
  'Joint graduation ceremony',
  'Networking, tea breaks and lunch included',
];
