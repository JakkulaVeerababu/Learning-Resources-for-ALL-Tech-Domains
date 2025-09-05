import React from 'react';
// Consolidated and added Linkedin icon
import { 
    Trophy, Target, Clock, Gift, Zap, Star, ChevronRight, Code, Cpu, 
    Database, Globe, Brain, Calculator, Wrench, Building, Instagram, 
    MessageCircle, Linkedin, BookOpen 
} from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Gift, text: "100% FREE Forever", color: "text-red-400" },
    { icon: Target, text: "All Tech Domains", color: "text-red-500" },
    { icon: Clock, text: "Always Updated", color: "text-red-600" },
    { icon: Zap, text: "No Login Required", color: "text-red-700" }
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
    window.open('https://www.instagram.com/theflash9z?igsh=YjgwZ2toNDMyMHEw', '_blank');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I saw your Tech Learning Hub and need guidance for my studies. Can you help me?");
    window.open(`https://wa.me/918008651769?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto text-center relative z-10">
        
        {/* Professional Badge */}
        <div className="flex justify-center mb-10 -mt-16">
          <div className="inline-flex items-center space-x-4 bg-black/80 border border-red-500/50 rounded-full p-2 backdrop-blur-sm shadow-2xl">
            
            {/* Creator Info */}
            <div className="flex items-center space-x-3 pl-2">
              <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 via-red-600 to-red-700"></span>
              <p className="text-sm font-semibold text-white">
                Created by <span className="font-bold text-red-400">csweterner</span>
              </p>
            </div>
        
            {/* Vertical Separator */}
            <div className="w-[1px] h-6 bg-red-500/50"></div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.instagram.com/theflash9z?igsh=YjgwZ2toNDMyMHEw"
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow on Instagram for updates"
                className="flex items-center space-x-2 px-3 py-1 rounded-full text-white hover:bg-red-900/50 transition-colors duration-300"
              >
                <Instagram className="h-4 w-4 text-red-400" />
                <span className="text-xs font-semibold">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank" 
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="flex items-center space-x-2 px-3 py-1 rounded-full text-white hover:bg-red-900/50 transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4 text-red-400" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Main Heading */}
        <div className="mb-12">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                TECH MASTERY
              </span>
              <span className="block text-white font-light text-4xl md:text-5xl mt-4">
                UNLIMITED RESOURCES
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
              Elite Engineering & Programming Education Platform
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl border border-red-500/50">
                GATE • FULL STACK • AI • VLSI • EMBEDDED
              </span>
            </div>
          </div>
        </div>

        {/* Domain Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 hover:border-red-400 transition-colors duration-300 shadow-xl cursor-pointer hover:bg-red-950/30"
              onClick={() => scrollToSection('resources')}
            >
              <domain.icon className="h-8 w-8 text-red-400 mx-auto mb-2" />
              <p className="text-white text-xs font-medium">{domain.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-400 transition-colors duration-300 shadow-xl cursor-pointer hover:bg-red-950/30"
              onClick={() => scrollToSection('resources')}
            >
              <feature.icon className={`h-10 w-10 ${feature.color} mx-auto mb-3`} />
              <p className="text-white font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection('resources')}
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-12 py-5 rounded-full text-white font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-red-500/25 border border-red-500/50"
          >
            <span>EXPLORE RESOURCES</span>
            <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={openInstagram}
            className="group bg-black/80 hover:bg-red-950/80 border border-red-500/50 hover:border-red-400 px-12 py-5 rounded-full text-white font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl"
          >
            <Instagram className="h-6 w-6" />
            <span>FOLLOW @csweterner</span>
          </button>
        </div>

        {/* Personal Guidance Section */}
        <div className="bg-gradient-to-r from-red-950/50 to-black/50 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">🤝 PERSONAL MENTORSHIP</h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Get exclusive one-on-one guidance for GATE preparation, career strategy, and technical excellence. 
            Direct access to expert mentorship for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-full text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl border border-green-500/50"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WHATSAPP DIRECT</span>
            </button>
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl border border-red-500/50"
            >
              <Instagram className="h-5 w-5" />
              <span>INSTAGRAM DM</span>
            </button>
          </div>
        </div>

        {/* GATE ECE Syllabus Section */}
        {/* Latest Updates Section */}
        <div className="bg-gradient-to-r from-red-950/50 to-black/50 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">🚨 LATEST UPDATES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GATE ECE Syllabus */}
            <div className="bg-black/60 border border-red-500/30 rounded-xl p-6 hover:bg-red-950/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">GATE ECE Syllabus</h4>
                  <p className="text-red-400 text-sm font-semibold">📋 Official PDF</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Complete GATE Electronics & Communication Engineering syllabus with detailed topics and weightage.
              </p>
              <a 
                href="https://drive.google.com/file/d/1pTI8oMHIbnTerPlxJshkiYJ6QJUG6s1s/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-4 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
              >
                <BookOpen className="h-4 w-4" />
                <span>View Syllabus PDF</span>
              </a>
            </div>

            {/* GATE 2026 Official Website */}
            <div className="bg-black/60 border border-red-500/30 rounded-xl p-6 hover:bg-red-950/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">GATE 2026 Official</h4>
                  <p className="text-red-400 text-sm font-semibold">🌐 Official Website</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Official GATE 2026 website for registration, notifications, admit cards, and results.
              </p>
              <a 
                href="https://gate2026.iitr.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 px-4 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
              >
                <Globe className="h-4 w-4" />
                <span>Visit Official Site</span>
              </a>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="text-center bg-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl cursor-pointer transition-colors duration-300 border border-red-500/30">
            <div className="text-5xl font-bold text-red-400 mb-2">50+</div>
            <div className="text-gray-300 font-medium">Tech Domains</div>
          </div>
          <div className="text-center bg-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl cursor-pointer transition-colors duration-300 border border-red-500/30">
            <div className="text-5xl font-bold text-red-500 mb-2">2000+</div>
            <div className="text-gray-300 font-medium">Study Materials</div>
          </div>
          <div className="text-center bg-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl cursor-pointer transition-colors duration-300 border border-red-500/30">
            <div className="text-5xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-300 font-medium">Free Forever</div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-gradient-to-r from-red-950/30 to-black/30 border border-red-500/30 rounded-2xl p-6 max-w-3xl mx-auto shadow-xl backdrop-blur-sm">
          <p className="text-red-200 font-medium text-lg">
            🙏 Excellence in education, delivered free. Follow for cutting-edge updates and industry insights. 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;