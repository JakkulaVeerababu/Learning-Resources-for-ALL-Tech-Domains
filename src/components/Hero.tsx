import React from 'react';
import { Target, Clock, Gift, Zap, ChevronRight, Code, Cpu, Database, Globe, Brain, Calculator, Wrench, Building, Instagram, MessageCircle, Linkedin } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Gift, text: "100% FREE Forever", color: "text-emerald-500" },
    { icon: Target, text: "All Tech Domains", color: "text-blue-500" },
    { icon: Clock, text: "Always Updated", color: "text-orange-500" },
    { icon: Zap, text: "No Login Required", color: "text-yellow-500" }
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

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-slate-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-300 rounded-full px-3 sm:px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-xs sm:text-sm font-semibold text-blue-900">
              Welcome to Tech Learning Hub
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Master Technology & Programming
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Complete learning platform for GATE preparation, competitive programming, and technical skills with expert resources
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-2">
          <button className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span>Get Started</span>
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300">
            <MessageCircle className="h-5 w-5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <feature.icon className={`h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3 ${feature.color}`} />
              <p className="text-xs sm:text-sm font-semibold text-slate-900">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Domains Section */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">
            Explore Tech Domains
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {domains.map((domain, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-200">
                <domain.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-blue-600" />
                <p className="text-xs sm:text-sm font-semibold text-slate-900">{domain.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-12 sm:mt-16">
          <a href="https://www.instagram.com/theflash9z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/veerababu9z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
