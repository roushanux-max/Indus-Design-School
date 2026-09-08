import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ChatBot } from "./components/ChatBot";
import { HomePage } from "./pages/HomePage";
import { AcademicsPage } from "./pages/AcademicsPage";
import { AboutPage } from "./pages/AboutPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { LifeAtIdsPage } from "./pages/LifeAtIdsPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#0e1726] antialiased selection:bg-[#e3461a]/20 selection:text-[#e3461a]">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/life-at-ids" element={<LifeAtIdsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;
