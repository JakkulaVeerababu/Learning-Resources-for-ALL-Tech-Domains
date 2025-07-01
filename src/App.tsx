import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TopScrollingBanner from './components/TopScrollingBanner';
import Hero from './components/Hero';
import ScrollingBanner from './components/ScrollingBanner';
import ResourcesSection from './components/ResourcesSection';
import CompilerSection from './components/CompilerSection';
import RoadmapsSection from './components/RoadmapsSection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ViewCounter from './components/ViewCounter';
import PowerfulAI from './components/PowerfulAI';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-pink-50 to-rose-100 relative overflow-x-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Top Credits Banner */}
      <TopScrollingBanner />
      
      {/* Header */}
      <Header />
      
      {/* Live View Counter */}
      <ViewCounter />
      
      {/* Main Scrolling Banner */}
      <ScrollingBanner />
      
      <main className="relative z-10">
        <Hero />
        <ResourcesSection />
        <CompilerSection />
        <RoadmapsSection />
        <FeedbackSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Powerful AI Assistant */}
      <PowerfulAI />
    </div>
  );
}

export default App;