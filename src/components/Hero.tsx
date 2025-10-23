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
    <section className="pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black"></div>

      <div className="container mx-auto text-center relative z-10">
        
        {/* Professional Badge */}
        <div className="flex justify-center mb-6 -mt-12">
          <div className="inline-flex items-center space-x-3 bg-black/80 border border-red-500/50 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-lg">
            <span className="h-4 w-4 flex-shrink-0 rounded-full bg-gradient-to-tr from-red-500 via-red-600 to-red-700"></span>
            <p className="text-xs font-semibold text-white">
              Created by <span className="font-bold text-red-400">csweterner</span>
            </p>
            <div className="w-[1px] h-4 bg-red-500/50"></div>
            <a
              href="https://www.instagram.com/theflash9z?igsh=YjgwZ2toNDMyMHEw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-white hover:text-red-400 transition-colors duration-300"
            >
              <Instagram className="h-3 w-3 text-red-400" />
              <span className="text-xs font-semibold">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-white hover:text-red-400 transition-colors duration-300"
            >
              <Linkedin className="h-3 w-3 text-red-400" />
              <span className="text-xs font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Professional Main Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              TECH MASTERY
            </span>
            <span className="block text-white font-light text-xl md:text-2xl mt-2">
              UNLIMITED RESOURCES
            </span>
          </h1>

          <div className="w-20 h-0.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-4"></div>

          <p className="text-sm md:text-base text-gray-300 mb-4 max-w-2xl mx-auto font-light">
            Elite Engineering & Programming Education Platform
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded-full text-white font-bold text-xs shadow-lg border border-red-500/50">
              GATE • FULL STACK • AI • VLSI • EMBEDDED
            </span>
          </div>
        </div>

        {/* Domain Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-6 max-w-3xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-2 hover:border-red-400 transition-colors duration-300 shadow-lg cursor-pointer hover:bg-red-950/30"
              onClick={() => scrollToSection('resources')}
            >
              <domain.icon className="h-5 w-5 text-red-400 mx-auto mb-1" />
              <p className="text-white text-[10px] font-medium">{domain.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-3 hover:border-red-400 transition-colors duration-300 shadow-lg cursor-pointer hover:bg-red-950/30"
              onClick={() => scrollToSection('resources')}
            >
              <feature.icon className={`h-6 w-6 ${feature.color} mx-auto mb-2`} />
              <p className="text-white font-semibold text-xs">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <button
            onClick={() => scrollToSection('resources')}
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2.5 rounded-full text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg border border-red-500/50"
          >
            <span>EXPLORE RESOURCES</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={openInstagram}
            className="group bg-black/80 hover:bg-red-950/80 border border-red-500/50 hover:border-red-400 px-6 py-2.5 rounded-full text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
          >
            <Instagram className="h-4 w-4" />
            <span>FOLLOW @csweterner</span>
          </button>
        </div>

        {/* Personal Guidance Section */}
        <div className="bg-gradient-to-r from-red-950/50 to-black/50 border border-red-500/30 rounded-xl p-4 max-w-3xl mx-auto mb-4 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-2">PERSONAL MENTORSHIP</h3>
          <p className="text-gray-300 text-xs mb-3">
            Get one-on-one guidance for GATE preparation, career strategy, and technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-full text-white font-bold text-xs transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1.5 shadow-lg border border-green-500/50"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WHATSAPP</span>
            </button>
            <button
              onClick={openInstagram}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-4 py-2 rounded-full text-white font-bold text-xs transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1.5 shadow-lg border border-red-500/50"
            >
              <Instagram className="h-3 w-3" />
              <span>INSTAGRAM</span>
            </button>
          </div>
        </div>

        {/* Latest Updates Section */}
        <div className="bg-gradient-to-r from-red-950/50 to-black/50 border border-red-500/30 rounded-xl p-4 max-w-3xl mx-auto mb-4 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-3 text-center">LATEST UPDATES</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* GATE ECE Syllabus */}
            <div className="bg-black/60 border border-red-500/30 rounded-lg p-3 hover:bg-red-950/30 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GATE ECE Syllabus</h4>
                  <p className="text-red-400 text-[10px] font-semibold">Official PDF</p>
                </div>
              </div>
              <p className="text-gray-300 text-[10px] mb-2">
                Complete syllabus with detailed topics and weightage.
              </p>
              <a
                href="https://drive.google.com/file/d/1pTI8oMHIbnTerPlxJshkiYJ6QJUG6s1s/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-3 py-1.5 rounded-lg text-white font-semibold text-[10px] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1 shadow-lg border border-red-500/50"
              >
                <BookOpen className="h-3 w-3" />
                <span>View Syllabus</span>
              </a>
            </div>

            {/* GATE 2026 Official Website */}
            <div className="bg-black/60 border border-red-500/30 rounded-lg p-3 hover:bg-red-950/30 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-700 to-red-800 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GATE 2026 Official</h4>
                  <p className="text-red-400 text-[10px] font-semibold">Official Website</p>
                </div>
              </div>
              <p className="text-gray-300 text-[10px] mb-2">
                Registration, notifications, admit cards, and results.
              </p>
              <a
                href="https://gate2026.iitr.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 px-3 py-1.5 rounded-lg text-white font-semibold text-[10px] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1 shadow-lg border border-red-500/50"
              >
                <Globe className="h-3 w-3" />
                <span>Visit Site</span>
              </a>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-4">
          <div className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer transition-colors duration-300 border border-red-500/30">
            <div className="text-2xl font-bold text-red-400 mb-1">50+</div>
            <div className="text-gray-300 font-medium text-[10px]">Tech Domains</div>
          </div>
          <div className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer transition-colors duration-300 border border-red-500/30">
            <div className="text-2xl font-bold text-red-500 mb-1">2000+</div>
            <div className="text-gray-300 font-medium text-[10px]">Study Materials</div>
          </div>
          <div className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer transition-colors duration-300 border border-red-500/30">
            <div className="text-2xl font-bold text-red-600 mb-1">100%</div>
            <div className="text-gray-300 font-medium text-[10px]">Free Forever</div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="bg-gradient-to-r from-red-950/30 to-black/30 border border-red-500/30 rounded-lg p-3 max-w-2xl mx-auto shadow-lg backdrop-blur-sm">
          <p className="text-red-200 font-medium text-xs">
            Excellence in education, delivered free. Follow for cutting-edge updates and industry insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;