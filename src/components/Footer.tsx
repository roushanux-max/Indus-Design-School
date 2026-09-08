import { FadeIn } from './AnimationHelpers';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ExternalLink, Share2, Play } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus', href: '#campus' },
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
    <footer className="bg-brand-dark text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <FadeIn delay={0.1} direction="up" className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">I</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-tight">Indus Design</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">School</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              A premier design institution shaping the next generation of creative leaders in India and beyond.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.2} direction="up">
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Programs */}
          <FadeIn delay={0.3} direction="up">
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-widest text-xs">
              Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((prog) => (
                <li key={prog}>
                  <a
                    href="#programs"
                    className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.4} direction="up">
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <div className="text-white font-medium mb-1">Address</div>
                <p>Indus Design School,<br />Pune, Maharashtra 411001, India</p>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Phone</div>
                <a href="tel:+912012345678" className="hover:text-brand-orange transition-colors">
                  +91 20 1234 5678
                </a>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Email</div>
                <a href="mailto:admissions@indusdesignschool.com" className="hover:text-brand-orange transition-colors">
                  admissions@indusdesignschool.com
                </a>
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 bg-brand-orange text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Directions
              <ArrowUpRight size={14} />
            </motion.a>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <FadeIn direction="none" delay={0.5}>
        <div className="border-t border-white/10 max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <span>© 2025 Indus Design School. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};
