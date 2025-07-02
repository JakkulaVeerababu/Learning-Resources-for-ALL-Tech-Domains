import React from 'react';
// Consolidated and added Linkedin icon
import { 
    Trophy, Target, Clock, Gift, Zap, Star, ChevronRight, Code, Cpu, 
    Database, Globe, Brain, Calculator, Wrench, Building, Instagram, 
    MessageCircle, Linkedin 
} from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Gift, text: "100% FREE Forever", color: "text-green-600" },
    { icon: Target, text: "All Tech Domains", color: "text-blue-600" },
    { icon: Clock, text: "Always Updated", color: "text-purple-600" },
    { icon: Zap, text: "No Login Required", color: "text-orange-600" }
  ];

  const domains = [
    { icon: Code, name: "GATE Prep" },
    { icon: Globe, name: "Full Stack" },
    { icon: Brain, name: "AI & ML" },
    { icon: Cpu, name: "VLSI Design" },
    { icon: Database, name: "Data Science" },
    { icon: Calculator, name: "DSA" },
    { icon: Wrench, name: "Embedded" },
    { icon: Building, name: "Android Dev" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/csweterner/', '_blank');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I saw your Tech Learning Hub and need guidance for my studies. Can you help me?");
    window.open(`https://wa.me/918008651769?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        
        {/* === NEW WIDE & SEPARATED PROFESSIONAL INTRODUCTION === */}
        <div className="flex justify-center mb-10 -mt-20 animate-fade-in-up">
          <div className="w-full max-w-4xl bg-white/80 border border-gray-200 rounded-full shadow-xl backdrop-blur-sm p-3 flex items-center justify-between">
            
            {/* Section 1: Creator Identity */}
            <div className="flex items-center space-x-3">
              <span className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-rose-500"></span>
              <p className="text-base font-semibold text-gray-800">
                Created by <span className="font-bold text-blue-600">csweterner</span>
              </p>
            </div>
            
            {/* Section 2: Call to Action (Centered) */}
            <div className="hidden md:block px-6 border-l border-r border-gray-300">
                <p className="text-sm font-medium text-gray-600">Follow for more updates</p>
            </div>

            {/* Section 3: Social Media Links */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.instagram.com/csweterner/"
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200/70 transition-colors"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
                <span className="hidden sm:inline text-sm font-semibold">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/venkata-sai-kumar-jakkula-32574234a/"
                target="_blank" 
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200/70 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-blue-700" />
                <span className="hidden sm:inline text-sm font-semibold">LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              🎓 FREE Learning Resources
            </span>
            <br />
            <span className="text-gray-800">for ALL Tech Domains! 🚀</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto font-medium">
            Your Ultimate Hub for Engineering, Programming & Tech Education 💻✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 rounded-full text-white font-semibold animate-pulse shadow-lg">
              📚 GATE • Full Stack • AI • VLSI • Embedded & More!
            </span>
          </div>
        </div>

        {/* --- The rest of your component remains the same --- */}
        {/* Domain Icons, Features, CTA Buttons, etc. go here */}
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
            {domains.map((domain, index) => (
                <div key={index} className="... rest of your styles ..." onClick={() => scrollToSection('resources')}>
                    <domain.icon className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <p className="text-gray-700 text-xs font-medium">{domain.name}</p>
                </div>
            ))}
        </div>

        {/* Feature Cards, CTA Buttons, Guidance Section, Stats, Thank You Message */}
        {/* All the rest of your original component code is correct */}

      </div>
    </section>
  );
};

export default Hero;