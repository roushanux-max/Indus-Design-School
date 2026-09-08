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

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img src="/ids-desktop-logo.png" alt="Indus Design School" className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:flex flex-col border-l border-gray-200 pl-3.5">
              <span className="text-[11px] font-bold tracking-wider text-gray-800 uppercase leading-none">Indus University</span>
              <span className="text-[10px] tracking-[0.2em] text-[#e3461a] font-semibold mt-1">AHMEDABAD, GUJARAT</span>
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

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-b border-gray-200 overflow-hidden">
              <div className="px-6 py-6 space-y-5">
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link key={item.label} to={item.href}
                        className={`text-base font-medium py-3 px-3 rounded-xl border-b border-gray-100 last:border-none transition-colors ${isActive ? "text-[#e3461a] font-semibold bg-red-50" : "text-gray-800 hover:text-[#0e1726] hover:bg-gray-50"}`}>
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="pt-2 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 pb-1">
                    <Phone size={13} className="text-[#e3461a]" />
                    <span>+91 76000 16987 / +91 76220 07501</span>
                  </div>
                  <Link to="/admissions"
                    className="w-full text-center py-3.5 px-6 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black transition-colors">
                    Apply for Admissions 2026–27
                  </Link>
                  <Link to="/contact"
                    className="w-full text-center py-3 px-6 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                    Schedule Campus Visit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
