import { motion } from 'framer-motion';

const moments = [
  {
    title: 'Annual Graduate Runway & Design Gala',
    category: 'Exhibition',
    date: 'December 2025',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    col: 'left',
  },
  {
    title: 'International Symposium on Sustainable Architecture',
    category: 'Conference',
    date: 'November 2025',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format',
    col: 'right',
  },
  {
    title: 'Indus Creative Conclave & Faculty Retrospective',
    category: 'Symposium',
    date: 'October 2025',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&q=80&auto=format',
    col: 'center',
  },
  {
    title: 'Orientation Week & 48-Hour Design Hackathon',
    category: 'Student Life',
    date: 'September 2025',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format',
    col: 'left',
  },
  {
    title: 'Spatial Interaction & Generative AI Workshop',
    category: 'Workshop',
    date: 'August 2025',
    img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80&auto=format',
    col: 'right',
  },
];

export const CampusMoments: React.FC = () => {
  return (
    <section id="campus" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Centered Heading matching Section 6 in reference */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 block mb-3">
            CAMPUS LIFE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight">
            Lectures, Conferences, Cultural Moments & More
          </h2>
        </div>

        {/* Staggered Photography Grid matching reference layout */}
        <div className="space-y-12">
          
          {/* Row 1: Two cards (Left & Right) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[moments[0], moments[1]].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden shadow-md mb-4 aspect-[16/10]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0e1726] group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono flex-shrink-0">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: One Centered Focal Card */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="rounded-3xl overflow-hidden shadow-md mb-4 aspect-[16/9]">
                <img
                  src={moments[2].img}
                  alt={moments[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0e1726] group-hover:text-brand-orange transition-colors">
                  {moments[2].title}
                </h3>
                <span className="text-xs text-gray-400 font-mono flex-shrink-0">
                  {moments[2].date}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Two cards (Left & Right) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[moments[3], moments[4]].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden shadow-md mb-4 aspect-[16/10]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0e1726] group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono flex-shrink-0">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
