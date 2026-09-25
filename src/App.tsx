import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CustomCursor } from './components/common/CustomCursor';
import { LoadingScreen } from './components/common/LoadingScreen';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Achievements } from './components/sections/Achievements';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { ResumeSection } from './components/sections/ResumeSection';
import { Services } from './components/sections/Services';
import { Journey } from './components/sections/Journey';
import { Personal } from './components/sections/Personal';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { BasketballClub } from './components/sections/BasketballClub';
import { ChatbotWidget } from './components/chat/ChatbotWidget';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenResume = () => {
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AuthProvider>
      <div className="relative min-h-screen bg-[#0a0908] text-[#f7f4ed] font-sans antialiased selection:bg-[#881337] selection:text-white">
        {/* 1. Page Initial Loading Screen */}
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}

        {/* 2. Custom Desktop Cursor */}
        <CustomCursor />

        {/* 3. Subtle Animated Grain Texture Overlay */}
        <NoiseOverlay />

        {/* 4. Global Floating Editorial Navigation */}
        <Navbar onOpenResume={handleOpenResume} />

        {/* 5. Main Content Stream */}
        <main className="relative z-10">
          {/* Section 00: Full-Screen Dramatic Hero */}
          <Hero onOpenResume={handleOpenResume} />

          {/* Section 01: About Me & Timeline */}
          <About />

          {/* Section 02: Achievements & Counter Statistics */}
          <Achievements />

          {/* Section 03: Technology Stack & Interactive Matrix */}
          <Skills />

          {/* Section 04: Selected Works & Comprehensive Case Studies */}
          <Projects />

          {/* Section 05: Professional Experience */}
          <Experience />

          {/* Section 06: Curriculum Vitae & Downloadable Resume */}
          <ResumeSection />

          {/* Section 07: Services & Engineering Offerings */}
          <Services />

          {/* Section 08: Editorial Journey & Storytelling */}
          <Journey />

          {/* Section 09: Personal Pursuits & Perspectives */}
          <Personal />

          {/* Section 10: Testimonials & Endorsements */}
          <Testimonials />

          {/* Section 11: Final Contact & Transmission */}
          <Contact />

          {/* Section 12: Community Basketball Club (Sector 106) */}
          <BasketballClub />
        </main>

        {/* 6. Minimal Premium Footer */}
        <Footer />

        {/* 7. Floating AI Assistant Chatbot Widget */}
        <ChatbotWidget />
      </div>
    </AuthProvider>
  );
}
