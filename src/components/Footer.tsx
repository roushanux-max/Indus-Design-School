import { ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'About Indus', href: '#about' },
  { label: 'Academic Programs', href: '#programs' },
  { label: 'Admissions 2025', href: '#contact' },
  { label: 'Campus & Studios', href: '#campus' },
  { label: 'Faculty Directory', href: '#why-indus' },
  { label: 'Research & Labs', href: '#why-indus' },
];

const programLinks = [
  'B.Des Interior Design',
  'B.Des Fashion Design',
  'B.Des Graphic Design',
  'B.Des Product Design',
  'B.Des UI/UX Design',
  'M.Des Design Studies',
];

const aboutLinks = [
  { label: 'Our Heritage', href: '#about' },
  { label: 'Leadership & Board', href: '#about' },
  { label: 'Strategic Vision 2030', href: '#about' },
  { label: 'Industry Collaborations', href: '#why-indus' },
  { label: 'Career Outcomes', href: '#about' },
];

const connectLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Twitter / X', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0d12] text-white rounded-t-[32px] sm:rounded-t-[44px] overflow-hidden pt-16 sm:pt-20 pb-8 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top 4-Column Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Crest Column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-orange text-white flex items-center justify-center font-serif font-bold text-lg">
                  IDS
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-white leading-tight">
                    INDUS DESIGN
                  </div>
                  <div className="text-[10px] tracking-[0.2em] text-white/50 uppercase font-medium">
                    SCHOOL
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
                Indus Design School, Pune Campus<br />
                Maharashtra 411001, India<br />
                Tel: +91 20 1234 5678
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-xs font-semibold transition-all duration-300"
              >
                <span>Admissions Portal</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              Academics
            </h4>
            <ul className="space-y-3">
              {programLinks.map((prog) => (
                <li key={prog}>
                  <a
                    href="#programs"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              About Us
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Giant Watermark Typography matching Section 9 of reference image */}
        <div className="py-10 text-center select-none overflow-hidden">
          <div className="font-serif font-bold text-white/10 tracking-tight text-[clamp(4.5rem,19vw,16rem)] leading-none">
            Indus
          </div>
        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2025 Indus Design School. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Accreditation</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
