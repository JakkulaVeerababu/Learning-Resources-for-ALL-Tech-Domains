import React from 'react';
import { Trophy, Target, Clock, Gift, Zap, Star, ChevronRight, Code, Cpu, Database, Globe, Brain, Calculator, Wrench, Building, Instagram, MessageCircle } from 'lucide-react';

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
    // Corrected the URL string with backticks
    window.open(`https://wa.me/918008651769?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        
        {/* Professional Creator Badge with Call-to-Action (REPLACED) */}
        <div className="flex justify-center mb-10 -mt-16 animate-fade-in-up">
          <a
            href="https://www.instagram.com/csweterner/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-white/90 hover:bg-white border border-gray-300/70 rounded-full px-4 py-2.5 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm"
          >
            {/* A slightly larger avatar circle */}
            <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-rose-500"></span>
        
            {/* Two-line text block */}
            <div className="flex flex-col items-start">
              <p className="text-sm font-semibold text-gray-800 leading-tight">
                Created by <span className="font-bold text-blue-600">csweterner</span>
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                Follow for updates & queries
              </p>
            </div>
          </a>
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

        {/* Domain Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-xl p-4 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl cursor-pointer"
              // Corrected the style attribute syntax
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection('resources')}
            >
              <domain.icon className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <p className="text-gray-700 text-xs font-medium">{domain.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl p-6 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl cursor-pointer"
              // Corrected the style attribute syntax
              style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              onClick={() => scrollToSection('resources')}
            >
              {/* Corrected the className attribute syntax */}
              <feature.icon className={`h-10 w-10 ${feature.color} mx-auto mb-3`} />
              <p className="text-gray-800 font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection('resources')}
            className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-10 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
          >
            <span>Explore All Resources</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={openInstagram}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-10 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl hover:shadow-2xl"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @csweterner</span>
          </button>
        </div>

        {/* Personal Guidance Section */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 border border-green-300 rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🤝 Need Personal Guidance?</h3>
          <p className="text-gray-700 text-lg mb-6">
            I personally help students with GATE preparation, career guidance, doubt clearing, and study planning. 
            Feel free to reach out for one-on-one support!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-3 rounded-full text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Me</span>
            </button>
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
              <span>DM on Instagram</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="text-center animate-fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.2s' }}>
            <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Tech Domains</div>
          </div>
          <div className="text-center animate-fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.3s' }}>
            <div className="text-4xl font-bold text-rose-600 mb-2">2000+</div>
            <div className="text-gray-700 font-medium">Study Materials</div>
          </div>
          <div className="text-center animate-fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300" style={{ animationDelay: '1.4s' }}>
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Free Forever</div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg">
          <p className="text-yellow-800 font-medium text-lg">
            🙏 Thank you for visiting! I hope these resources help you achieve your dreams. 
            Don't forget to follow me on Instagram for updates and tips! 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;