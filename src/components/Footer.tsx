import { FadeIn } from './AnimationHelpers';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Share2, Play, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'Faculty', href: '#' },
  { label: 'Events', href: '#' },
];

const programLinks = [
  'Interior Design',
  'Fashion Design',
  'Graphic Design',
  'Product Design',
  'UI/UX Design',
  'Design Studies (M.Des)',
];

const socials = [
  { icon: Globe, label: 'Instagram', href: '#' },
  { icon: Share2, label: 'LinkedIn', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
  { icon: ExternalLink, label: 'Twitter', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">

          {/* Brand — 4 cols */}
          <FadeIn delay={0.1} direction="up" className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>IDS</span>
              </div>
              <div>
                <div className="font-semibold text-[15px] text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Indus Design School</div>
                <div className="text-white/30 text-[10px] tracking-[0.18em] uppercase">Pune, India</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              A premier design institution shaping the next generation of creative leaders in India and beyond.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Links — 2 cols each */}
          <FadeIn delay={0.2} direction="up" className="col-span-6 lg:col-span-2">
            <h4 className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 group flex items-center gap-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.25} direction="up" className="col-span-6 lg:col-span-2">
            <h4 className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((prog) => (
                <li key={prog}>
                  <a href="#programs"
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 group flex items-center gap-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{prog}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.3} direction="up" className="col-span-12 lg:col-span-4">
            <h4 className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Get In Touch</h4>
            <div className="space-y-5">
              {[
                { label: 'Address', val: 'Indus Design School, Pune, Maharashtra 411001, India' },
                { label: 'Phone', val: '+91 20 1234 5678', href: 'tel:+912012345678' },
                { label: 'Email', val: 'admissions@indusdesignschool.com', href: 'mailto:admissions@indusdesignschool.com' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-white/25 text-[10px] tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}>{item.val}</a>
                    : <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{item.val}</p>
                  }
                </div>
              ))}
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 mt-7 bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get Directions
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/20 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 Indus Design School. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
