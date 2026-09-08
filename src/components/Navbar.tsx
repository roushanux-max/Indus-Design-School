import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus', href: '#campus' },
  { label: 'Alumni', href: '#stats' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-brand-orange rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">I</span>
              </div>
              <div>
                <div className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                  Indus Design
                </div>
                <div className={`text-xs tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-brand-gray' : 'text-white/70'}`}>
                  School
                </div>
              </div>
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                className={`text-sm font-medium tracking-wide relative group transition-colors duration-300 ${
                  scrolled ? 'text-brand-dark' : 'text-white/90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#programs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-orange-700 transition-colors duration-300"
          >
            Apply Now
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-dark font-semibold text-xl hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#programs"
                onClick={() => setMobileOpen(false)}
                className="bg-brand-orange text-white px-6 py-3 rounded-full text-center font-semibold"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
