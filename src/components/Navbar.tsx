import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Phone, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "About IDS", href: "/about" },
  { label: "Admissions 2026", href: "/admissions" },
  { label: "Life @ IDS", href: "/life-at-ids" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      <header className={`sticky top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md transition-all duration-300 ${scrolled ? "border-b border-gray-200/80 shadow-sm" : "border-b border-gray-100"}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between gap-4">

          {/* Brand Logo - Primary Saffron Logo on White Background */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img src="/ids-logo-saffron.png" alt="Indus Design School" className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:flex flex-col border-l border-gray-200 pl-3.5">
              <span className="text-[11px] font-bold tracking-wider text-gray-800 uppercase leading-none">Indus University</span>
              <span className="text-[10px] tracking-[0.2em] text-[#e3461a] font-semibold mt-1">SCHOOL OF DESIGN</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.label} to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group py-2 ${isActive ? "text-[#e3461a] font-semibold" : "text-gray-700 hover:text-[#0e1726]"}`}>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#e3461a] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link to="/admissions"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 whitespace-nowrap">
              <GraduationCap size={13} className="text-[#c88732]" />
              <span>Design Hunt</span>
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 whitespace-nowrap">
              <Calendar size={13} className="text-gray-500" />
              <span>Campus Visit</span>
            </Link>
            <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer flex-shrink-0">
              <Search size={14} />
            </button>
            <Link to="/admissions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-md transition-all duration-300 whitespace-nowrap ml-1">
              <span>Apply Now</span>
              <ArrowUpRight size={14} className="text-white/80" />
            </Link>
          </div>

          {/* All Devices Hamburger / Fullscreen Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-50 text-gray-800 transition-all duration-200 cursor-pointer shadow-xs group"
              aria-label="Toggle Navigation Menu"
            >
              <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block font-mono">
                {mobileOpen ? "Close" : "Menu"}
              </span>
              <div className="w-5 h-5 flex items-center justify-center">
                {mobileOpen ? (
                  <X size={18} className="text-[#e3461a] transition-transform group-hover:rotate-90" />
                ) : (
                  <Menu size={18} className="text-gray-800 group-hover:text-[#e3461a] transition-colors" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Search Drawer */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-100 bg-gray-50/90 overflow-hidden">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center gap-3">
                <Search size={16} className="text-gray-400" />
                <input type="text" placeholder="Search programs, admissions, events, campus..."
                  className="w-full bg-transparent border-none text-sm text-[#0e1726] placeholder-gray-400 focus:outline-none" autoFocus />
                <button onClick={() => setSearchOpen(false)} className="text-xs font-bold text-gray-500 hover:text-gray-800 px-3 py-1.5 cursor-pointer">ESC</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HAMBURGER NAVIGATION — 80vh DROPDOWN BELOW NAVBAR, ALL DEVICE TYPES */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 right-0 z-40 bg-[#0e1726] text-white overflow-y-auto shadow-2xl border-b border-white/10"
            style={{ top: '72px', maxHeight: '80vh' }}
          >
            {/* Subtle ambient glows */}
            <div className="absolute top-0 right-0 w-96 h-80 bg-[#e3461a]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-64 bg-[#c88732]/8 rounded-full blur-3xl pointer-events-none" />

            {/* Inner Content */}
            <div className="relative z-10 max-w-[1536px] w-full mx-auto px-5 sm:px-8 lg:px-14">

              {/* Top Sub-bar */}
              <div className="flex items-center justify-between py-3 border-b border-white/10 text-[11px] font-mono text-white/50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e3461a] animate-pulse flex-shrink-0" />
                  <span>INDUS UNIVERSITY • SCHOOL OF DESIGN</span>
                </div>
                <span className="hidden sm:inline-block">ACADEMIC YEAR 2026–27</span>
              </div>

              {/* Three-Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 py-5 lg:py-6">

                {/* Column 1: Primary Nav Links */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#e3461a] font-bold uppercase mb-2 block">
                    NAVIGATION
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {navLinks.map((item, idx) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-baseline gap-3 py-1 text-xl sm:text-2xl lg:text-3xl font-serif font-bold transition-all duration-200 hover:translate-x-2 w-fit"
                        >
                          <span className="text-[10px] font-mono text-[#c88732] font-normal tracking-widest opacity-50 group-hover:opacity-100 transition-opacity w-5">
                            0{idx + 1}
                          </span>
                          <span className={`transition-colors leading-snug ${isActive ? "text-[#e3461a]" : "text-white group-hover:text-[#e3461a]"}`}>
                            {item.label}
                          </span>
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#e3461a] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Degree Programs */}
                <div className="lg:col-span-4 flex flex-col gap-3.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-7">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#c88732] font-bold uppercase block mb-2">
                      DEGREE DISCIPLINES
                    </span>
                    <ul className="space-y-1.5 text-sm text-white/75">
                      {[
                        { label: 'B.Des Interior Design', tag: '4 YRS' },
                        { label: 'B.Des Fashion Design', tag: '4 YRS' },
                        { label: 'B.Des Communication Design', tag: '4 YRS' },
                        { label: 'B.Des Product Design', tag: '4 YRS' },
                      ].map((p) => (
                        <li key={p.label}>
                          <Link to="/academics" onClick={() => setMobileOpen(false)}
                            className="hover:text-[#e3461a] transition-colors flex items-center justify-between group py-0.5">
                            <span className="text-xs">{p.label}</span>
                            <span className="text-[10px] font-mono text-white/35 group-hover:text-white/70 ml-3 flex-shrink-0">{p.tag}</span>
                          </Link>
                        </li>
                      ))}
                      <li className="pt-1.5 mt-0.5 border-t border-white/10">
                        <Link to="/academics" onClick={() => setMobileOpen(false)}
                          className="hover:text-[#e3461a] transition-colors flex items-center justify-between group py-0.5">
                          <span className="text-xs">M.Des UI/UX &amp; Spatial</span>
                          <span className="text-[10px] font-mono text-[#c88732] ml-3 flex-shrink-0">2 YRS</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/academics" onClick={() => setMobileOpen(false)}
                          className="hover:text-[#e3461a] transition-colors flex items-center justify-between group py-0.5">
                          <span className="text-xs">Minor Degree Tracks</span>
                          <span className="text-[10px] font-mono text-[#c88732] ml-3 flex-shrink-0">3 TRACKS</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 font-bold uppercase block mb-1">
                      STUDIO &amp; LABS
                    </span>
                    <p className="text-[11px] text-white/50 leading-relaxed">
                      10+ workshops — claymation, textile draping, CNC prototyping &amp; digital workstations.
                    </p>
                  </div>
                </div>

                {/* Column 3: Admissions CTA */}
                <div className="lg:col-span-3 flex flex-col gap-3.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-7">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex-shrink-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#e3461a] font-bold block mb-1">
                      ENROLLMENT OPEN
                    </span>
                    <h4 className="text-sm font-serif font-bold text-white mb-1 leading-snug">
                      Design Hunt 2026
                    </h4>
                    <p className="text-[11px] text-white/60 leading-relaxed mb-3">
                      Portfolio review, studio test &amp; merit scholarships.
                    </p>
                    <Link
                      to="/admissions"
                      onClick={() => setMobileOpen(false)}
                      className="w-full py-2 px-4 rounded-full bg-[#e3461a] hover:bg-[#c83c14] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Apply for Admissions</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>

                  <div className="text-xs text-white/55 space-y-2">
                    <div className="flex items-start gap-2">
                      <Phone size={12} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white/80 block text-[11px] mb-0.5">Admissions Helpline</span>
                        <a href="tel:+917600016987" className="hover:text-white transition-colors block text-[11px]">+91 76000 16987</a>
                        <a href="tel:+917622007501" className="hover:text-white transition-colors block text-[11px]">+91 76220 07501</a>
                      </div>
                    </div>
                    <p className="text-[10px] text-white/35 leading-relaxed border-t border-white/10 pt-2">
                      Rancharda, Via Shilaj – 382 115. Gujarat, India.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Links */}
              <div className="py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/35 font-mono">
                <div className="flex items-center gap-3">
                  <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors">About Indus</Link>
                  <span>•</span>
                  <Link to="/life-at-ids" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors">Campus Culture</Link>
                  <span>•</span>
                  <Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors">Visit Campus</Link>
                </div>
                <span>© {new Date().getFullYear()} INDUS DESIGN SCHOOL</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
