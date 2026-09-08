import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const mainNav = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#why-indus' },
  { label: 'Academics', href: '#programs' },
  { label: 'News', href: '#news' },
];

const pillNav = [
  { label: 'Community', href: '#campus' },
  { label: 'Offices', href: '#contact' },
  { label: 'Experience', href: '#campus' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'border-b border-gray-200/80 shadow-xs' : 'border-b border-gray-100'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          
          {/* Brand Logo with University Crest */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-lg bg-[#0e1726] flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs group-hover:bg-brand-orange transition-colors duration-300">
              <span>IDS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-tight text-[#0e1726] leading-tight">
                INDUS DESIGN SCHOOL
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium">
                PUNE, INDIA
              </span>
            </div>
          </a>

          {/* Center Main Nav Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {mainNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0e1726] transition-colors duration-200 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0e1726] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action Pills (from Dribbble reference) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {pillNav.map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <span>{pill.label}</span>
                <ChevronDown size={12} className="text-gray-400" />
              </a>
            ))}

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <Search size={14} />
            </button>

            {/* Primary Dark Navy CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-md transition-all duration-300 ml-2"
            >
              <span>Apply</span>
              <ArrowUpRight size={14} className="text-white/80" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-100 bg-[#FAF7F2] overflow-hidden"
            >
              <div className="max-w-3xl mx-auto py-4 px-6">
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-xs">
                  <Search size={16} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search programs, admissions, faculty, or campus..."
                    className="w-full bg-transparent text-sm focus:outline-none text-gray-800"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    ESC
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-200 shadow-xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {[...mainNav, ...pillNav].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-brand-orange py-2 border-b border-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full py-3 text-center rounded-full bg-[#0e1726] text-white font-semibold text-sm"
              >
                Apply for Admission
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
