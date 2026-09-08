import { motion } from 'framer-motion';
import { Compass, Users, Sparkles, Award } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    title: 'Global Perspective',
    desc: 'International exchange partnerships, masterclasses with renowned European and American design scholars, and global studio tours.',
  },
  {
    icon: Users,
    title: 'Visionary Faculty',
    desc: 'Learn directly from practicing architects, master typographers, and design directors who bring live industry challenges into the studio.',
  },
  {
    icon: Award,
    title: 'Real-World Impact',
    desc: 'Consistently ranked among the top design institutions with a 95% placement rate across top global tech, product, and architectural firms.',
  },
];

export const LegacyDark: React.FC = () => {
  return (
    <section id="why-indus" className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Dark container matching Section 5 in reference */}
        <div className="rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-[#0c0f14] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Top Row: Title on left, Featured Highlight Card on right */}
          <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c88732] block mb-3">
                WHY INDUS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                A Legacy of Excellence, a Future of Possibility
              </h2>
            </div>

            {/* Featured Box on Right matching the reference */}
            <div className="lg:col-span-6">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#161c24] border border-white/10 rounded-2xl p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    Pioneering Design Pedagogy
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We blend hands-on traditional craftsmanship with cutting-edge spatial computing, generative AI tools, and sustainable material science. Our students graduate not just as visualizers, but as strategic systems thinkers.
                </p>
              </motion.div>
            </div>

          </div>

          {/* Bottom Row: 3 Feature Columns with Top Border */}
          <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-5">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
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
