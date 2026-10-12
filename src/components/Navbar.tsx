// import { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { eventInfo } from '@/data/eventData';

// const navLinks = [
//   { label: 'About', href: '#about' },
//   { label: 'Highlights', href: '#highlights' },
//   { label: 'Speakers', href: '#speakers' },
//   { label: 'Programme', href: '#programme' },
//   { label: 'Register', href: '#register' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-navy-500 shadow-lg shadow-navy-900/20'
//           : 'bg-navy-500/95 backdrop-blur-sm'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo / Title */}
//           <a href="#top" className="flex items-center gap-2 group">
//             <span className="text-gold-500 font-bold text-xs tracking-widest uppercase hidden sm:block">
//               ARLC
//             </span>
//             <span className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-tight group-hover:text-gold-200 transition-colors">
//               {eventInfo.title}
//             </span>
//           </a>

//           {/* Desktop Nav Links */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-navy-50 hover:text-gold-400 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 {link.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </div>

//           {/* Register CTA */}
//           <div className="flex items-center gap-3">
//             <a
//               href="#register"
//               className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-700 font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
//             >
//               Register Now
//             </a>

//             {/* Mobile menu toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="lg:hidden text-white p-2 hover:text-gold-400 transition-colors"
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="lg:hidden pb-4 animate-fade-in">
//             <div className="flex flex-col gap-2 pt-2">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="text-navy-50 hover:text-gold-400 hover:bg-navy-600/50 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               <a
//                 href="#register"
//                 onClick={() => setMobileOpen(false)}
//                 className="sm:hidden mt-2 mx-4 inline-flex items-center justify-center px-5 py-3 bg-gold-500 hover:bg-gold-400 text-navy-700 font-semibold text-sm rounded-lg transition-all duration-300"
//               >
//                 Register Now
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
