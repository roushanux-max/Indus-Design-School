import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About IDS', href: '/about' },
  { label: 'Academic Programs', href: '/academics' },
  { label: 'Admissions 2026', href: '/admissions' },
  { label: 'Life @ IDS & Events', href: '/life-at-ids' },
  { label: 'Campus & Contact', href: '/contact' },
];

const programLinks = [
  { label: 'B.Des Interior Design (4 Yrs)', href: '/academics' },
  { label: 'B.Des Fashion Design (4 Yrs)', href: '/academics' },
  { label: 'B.Des Communication Design (4 Yrs)', href: '/academics' },
  { label: 'B.Des Product Design (4 Yrs)', href: '/academics' },
  { label: 'M.Des UI/UX Design (2 Yrs)', href: '/academics' },
  { label: 'M.Des Interior Design (2 Yrs)', href: '/academics' },
  { label: 'M.Des Fashion Design (2 Yrs)', href: '/academics' },
  { label: 'Minor Degree in Design', href: '/academics' },
];

const flagshipEvents = [
  { label: 'Aikyam Fest 2025', href: '/life-at-ids' },
  { label: 'Design Scapes Annual Exhibition', href: '/life-at-ids' },
  { label: 'Claymation Animation Lab', href: '/life-at-ids' },
  { label: 'RSP Rural Study Program', href: '/life-at-ids' },
  { label: 'Design Hunt 2026', href: '/admissions' },
  { label: 'Vidvata Merit Scholarship', href: '/admissions' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/indus_ids' },
  { label: 'Facebook', href: 'https://www.facebook.com/designschoolindus' },
  { label: 'YouTube', href: 'https://www.youtube.com/@indusdesignschool6887' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0d12] text-white rounded-t-[32px] sm:rounded-t-[44px] overflow-hidden pt-16 sm:pt-20 pb-10 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top 4-Column Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Crest Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* White Indus Design School Logo on Dark Background alongside Indus University Crest */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/ids-logo-white.png"
                  alt="Indus Design School"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
                <div className="h-9 w-[1px] bg-white/20" />
                <img
                  src="/indus-univ-logo.png"
                  alt="Indus University"
                  className="h-10 sm:h-11 w-auto object-contain opacity-90"
                />
              </div>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                A leading design college under Indus University offering UGC-recognized B.Des &amp; M.Des degrees in Interior, Fashion, Communication, Product, and UI/UX Design.
              </p>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                  <span>Rancharda, Via: Shilaj, Ahmedabad – 382 115. Gujarat, India.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-[#e3461a] flex-shrink-0" />
                  <span>+91 76000 16987, +91 76220 07501</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-[#e3461a] flex-shrink-0" />
                  <span>ids@indusuni.ac.in</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-[#e3461a] hover:text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <span>Apply for Admissions 2026–27</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c88732] mb-5">
              Explore IDS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c88732] mb-5">
              Academics & Degrees
            </h4>
            <ul className="space-y-2.5">
              {programLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Flagship Events & Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c88732] mb-5">
              Life @ IDS & Connect
            </h4>
            <ul className="space-y-2.5 mb-6">
              {flagshipEvents.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Official Social Channels
            </h5>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Giant Oxford-Style Typographic Watermark at Bottom */}
        <div className="pt-12 pb-4 text-center select-none pointer-events-none">
          <div className="font-serif font-black tracking-tight text-white/5 hover:text-white/10 text-[clamp(2.5rem,10vw,8.5rem)] leading-none uppercase transition-colors duration-500">
            INDUS DESIGN SCHOOL
          </div>
        </div>

        {/* Bottom Legal Copyright Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Indus Design School, Indus University. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Vision & Mission</Link>
            <Link to="/admissions" className="hover:text-white transition-colors">Admissions Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Campus Location</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
