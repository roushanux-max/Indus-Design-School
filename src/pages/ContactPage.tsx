import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const courses = [
  "B.Design in Interior Design (4 Years)",
  "B.Design in Fashion Design (4 Years)",
  "B.Design in Communication Design (4 Years)",
  "B.Design in Product Design (4 Years)",
  "M.Design in UI-UX Design (2 Years)",
  "M.Design in Interior Design (2 Years)",
  "M.Design in Fashion Design (2 Years)",
  "Minor in UI-UX Design",
  "Minor in Sustainability Studies",
  "Minor in Indic Design",
  "General Inquiry",
];

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Header */}
      <div className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">CONTACT US</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0e1726] leading-tight mb-4">
            We Would Love to<br />Hear From You
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Visit our campus in Ahmedabad, call our admissions team, or drop us an email. Our studio doors are always open for aspiring designers.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 lg:py-20 bg-[#FAF7F2] border-b border-[#f1ebd7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Campus Address",
                lines: ["Rancharda, Via: Shilaj,", "Ahmedabad – 382 115.", "Gujarat, India."],
                action: null,
              },
              {
                icon: Phone,
                title: "Admissions Hotline",
                lines: ["+91 76000 16987", "+91 76220 07501"],
                action: "tel:+917600016987",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["ids@indusuni.ac.in"],
                action: "mailto:ids@indusuni.ac.in",
              },
              {
                icon: Clock,
                title: "Office Hours",
                lines: ["Monday – Saturday", "9:00 AM – 5:00 PM IST"],
                action: null,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#e3461a]/10 text-[#e3461a] flex items-center justify-center mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-[#0e1726] font-medium leading-relaxed">{line}</p>
                    ))}
                  </div>
                  {item.action && (
                    <div className="pt-4">
                      <a href={item.action} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e3461a] hover:underline cursor-pointer">
                        <span>Contact directly</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Map + Form Section */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Map Embed + Social Links */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0e1726] mb-3">
                  Find Us on Campus
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Indus Design School is located at Indus University campus, Rancharda (Via Shilaj), on the western outskirts of Ahmedabad — well-connected by road with ample campus parking.
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
                <iframe
                  title="Indus Design School Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5783!2d72.4714!3d23.0753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9f6b4f7e4e8f%3A0x1234567890abcdef!2sIndus+University%2C+Rancharda%2C+Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Channels */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Follow IDS on Social</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.instagram.com/indus_ids" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-bold">IG</span>
                    <span>@indus_ids</span>
                  </a>
                  <a href="https://www.facebook.com/designschoolindus" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-bold">FB</span>
                    <span>IDS Facebook</span>
                  </a>
                  <a href="https://www.youtube.com/@indusdesignschool6887" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-bold">YT</span>
                    <span>YouTube Channel</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F2] border border-[#f0e9df] rounded-3xl p-8 sm:p-10 shadow-xs">
                <h2 className="text-2xl font-serif font-bold text-[#0e1726] mb-2">Send Us a Quick Inquiry</h2>
                <p className="text-gray-600 text-sm mb-7">Fill in your details and our admissions advisor will respond within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-2">Message Received!</h3>
                    <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
                      Thank you for reaching out to Indus Design School. Our team will be in touch with you shortly.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="px-8 py-3.5 rounded-full bg-[#0e1726] hover:bg-black text-white text-xs font-semibold cursor-pointer transition-all shadow-md">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">First Name *</label>
                        <input type="text" required placeholder="e.g. Aarav" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Last Name *</label>
                        <input type="text" required placeholder="e.g. Patel" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Email Address *</label>
                        <input type="email" required placeholder="aarav@example.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Phone / WhatsApp *</label>
                        <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Course Interested In *</label>
                      <select required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors">
                        {courses.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Your Message</label>
                      <textarea rows={4} placeholder="Ask us about admissions, campus tours, syllabus details, or anything else..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors resize-none" />
                    </div>
                    <div className="pt-3">
                      <button type="submit" className="w-full py-4 px-8 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
                        <span>Send Inquiry to IDS Admissions</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
