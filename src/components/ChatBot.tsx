import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Bot, User, Phone, Mail, GraduationCap } from "lucide-react";

// --- IDS Knowledge Base ---
interface KBEntry { keywords: string[]; answer: string; }

const knowledgeBase: KBEntry[] = [
  {
    keywords: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening", "hii", "helo"],
    answer: "👋 Hello! Welcome to **Indus Design School (IDS)**, Ahmedabad.\n\nI'm your virtual admissions assistant. I can help you with:\n\n• 🎓 Programs & Courses\n• 💰 Admission Fees\n• 📅 Admission Process & Dates\n• 🏛️ Campus & Facilities\n• 📞 Contact & Visit Details\n\nWhat would you like to know today?",
  },
  {
    keywords: ["programs", "courses", "degree", "bdes", "mdes", "b.des", "m.des", "what programs", "which course", "all programs"],
    answer: "📚 **Academic Programs at IDS**\n\n**Bachelor in Design (B.Des) – 4 Years:**\n• Interior Design\n• Fashion Design\n• Communication Design\n• Product Design\n\n**Masters in Design (M.Des) – 2 Years:**\n• UI/UX Design\n• Interior Design\n• Fashion Design\n\n**Minor Degree in Design:**\n• UI/UX Design\n• Sustainability Studies\n• Indic Design\n\nAll B.Des and M.Des degrees are UGC-recognized. Would you like details on any specific program?",
  },
  {
    keywords: ["fee", "fees", "cost", "tuition", "price", "charges", "how much", "expense", "scholarship", "discount", "waiver", "vidvata", "merit"],
    answer: "💰 **Fees & Scholarships at IDS**\n\nFor the most accurate and updated fee structure, please contact our admissions team directly:\n\n📞 **+91 76000 16987** / **+91 76220 07501**\n📧 **ids@indusuni.ac.in**\n\n**🏆 Vidvata Merit Scholarship:**\nTop performers in Design Hunt aptitude exam are eligible for merit scholarships offering up to **50% tuition fee waiver** for 2026–27.\n\nWould you like to know about the Design Hunt exam or admission process?",
  },
  {
    keywords: ["admission", "apply", "application", "how to apply", "apply now", "admission process", "join", "enroll", "register", "registration"],
    answer: "📋 **Admission Process 2026–27**\n\n**4 Simple Steps:**\n\n**Step 1:** Register Online on IDS Admissions Portal\n\n**Step 2:** Appear for Design Hunt / AIDAT national aptitude exam\n\n**Step 3:** Studio Interview & Portfolio Review at Ahmedabad campus\n\n**Step 4:** Merit list, scholarship announcement & seat confirmation\n\n📅 **Key Dates:**\n• Jan–Mar 2026: Applications Open\n• April 2026: Design Hunt Exam\n• May 2026: Portfolio Reviews & Interviews\n• June 2026: Merit List & Scholarships\n• July 2026: Semester 1 Commencement\n\nWant help with eligibility criteria?",
  },
  {
    keywords: ["eligibility", "qualify", "qualification", "stream", "12th", "graduation", "10+2", "percentage", "marks", "who can apply"],
    answer: "✅ **Eligibility Criteria**\n\n**B.Des Programs (4 Years):**\n• Completed 10+2 in ANY stream (Science, Commerce, Arts)\n• Minimum 50% aggregate marks\n• Must appear in Design Hunt / AIDAT exam\n\n**M.Des Programs (2 Years):**\n• Bachelor's degree in any discipline with min. 50%\n• Some programs prefer B.Des, B.Arch, or design background\n\n**Minor Degrees:**\n• Open to any enrolled Indus University student\n\n📌 No specific stream restriction for B.Des — Science, Commerce, AND Arts students are all welcome!",
  },
  {
    keywords: ["design hunt", "aidat", "entrance", "exam", "aptitude test", "test", "entrance exam", "national exam"],
    answer: "📝 **Design Hunt & AIDAT – Entrance Exams**\n\n**Design Hunt (National Design Aptitude Test):**\nEvaluates:\n• Spatial visualization\n• Creative observation\n• Material understanding\n• Design sensibility\nConducted across multiple exam centers nationally.\n\n**AIDAT (All India Design Aptitude Test):**\nAssesses:\n• Observation & sketching skills\n• Design thinking\n• Analytical reasoning\n\n**🏆 Vidvata Scholarship** is awarded to top Design Hunt scorers — up to 50% tuition fee waiver!\n\nContact us for registration details:\n📞 +91 76000 16987",
  },
  {
    keywords: ["interior", "interior design", "spatial", "architecture", "space design"],
    answer: "🏠 **B.Des / M.Des in Interior Design**\n\n**Duration:** 4 Years (B.Des) | 2 Years (M.Des)\n\n**What You'll Learn:**\n• Spatial planning & room layout design\n• Lighting, acoustics & environmental systems\n• AutoCAD, SketchUp & Revit (BIM software)\n• Sustainable materials & green interiors\n• Furniture design & prototype fabrication\n\n**Career Paths:**\n• Interior Architect\n• Exhibition & Set Designer\n• Furniture & Spatial Consultant\n• Hospitality Design Specialist\n\nEligibility: 10+2 any stream with 50%.\nWant to know about fees or how to apply?",
  },
  {
    keywords: ["fashion", "fashion design", "clothing", "garment", "draping", "textile", "apparel", "styling", "costume"],
    answer: "👗 **B.Des / M.Des in Fashion Design**\n\n**Duration:** 4 Years (B.Des) | 2 Years (M.Des)\n\n**What You'll Learn:**\n• Garment construction & pattern drafting\n• Fabric draping & textile science\n• Indian handloom & heritage textiles\n• Fashion illustration & trend forecasting\n• Sustainable fashion & circular design\n\n**Career Paths:**\n• Fashion Designer & Stylist\n• Costume Designer (Film/TV)\n• Textile Developer\n• Runway Show Producer\n\nIDS has a fully equipped Fashion Draping Atelier with industrial sewing machines and a live fabric library!",
  },
  {
    keywords: ["communication", "graphic", "visual", "communication design", "branding", "motion graphics", "typography", "graphic design"],
    answer: "🎨 **B.Des in Communication Design**\n\n**Duration:** 4 Years\n\n**What You'll Learn:**\n• Typography & grid system mastery\n• Brand identity & visual strategy\n• Motion graphics & animation\n• Editorial & publication design\n• Packaging and environmental graphics\n\n**Career Paths:**\n• Visual Designer & Art Director\n• Brand Identity Specialist\n• Motion Graphics Artist\n• UX Writer & Content Strategist\n\nThis program blends traditional print design with digital media systems for a complete creative toolkit.",
  },
  {
    keywords: ["product", "product design", "industrial", "furniture", "cad", "3d", "prototype", "manufacturing", "ergonomic"],
    answer: "🔧 **B.Des in Product Design**\n\n**Duration:** 4 Years\n\n**What You'll Learn:**\n• Human factors & ergonomics\n• 3D CAD modeling (SolidWorks, Fusion 360)\n• Rapid prototyping & CNC fabrication\n• Material science & manufacturing\n• Consumer electronics & smart hardware\n\n**Career Paths:**\n• Industrial Product Designer\n• Consumer Hardware Lead\n• Design Strategist\n• Packaging Specialist\n\nIDS has a dedicated **Wood & Metal Prototyping Workshop** with CNC routers, band saws, and lathe machines.",
  },
  {
    keywords: ["ui", "ux", "ui/ux", "user interface", "user experience", "figma", "digital", "app", "website", "web design", "interaction"],
    answer: "💻 **Minor / M.Des in UI-UX Design**\n\n**Duration:** Minor Track (3–4 Semesters) | M.Des: 2 Years\n\n**What You'll Learn:**\n• User research & experience strategy\n• Figma prototyping & design systems\n• Micro-interactions & motion design\n• AI-powered interface workflows\n• Mobile app & web accessibility standards\n\n**Career Paths:**\n• Senior Product Designer\n• UX Researcher\n• Interaction Architect\n• Design Systems Lead\n\n💡 The **M.Des in UI/UX** is ideal for professionals wanting to move into strategic digital product leadership roles.",
  },
  {
    keywords: ["campus", "location", "address", "where", "ahmedabad", "rancharda", "shilaj", "how to reach", "visit", "infrastructure"],
    answer: "📍 **Campus Location & Infrastructure**\n\n**Address:**\nRancharda, Via: Shilaj,\nAhmedabad – 382 115, Gujarat, India\n\nIDS is part of **Indus University** — located on the western outskirts of Ahmedabad, well connected by road with ample campus parking.\n\n**Campus Highlights:**\n• 16+ Acre green university campus\n• 10+ Specialized design studios & labs\n• Wood & Metal Workshop\n• Fashion Draping Atelier\n• Ceramic & Claymation Lab\n• UI/UX Digital Workstations\n• Materials Library & Resource Centre\n\n📞 To schedule a campus visit: +91 76000 16987",
  },
  {
    keywords: ["contact", "phone", "number", "email", "reach", "call", "whatsapp", "helpline", "office", "hours", "timing"],
    answer: "📞 **Contact Indus Design School**\n\n**Admissions Hotline:**\n+91 76000 16987\n+91 76220 07501\n\n**Official Email:**\nids@indusuni.ac.in\n\n**Campus Address:**\nRancharda, Via Shilaj,\nAhmedabad – 382 115, Gujarat\n\n**Office Hours:**\nMonday – Saturday: 9:00 AM – 5:00 PM\n\n**Social Channels:**\n📸 Instagram: @indus_ids\n📘 Facebook: designschoolindus\n📺 YouTube: @indusdesignschool6887\n\nYou can also use the Contact form on our website for a quick response!",
  },
  {
    keywords: ["events", "aikyam", "festival", "fest", "claymation", "design scapes", "rsp", "orientation", "workshop", "activities", "life at ids"],
    answer: "🎉 **Life @ IDS – Events & Activities**\n\n**Aikyam Fest 2025** (Annual Design Festival)\n• SkillUp: Interactive Masterclasses\n• Curated Curiosities: Student Flea Market\n• Style Spectrum: Student Fashion Show\n• Cinema Beyond Bollywood: Film Festival\n\n**Design Scapes Exhibition**\nAnnual graduation design showcase — spatial models, fashion collections, digital portfolios.\n\n**Claymation Workshop**\nStop-motion clay animation lab combining sculpture, emotion & frame-by-frame storytelling.\n\n**RSP 2025 (Rural Study Program)**\nField documentation of Gujarat's indigenous craft traditions, vernacular architecture & artisan communities.\n\nWant to know about admissions to join the next batch?",
  },
  {
    keywords: ["placement", "job", "career", "work", "hire", "recruit", "company", "internship", "industry", "salary"],
    answer: "💼 **Placements & Career Outcomes**\n\nIDS offers **100% Placement Assistance** for graduating students.\n\n**Career Support Includes:**\n• Industry internship tie-ups with leading design firms\n• Campus placement drives with design studios & agencies\n• Alumni mentorship & industry networking sessions\n• Portfolio review workshops before placement season\n• Entrepreneurial incubation support at Indus University\n\n**Popular Career Destinations:**\nInterior Design firms, Fashion Houses, Brand Agencies, UI/UX Teams in startups & tech companies, Product Design consultancies.\n\n📞 For placement data & industry partners info: +91 76000 16987",
  },
  {
    keywords: ["minor", "minor degree", "sustainability", "indic", "indic design", "cross", "interdisciplinary"],
    answer: "🌿 **Minor Degrees in Design**\n\nAvailable for Indus University students across ALL disciplines (B.Tech, Management, Arts, etc.):\n\n**Minor in UI-UX Design**\nFigma prototyping, user journey mapping, mobile app design.\n\n**Minor in Sustainability Studies**\nCircular economy, biomimicry, lifecycle assessment, green building standards.\n\n**Minor in Indic Design**\nVedic aesthetics, traditional Indian craft systems, indigenous material techniques, cultural semiotics.\n\nThese 3–4 semester tracks complement your core degree with high-demand design skills!\n\nContact us: ids@indusuni.ac.in",
  },
  {
    keywords: ["faculty", "teacher", "professor", "mentor", "staff", "who teaches"],
    answer: "👩‍🏫 **Faculty & Mentorship at IDS**\n\nIDS faculty comprises:\n• **Practicing Design Professionals** — working architects, fashion designers, and UX leads\n• **Academic Researchers** — PhD holders and design theorists\n• **Visiting Industry Mentors** — guest lectures from national & international design houses\n• **Studio Guides** — hands-on workshop instructors for each studio domain\n\nAll programs integrate **industry mentorship** where professionals bring live briefs and real client challenges into studio sessions.\n\nFor specific faculty information, please contact: ids@indusuni.ac.in",
  },
  {
    keywords: ["hostel", "accommodation", "stay", "residence", "dormitory", "pg", "paying guest"],
    answer: "🏠 **Accommodation & Hostel**\n\nIndus University offers campus accommodation facilities for enrolled students.\n\nFor specific details on:\n• Hostel availability & eligibility\n• Room types (single/shared)\n• Hostel fees & facilities\n• PG options near campus in Shilaj/Rancharda area\n\nPlease contact the university directly:\n📞 +91 76000 16987\n📧 ids@indusuni.ac.in\n\nThe campus is also accessible from Ahmedabad city by road.",
  },
  {
    keywords: ["portfolio", "how to prepare", "what to submit", "portfolio review", "creative portfolio", "sketchbook"],
    answer: "🗂️ **Portfolio Preparation Tips**\n\nFor the IDS Studio Interview & Portfolio Review, we recommend including:\n\n✅ **What to Include:**\n• Original sketches, drawings & illustrations\n• Photographs of craft/art/3D work you've made\n• Digital design work (if any — Photoshop, Canva, etc.)\n• Photography, fashion mood boards, or spatial observations\n• Any design project (school, hobby, or personal)\n\n✅ **What Matters Most:**\n• Creative curiosity & visual thinking\n• Originality — not technical perfection\n• Range across different media or subjects\n\n📌 No formal training is required — IDS values raw creative potential!\n\nFor guidance: ids@indusuni.ac.in",
  },
  {
    keywords: ["duration", "years", "semesters", "how long", "length of course"],
    answer: "⏱️ **Program Durations at IDS**\n\n| Program | Duration |\n|---|---|\n| B.Des (Interior, Fashion, Communication, Product) | **4 Years** (8 Semesters) |\n| M.Des (UI/UX, Interior, Fashion) | **2 Years** (4 Semesters) |\n| Minor in Design (UI/UX, Sustainability, Indic) | **Minor Track** (3–4 Semesters) |\n\nAll B.Des programs run for 8 semesters with mandatory studio practice and industry internship components built into the curriculum.",
  },
  {
    keywords: ["thank you", "thanks", "great", "helpful", "awesome", "ok", "okay", "got it", "understood"],
    answer: "😊 You are most welcome! It's wonderful to hear you're considering Indus Design School.\n\nFor any further queries, feel free to:\n📞 Call us: **+91 76000 16987**\n📧 Email: **ids@indusuni.ac.in**\n🌐 Or visit our campus in **Rancharda, Ahmedabad**\n\nWe look forward to welcoming you to the **IDS creative family!** 🎨✨",
  },
];

const quickReplies = [
  "What programs are offered?",
  "How to apply for 2026?",
  "Tell me about fees",
  "Eligibility for B.Des",
  "Campus location & visit",
  "Scholarship options",
  "Placement & careers",
  "Events at IDS",
];

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  time: string;
}

function getAnswer(input: string): string {
  const lower = input.toLowerCase().trim();
  
  // Check knowledge base
  for (const entry of knowledgeBase) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }

  // Fallback
  return "Thank you for your question! 😊\n\nFor a detailed and accurate answer, please reach out to our admissions team directly:\n\n📞 **+91 76000 16987**\n📞 **+91 76220 07501**\n📧 **ids@indusuni.ac.in**\n\n🏛️ You can also visit us at:\nRancharda, Via Shilaj, Ahmedabad – 382 115\n\nOur team is available **Monday–Saturday, 9 AM – 5 PM** and will be happy to assist you!";
}

function getTime(): string {
  return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

function formatMessage(text: string): string {
  // Convert **bold** to <strong>
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br />");
}

export const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "👋 Hello! I am the **IDS Admissions Assistant**.\n\nI can help you with information about programs, fees, eligibility, admission process, campus, events, and more!\n\nHow can I help you today?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowQuickReplies(false);
    setTyping(true);

    // Simulate bot "typing" delay
    setTimeout(() => {
      const answer = getAnswer(text);
      const botMsg: Message = { id: Date.now() + 1, role: "bot", text: answer, time: getTime() };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="toggle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#e3461a] text-white shadow-2xl flex items-center justify-center hover:bg-[#c83c14] transition-colors cursor-pointer group"
            aria-label="Open Chat Assistant"
          >
            <MessageCircle size={28} />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#e3461a] animate-ping opacity-30" />
            {/* Tooltip */}
            <span className="absolute bottom-full mb-3 right-0 px-3 py-1.5 bg-[#0e1726] text-white text-xs font-semibold rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
              Chat with IDS Advisor
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatwindow"
            initial={{ opacity: 0, scale: 0.85, y: 40, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[370px] sm:w-[400px] max-h-[85vh] flex flex-col rounded-[28px] overflow-hidden shadow-2xl bg-white border border-gray-200"
            style={{ maxHeight: "min(85vh, 680px)" }}
          >
            {/* Header */}
            <div className="bg-[#0e1726] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e3461a] flex items-center justify-center flex-shrink-0">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="font-serif font-bold text-sm leading-tight">IDS Admissions Assistant</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-white/70">Online · Indus Design School</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Contact Quick Bar */}
            <div className="bg-[#FAF7F2] border-b border-[#f1ebd7] px-4 py-2.5 flex items-center gap-4 text-xs text-gray-600 flex-shrink-0">
              <a href="tel:+917600016987" className="flex items-center gap-1.5 hover:text-[#e3461a] transition-colors font-medium">
                <Phone size={12} className="text-[#e3461a]" />
                <span>+91 76000 16987</span>
              </a>
              <a href="mailto:ids@indusuni.ac.in" className="flex items-center gap-1.5 hover:text-[#e3461a] transition-colors font-medium">
                <Mail size={12} className="text-[#e3461a]" />
                <span>ids@indusuni.ac.in</span>
              </a>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-white scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === "bot" ? "bg-[#0e1726] text-white" : "bg-[#e3461a] text-white"
                    }`}
                  >
                    {msg.role === "bot" ? <Bot size={15} /> : <User size={15} />}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                    <div
                      className={`px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.role === "bot"
                          ? "bg-[#FAF7F2] border border-[#f1ebd7] text-[#0e1726] rounded-bl-sm"
                          : "bg-[#0e1726] text-white rounded-br-sm"
                      }`}
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {typing && (
                <div className="flex items-end gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0e1726] text-white flex-shrink-0 flex items-center justify-center">
                    <Bot size={15} />
                  </div>
                  <div className="bg-[#FAF7F2] border border-[#f1ebd7] px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Chips */}
            <AnimatePresence>
              {showQuickReplies && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-3 border-t border-gray-100 bg-gray-50/80 overflow-hidden flex-shrink-0"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2.5">Quick Questions</p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendMessage(qr)}
                        className="text-[11px] font-medium px-3.5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:shadow-xs hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] transition-all duration-200 cursor-pointer"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Bar */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-gray-200 bg-white flex items-center gap-3 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about programs, fees, admissions..."
                className="flex-1 text-sm bg-[#FAF7F2] border border-[#f1ebd7] rounded-full px-5 py-3 focus:outline-none focus:border-[#0e1726] transition-colors placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="w-11 h-11 rounded-full bg-[#e3461a] disabled:bg-gray-300 hover:shadow-md text-white flex items-center justify-center transition-colors hover:bg-[#c83c14] cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Footer Branding */}
            <div className="px-4 py-2 bg-white border-t border-gray-100 text-center text-[10px] text-gray-400 flex-shrink-0">
              <span className="flex items-center justify-center gap-1">
                <GraduationCap size={11} className="text-[#e3461a]" />
                Indus Design School • Indus University, Ahmedabad
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
