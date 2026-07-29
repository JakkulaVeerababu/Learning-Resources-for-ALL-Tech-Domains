import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ResourcesSection from './components/ResourcesSection';
import CompilerSection from './components/CompilerSection';
import RoadmapsSection from './components/RoadmapsSection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black relative overflow-x-hidden">
        <Header />

        <main className="relative z-10">
          <Hero />
          <ResourcesSection />
          <CompilerSection />
          <RoadmapsSection />
          <FeedbackSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
