import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Admissions Open 2026–27: Apply for B.Des & M.Des Programs',
    category: 'ADMISSIONS',
    date: 'April 2026',
    excerpt: 'Begin your creative journey with Indus Design School. Early admission applicants are eligible for special portfolio review sessions and merit consideration.',
    image: '/images/campus-building.webp',
    link: '/admissions',
  },
  {
    id: 2,
    title: 'Design Hunt 2026 & AIDAT: Registration Now Live',
    category: 'ENTRANCE EXAM',
    date: 'March 2026',
    excerpt: 'National level aptitude examinations evaluating spatial visualization, material sensibility, creative thinking, and visual observation.',
    image: '/images/b-design.jpg',
    link: '/admissions',
  },
  {
    id: 3,
    title: 'Vidvata Merit Scholarship Scheme for Outstanding Portfolios',
    category: 'SCHOLARSHIP',
    date: 'February 2026',
    excerpt: 'Up to 50% tuition waiver grants awarded to top rankers in Design Hunt and candidates presenting exceptional creative bodies of work.',
    image: '/images/communication-design.jpg',
    link: '/admissions',
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 lg:py-28 bg-[#FAF7F2] border-y border-[#f1ebd7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header matching Section 7 of reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
              BULLETINS &amp; UPDATES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight">
              Discover the Latest News at Indus
            </h2>
          </div>

          <div>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0e1726] hover:text-[#e3461a] transition-colors group"
            >
              <span>View All Notices</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3-Column News Card Grid matching Oxford layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <motion.article
              key={article.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0e1726] text-[10px] font-bold tracking-wider uppercase">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={12} className="text-[#c88732]" />
                    <span className="font-mono">{article.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0e1726] group-hover:text-[#e3461a] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to={article.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e1726] group-hover:text-[#e3461a] transition-colors"
                >
                  <span>Read details</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
