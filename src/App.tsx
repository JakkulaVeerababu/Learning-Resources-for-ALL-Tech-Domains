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
import UpdatesModal from './components/UpdatesModal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showUpdatesModal, setShowUpdatesModal] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if user has seen updates modal recently
    const lastSeenUpdates = localStorage.getItem('techHubLastSeenUpdates');
    const currentDate = new Date().toDateString();
    
    if (!lastSeenUpdates || lastSeenUpdates !== currentDate) {
      // Show modal after a short delay for better UX
      setTimeout(() => {
        setShowUpdatesModal(true);
      }, 1000);
    }
  }, []);

  const handleCloseUpdatesModal = () => {
    setShowUpdatesModal(false);
    // Mark as seen for today
    localStorage.setItem('techHubLastSeenUpdates', new Date().toDateString());
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-red-950 to-black relative overflow-x-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Updates Modal */}
      <UpdatesModal 
        isOpen={showUpdatesModal} 
        onClose={handleCloseUpdatesModal} 
      />
      
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