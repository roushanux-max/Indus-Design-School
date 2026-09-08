import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Full-width rounded card matching reference Section 3 */}
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden min-h-[500px] lg:min-h-[600px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-2xl">
          
          {/* Background Image: Atmospheric Studio & Design Library */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&q=85&auto=format"
              alt="Indus Design Studio & Library"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Top Row: Label & Headline + Right Action Link */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
                FACILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                Exceptional Facilities Designed to Support Learning, Research, and Discovery
              </h2>
            </div>

            <div>
              <a
                href="#campus"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Explore All Studios</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Bottom Row: Giant "02 / Studio" Title + Timeline Progress Bar */}
          <div className="relative z-10 pt-12">
            <div className="mb-4">
              <span className="text-xs font-mono tracking-widest text-white/70 block mb-1">
                FEATURED SPACE
              </span>
              <div className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-none">
                02 / Design Studio & Library
              </div>
            </div>

            {/* Progress bar timeline across the bottom */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '65%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-brand-orange rounded-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
