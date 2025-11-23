import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PerplexityBanner from './components/PerplexityBanner';
import ResourcesSection from './components/ResourcesSection';
import CompilerSection from './components/CompilerSection';
import RoadmapsSection from './components/RoadmapsSection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PowerfulAI from './components/PowerfulAI';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen w-full bg-white transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <Header />

      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Perplexity Comet Banner */}
        <PerplexityBanner />

        {/* Resources Section */}
        <ResourcesSection />

        {/* Compiler Section */}
        <CompilerSection />

        {/* Roadmaps Section */}
        <RoadmapsSection />

        {/* Feedback Section */}
        <FeedbackSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Chat Widget */}
      <PowerfulAI />
    </div>
  );
}

export default App;
