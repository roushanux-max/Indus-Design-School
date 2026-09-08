import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Indus Inaugurates Next-Gen Spatial Design & Computing Laboratory',
    category: 'Innovation',
    date: 'October 14, 2025',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=700&q=80&auto=format',
    summary: 'New experimental workspace dedicated to spatial computing, generative workflows, and tactile prototyping.',
  },
  {
    title: 'Student Cohort Showcases Sustainable Fashion at Milan Design Conclave',
    category: 'Global',
    date: 'September 28, 2025',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80&auto=format',
    summary: 'Eight undergraduate designers selected to present indigenous bio-textile innovations on the international stage.',
  },
  {
    title: 'New Industry Fellowship Announced with Top Global Design Academies',
    category: 'Partnership',
    date: 'September 12, 2025',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format',
    summary: 'Collaborative curriculum integration providing direct pathways to global studios and design residencies.',
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Centered Heading matching Section 7 in reference */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 block mb-3">
            STORIES & INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight">
            Discover the Latest News in Indus
          </h2>
        </div>

        {/* 3 Column News Cards matching reference */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#c88732] mb-3">
                    <span>{item.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 font-mono font-normal">{item.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#0e1726] group-hover:text-brand-orange transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0e1726] group-hover:text-brand-orange transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
