// Event configuration data
export const eventInfo = {
  title: 'Singapore Estate Planning Forum 2026',
  subtitle: 'Practical perspectives on family, property and legacy',
  presentedBy: 'ARLC',
  date: '27 November 2026',
  time: '9am – 5pm',
  venue: 'voco Orchard Singapore',
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
    avatar: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Ooi Li Sun',
    title: 'Director, Wills & Estates, Riverside Planning Services',
    topic: 'Managing a property already held in trust',
    avatar: 'https://images.pexels.com/photos/34761515/pexels-photo-34761515.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Ronald Wong CFP®, TEP',
    title: 'Managing Director, Financial Perspectives',
    topic: 'Estate planning as the foundation of financial planning and wealth management',
    avatar: 'https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Keon Chee',
    title: 'Director, Riverside Trustees; Founder & Executive',
    topic: 'Will and trust missteps',
    avatar: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Low Seow Ling',
    title: 'Founder & Managing Director, Emre Legal LLC',
    topic: 'Cross-border will writing and probate',
    avatar: 'https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Abdul Rahman BMH',
    title: 'Managing Director, Abdul Rahman Law Corporation',
    topic: 'Estate planning for Muslims',
    avatar: 'https://images.pexels.com/photos/8495301/pexels-photo-8495301.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
];

export type AgendaItem = {
  time: string;
  session: string;
  speaker: string;
};

// Full-day programme — TODO: Verify agenda details against the latest event document
export const agenda: AgendaItem[] = [
  { time: '9:00 AM – 9:30 AM', session: 'Registration & Welcome Tea', speaker: '—' },
  { time: '9:30 AM – 10:00 AM', session: 'Opening Address', speaker: 'ARLC Representative' },
  { time: '10:00 AM – 10:45 AM', session: 'Divorce and its financial implications', speaker: 'Angelina Hing' },
  { time: '10:45 AM – 11:15 AM', session: 'Tea Break', speaker: '—' },
  { time: '11:15 AM – 12:00 PM', session: 'Managing a property already held in trust', speaker: 'Ooi Li Sun' },
  { time: '12:00 PM – 12:45 PM', session: 'Estate planning as the foundation of financial planning and wealth management', speaker: 'Ronald Wong CFP®, TEP' },
  { time: '12:45 PM – 1:45 PM', session: 'Networking Lunch', speaker: '—' },
  { time: '1:45 PM – 2:30 PM', session: 'Will and trust missteps', speaker: 'Keon Chee' },
  { time: '2:30 PM – 3:15 PM', session: 'Cross-border will writing and probate', speaker: 'Low Seow Ling' },
  { time: '3:15 PM – 3:45 PM', session: 'Tea Break', speaker: '—' },
  { time: '3:45 PM – 4:30 PM', session: 'Estate planning for Muslims', speaker: 'Abdul Rahman BMH' },
  { time: '4:30 PM – 5:00 PM', session: 'MOU Signings, Product Launch & Joint Graduation Ceremony', speaker: 'ARLC & Partners' },
];

export const highlights = [
  {
    badge: 'LAUNCH',
    title: 'SmartWills Wasiatku Singapore',
    description: 'MOU signing between ARLC and SmartWills — marking the official launch of SmartWills Wasiatku in Singapore.',
    icon: 'Rocket',
  },
  {
    badge: 'ACADEMY',
    title: 'SmartWills RT Academy',
    description: 'A structured pathway for estate planning education, designed to equip practitioners with comprehensive knowledge and certification.',
    icon: 'GraduationCap',
  },
  {
    badge: 'CEREMONY',
    title: 'Graduation',
    description: 'Celebrate the achievements of Riverside Training and Financial Perspectives graduates at the joint graduation ceremony.',
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
