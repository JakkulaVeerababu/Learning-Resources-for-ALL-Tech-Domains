import React from 'react';
import { Target, Clock, Gift, Zap, ChevronRight, Code, Cpu, Database, Globe, Brain, Calculator, Wrench, Building, Instagram, MessageCircle } from 'lucide-react';

const Hero = () => {
  // Icons now use the theme's red color by default on yellow backgrounds
  const features = [
    { icon: Gift, text: "100% FREE Forever" },
    { icon: Target, text: "All Tech Domains" },
    { icon: Clock, text: "Always Updated" },
    { icon: Zap, text: "No Login Required" }
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

  const scrollToSection = (sectionId) => {
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
    <section className="bg-theme-red pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        
        {/* Personal Introduction */}
        <div className="mb-10 -mt-16 animate-fade-in-up">
          <p className="text-center text-lg text-yellow-200">
            A project by <span className="font-bold text-theme-yellow">CSWETERNER</span> — Follow for updates on 
            <a 
              href="https://www.instagram.com/csweterner/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 font-semibold text-theme-yellow hover:text-white transition-colors underline"
            >
              Instagram
            </a>
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-theme-yellow">
              🎓 FREE Learning Resources
            </span>
            <br />
            <span className="text-yellow-200">for ALL Tech Domains! 🚀</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-yellow-200 mb-6 max-w-4xl mx-auto font-medium">
            Your Ultimate Hub for Engineering, Programming & Tech Education 💻✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-theme-yellow px-6 py-3 rounded-full text-theme-red font-semibold animate-pulse shadow-lg">
              📚 GATE • Full Stack • AI • VLSI • Embedded & More!
            </span>
          </div>
        </div>

        {/* Domain Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="bg-theme-yellow/90 backdrop-blur-sm border border-theme-red/20 rounded-xl p-4 hover:border-theme-red/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection('resources')}
            >
              <domain.icon className="h-8 w-8 text-theme-red mx-auto mb-2" />
              <p className="text-theme-red text-xs font-medium">{domain.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-theme-yellow/95 backdrop-blur-sm border border-theme-red/20 rounded-2xl p-6 hover:border-theme-red/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              onClick={() => scrollToSection('resources')}
            >
              <feature.icon className="h-10 w-10 text-theme-red mx-auto mb-3" />
              <p className="text-theme-red font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection('resources')}
            className="group bg-theme-yellow hover:bg-yellow-200 px-10 py-4 rounded-full text-theme-red font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
          >
            <span>Explore All Resources</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={openInstagram}
            className="group bg-theme-red border-2 border-theme-yellow hover:bg-theme-yellow px-10 py-4 rounded-full text-theme-yellow hover:text-theme-red font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow on Instagram</span>
          </button>
        </div>

        {/* Personal Guidance Section */}
        <div className="bg-red-900/50 border border-yellow-200/20 rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-lg">
          <h3 className="text-2xl font-bold text-theme-yellow mb-4">🤝 Need Personal Guidance?</h3>
          <p className="text-yellow-200 text-lg mb-6">
            I personally help students with GATE preparation, career guidance, doubt clearing, and study planning. 
            Feel free to reach out for one-on-one support!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-theme-yellow hover:bg-yellow-200 px-8 py-3 rounded-full text-theme-red font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Me</span>
            </button>
            <button 
              onClick={openInstagram}
              className="border-2 border-theme-yellow hover:bg-theme-yellow px-8 py-3 rounded-full text-theme-yellow hover:text-theme-red font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
              <span>DM on Instagram</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="text-center animate-fade-in-up bg-theme-yellow/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.2s' }}>
            <div className="text-4xl font-bold text-theme-red mb-2">50+</div>
            <div className="text-theme-red font-medium">Tech Domains</div>
          </div>
          <div className="text-center animate-fade-in-up bg-theme-yellow/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.3s' }}>
            <div className="text-4xl font-bold text-theme-red mb-2">2000+</div>
            <div className="text-theme-red font-medium">Study Materials</div>
          </div>
          <div className="text-center animate-fade-in-up bg-theme-yellow/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.4s' }}>
            <div className="text-4xl font-bold text-theme-red mb-2">100%</div>
            <div className="text-theme-red font-medium">Free Forever</div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-theme-yellow/90 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-lg">
          <p className="text-theme-red font-medium text-lg">
            🙏 Thank you for visiting! I hope these resources help you achieve your dreams. 
            Don't forget to follow me on Instagram for updates and tips! 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;