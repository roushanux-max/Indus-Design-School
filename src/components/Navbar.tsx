import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl border-b border-black/5 shadow-[0_1px_40px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 bg-brand-orange rounded-lg group-hover:rounded-xl transition-all duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-base"
                style={{ fontFamily: 'Syne, sans-serif' }}>IDS</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-semibold text-[15px] tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#0a0a0a]' : 'text-white'}`}
                style={{ fontFamily: 'Syne, sans-serif' }}>
                Indus Design
              </span>
              <span className={`text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
                School
              </span>
            </div>
          </a>

          {/* Desktop Nav in modern glass pill */}
          <nav className={`hidden lg:flex items-center gap-6 px-6 py-2 rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-black/[0.04] border-black/10'
              : 'bg-white/10 backdrop-blur-md border-white/15'
          }`}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
                className={`relative py-1 text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-800 hover:text-brand-orange'
                    : 'text-white/80 hover:text-white'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="hidden lg:flex items-center gap-3"
          >
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide bg-brand-orange text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/40 transition-all duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span>Apply Now</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={12} className="text-white" />
              </span>
            </motion.a>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'text-[#0a0a0a] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={20} /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={20} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-2 mb-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-white text-4xl font-bold py-3 border-b border-white/10 hover:text-[#e3461a] transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#programs"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#e3461a] text-white px-8 py-4 rounded-full font-semibold text-lg self-start"
            >
              Apply Now <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
