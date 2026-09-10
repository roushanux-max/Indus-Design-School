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

      {/* FULL VIEWPORT HAMBURGER NAVIGATION MODAL - ALL DEVICE TYPES */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0e1726] text-white flex flex-col justify-between overflow-y-auto pt-[72px]"
          >
            {/* Background Decorative Graphic */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#e3461a]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#c88732]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Inner Content Grid with Clear Hierarchy */}
            <div className="relative z-10 max-w-[1536px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 flex-1 flex flex-col justify-between">
              
              {/* Top Sub-bar inside fullscreen menu */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10 text-xs font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e3461a] animate-pulse" />
                  <span>INDUS UNIVERSITY • SCHOOL OF DESIGN</span>
                </div>
                <span className="hidden sm:inline-block">ACADEMIC YEAR 2026–27</span>
              </div>

              {/* Main Three-Column Hierarchy Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-8 lg:py-12 my-auto">
                
                {/* Column 1: Primary Navigation (Giant Editorial Typographic Links) */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-2 sm:space-y-3">
                  <span className="text-[11px] font-mono tracking-[0.25em] text-[#e3461a] font-bold uppercase mb-2 block">
                    NAVIGATION INDEX
                  </span>
                  {navLinks.map((item, idx) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-baseline gap-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold transition-all duration-300 hover:translate-x-3 w-fit"
                      >
                        <span className="text-xs sm:text-sm font-mono text-[#c88732] font-normal tracking-widest opacity-60 group-hover:opacity-100">
                          0{idx + 1}
                        </span>
                        <span className={`transition-colors ${isActive ? "text-[#e3461a]" : "text-white group-hover:text-[#e3461a]"}`}>
                          {item.label}
                        </span>
                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 text-[#e3461a] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    );
                  })}
                </div>

                {/* Column 2: Academic Programs Quick Navigation */}
                <div className="lg:col-span-3 flex flex-col justify-center space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
                  <div>
                    <span className="text-[11px] font-mono tracking-[0.25em] text-[#c88732] font-bold uppercase block mb-3">
                      DEGREE DISCIPLINES
                    </span>
                    <ul className="space-y-2.5 text-sm text-white/80">
                      <li>
                        <Link to="/academics" onClick={() => setMobileOpen(false)} className="hover:text-[#e3461a] transition-colors flex items-center justify-between group">
                          <span>B.Des Interior Design</span>
                          <span className="text-[10px] font-mono text-white/40 group-hover:text-white/80">4 YRS</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/academics" onClick={() => setMobileOpen(false)} className="hover:text-[#e3461a] transition-colors flex items-center justify-between group">
                          <span>B.Des Fashion Design</span>
                          <span className="text-[10px] font-mono text-white/40 group-hover:text-white/80">4 YRS</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/academics" onClick={() => setMobileOpen(false)} className="hover:text-[#e3461a] transition-colors flex items-center justify-between group">
                          <span>B.Des Communication Design</span>
                          <span className="text-[10px] font-mono text-white/40 group-hover:text-white/80">4 YRS</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/academics" onClick={() => setMobileOpen(false)} className="hover:text-[#e3461a] transition-colors flex items-center justify-between group">
                          <span>B.Des Product Design</span>
                          <span className="text-[10px] font-mono text-white/40 group-hover:text-white/80">4 YRS</span>
                        </Link>
                      </li>
                      <li className="pt-2 border-t border-white/10">
                        <Link to="/academics" onClick={() => setMobileOpen(false)} className="hover:text-[#e3461a] transition-colors flex items-center justify-between group">
                          <span>M.Des UI/UX &amp; Spatial</span>
                          <span className="text-[10px] font-mono text-[#c88732]">2 YRS</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/academics" onClick={() => setMobileOpen(false)} className="hover:text-[#e3461a] transition-colors flex items-center justify-between group">
                          <span>Minor Degree Tracks</span>
                          <span className="text-[10px] font-mono text-[#c88732]">3 TRACKS</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 font-bold uppercase block mb-2">
                      STUDIO &amp; LABS
                    </span>
                    <p className="text-xs text-white/60 leading-relaxed">
                      10+ specialized studio workshops including claymation, textile draping, CNC prototyping, and digital workstations.
                    </p>
                  </div>
                </div>

                {/* Column 3: Admissions CTA & Direct Contact Info */}
                <div className="lg:col-span-3 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
                  <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#e3461a] font-bold block mb-1">
                      ENROLLMENT OPEN
                    </span>
                    <h4 className="text-lg font-serif font-bold text-white mb-2">
                      Design Hunt 2026 Admissions
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed mb-5">
                      Register online for portfolio review, studio test evaluation, and merit scholarships.
                    </p>
                    <Link
                      to="/admissions"
                      onClick={() => setMobileOpen(false)}
                      className="w-full py-3 px-5 rounded-full bg-[#e3461a] hover:bg-[#c83c14] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                    >
                      <span>Apply for Admissions</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* Campus Address & Direct Helplines */}
                  <div className="space-y-3 text-xs text-white/70">
                    <div className="flex items-start gap-2.5">
                      <Phone size={14} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block font-semibold text-white">Admissions Helpline:</span>
                        <a href="tel:+917600016987" className="hover:text-white transition-colors block">+91 76000 16987</a>
                        <a href="tel:+917622007501" className="hover:text-white transition-colors block">+91 76220 07501</a>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[11px] text-white/50 leading-relaxed">
                      Indus University Campus, Rancharda, Via Shilaj – 382 115. Gujarat, India.
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Row */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
                <div className="flex items-center gap-4">
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
