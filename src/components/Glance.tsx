import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const Glance: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Editorial Statement matching reference image */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              ABOUT
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-medium text-[#0e1726] leading-snug">
              <strong className="font-bold">Our institutions reflect a tradition of excellence and forward-thinking impact</strong> across design, research, creativity, and multidisciplinary innovation.
            </h2>
          </div>
        </div>

        {/* Bottom Section: "Indus at a Glance" on Left + Two Stat Cards on Right */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading + Read More Pill Button */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726] leading-tight mb-6">
                Indus at a<br />Glance
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                Founded with a bold vision for design excellence, Indus Design School equips graduates with deep aesthetic sensibility and future-ready technological capabilities.
              </p>
            </div>

            <div>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0e1726] text-white text-xs font-semibold tracking-wider hover:bg-black hover:shadow-lg transition-all duration-300"
              >
                <span>Read more</span>
                <ArrowRight size={14} className="text-white/80" />
              </a>
            </div>
          </div>

          {/* Right Column: Two Beige Stat Cards + Carousel Indicator */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Stat Card 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] border border-[#f1ebd7] rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c88732]">
                  STUDENTS
                </span>
                <div className="my-4">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0e1726] tracking-tight mb-2">
                    500+
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    undergraduate & postgraduate design scholars shaping creative culture.
                  </p>
                </div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] border border-[#f1ebd7] rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c88732]">
                  PLACEMENT & PARTNERS
                </span>
                <div className="my-4">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0e1726] tracking-tight mb-2">
                    100+
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    active industry partner design studios, brands, and global creative firms.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Bottom Slider Navigation matching reference image */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                aria-label="Previous stat"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="w-8 h-8 rounded-full bg-[#0e1726] text-white flex items-center justify-center text-xs font-medium">
                1
              </div>
              <button
                aria-label="Next stat"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
