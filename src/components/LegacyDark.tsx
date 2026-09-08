import { motion } from 'framer-motion';
import { Sparkles, Layers, Briefcase, Users, FolderCheck, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const pedagogyPillars = [
  {
    icon: Layers,
    title: 'Industry-Focused Curriculum',
    desc: 'Regularly updated course modules designed alongside leading design studios, architect firms, and creative agencies.',
  },
  {
    icon: Users,
    title: 'Experienced Faculty & Mentors',
    desc: 'Learn directly from accomplished practitioners, academic researchers, and visiting design directors from India and abroad.',
  },
  {
    icon: Compass,
    title: 'Hands-On Studio Learning',
    desc: 'Over 70% of learning happens through real physical prototyping, tactile crafting, digital drafting, and material explorations.',
  },
  {
    icon: FolderCheck,
    title: 'Strong Portfolio Development',
    desc: 'Every semester culminates in tangible student design portfolios, exhibitions, jury reviews, and client-ready case studies.',
  },
  {
    icon: Briefcase,
    title: 'Career-Oriented Training',
    desc: 'Structured internships, campus placement drives, and entrepreneurial incubation support at Indus University.',
  },
];

export const LegacyDark: React.FC = () => {
  return (
    <section id="why-indus" className="py-10 sm:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Dark container matching Section 5 in Oxford reference */}
        <div className="rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-[#0c0f14] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />

          {/* Top Row: Title on left, Featured Highlight Card on right */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-start mb-16">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c88732] block mb-3">
                WHY CHOOSE IDS PEDAGOGY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
                A Legacy of Excellence, a Future of Possibility
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Built on innovation, cultural heritage, and real-world application, Indus Design School bridges artistic intuition with cutting-edge industry methodologies.
              </p>
            </div>

            {/* Featured Box on Right: Our Vision */}
            <div className="lg:col-span-6">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#161c24] border border-white/15 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e3461a]/20 text-[#e3461a] flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#c88732]">
                      Institutional Vision
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white">
                      Shaping the Future of Global Design
                    </h3>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-[#e3461a] pl-4 my-3">
                  “To become a leading design institution that nurtures creative thinkers and innovators who can shape the future of design globally.”
                </blockquote>
                <div className="pt-2 text-right">
                  <Link
                    to="/about"
                    className="text-xs font-semibold text-[#c88732] hover:text-white transition-colors"
                  >
                    Explore our philosophy &rarr;
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Bottom Row: 5 Pedagogy Pillars Columns with Top Border */}
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-10 border-t border-white/10">
            {pedagogyPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#c88732] mb-5">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-serif font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
