import React, { useEffect, useState } from 'react';
import { 
    Trophy, Target, Clock, Gift, Zap, Star, ChevronRight, Code, Cpu, 
    Database, Globe, Brain, Calculator, Wrench, Building, Instagram, 
    MessageCircle, Linkedin, Play, ArrowDown, Sparkles, BookOpen
} from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Gift, text: "100% FREE Forever", color: "text-emerald-400" },
    { icon: Target, text: "All Tech Domains", color: "text-blue-400" },
    { icon: Clock, text: "Always Updated", color: "text-purple-400" },
    { icon: Zap, text: "No Login Required", color: "text-orange-400" }
  ];

  const domains = [
    { icon: Code, name: "GATE Prep", gradient: "from-blue-500 to-cyan-400" },
    { icon: Globe, name: "Full Stack", gradient: "from-purple-500 to-pink-400" },
    { icon: Brain, name: "AI & ML", gradient: "from-green-500 to-teal-400" },
    { icon: Cpu, name: "VLSI Design", gradient: "from-orange-500 to-red-400" },
    { icon: Database, name: "Data Science", gradient: "from-indigo-500 to-purple-400" },
    { icon: Calculator, name: "DSA", gradient: "from-yellow-500 to-orange-400" },
    { icon: Wrench, name: "Embedded", gradient: "from-pink-500 to-rose-400" },
    { icon: Building, name: "Android Dev", gradient: "from-teal-500 to-cyan-400" }
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
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Dynamic grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Particle effects */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          
          {/* Professional Creator Badge */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 shadow-2xl">
              
              {/* Creator Info */}
              <div className="flex items-center space-x-3 pl-2">
                <div className="relative">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 p-0.5">
                    <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-semibold text-white">
                  Created by <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">csweterner</span>
                </p>
              </div>
          
              {/* Separator */}
              <div className="w-[1px] h-6 bg-white/30"></div>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <a 
                  href="https://www.instagram.com/csweterner/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Instagram className="h-4 w-4 text-pink-400" />
                  <span className="text-xs font-medium">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/venkata-sai-kumar-jakkula-32574234a/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                TECH
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                LEARNING
              </span>
              <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                HUB
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                Unlock your potential with our comprehensive collection of
              </p>
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FREE learning resources for every tech domain
              </p>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Domain Showcase */}
          <div className={`mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Master Every Domain
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-6xl mx-auto">
              {domains.map((domain, index) => (
                <div 
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => scrollToSection('resources')}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${domain.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <domain.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">{domain.name}</p>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mb-16 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('resources')}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25"
              >
                <Play className="h-5 w-5" />
                <span>Explore Resources</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
              
              <button 
                onClick={openInstagram}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 px-12 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <Instagram className="h-5 w-5 text-pink-400" />
                <span>Follow Updates</span>
              </button>
            </div>
          </div>

          {/* Personal Guidance Section */}
          <div className={`mb-16 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Need Personal Guidance?</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Get one-on-one mentorship for GATE preparation, career guidance, and technical doubt clearing. 
                I'm here to help you succeed in your journey.
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
          </div>

          {/* Stats Section */}
          <div className={`mb-16 transition-all duration-1000 delay-1400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Tech Domains", icon: Target },
                { number: "2000+", label: "Study Materials", icon: BookOpen },
                { number: "100%", label: "Free Forever", icon: Gift }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-white/80 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollToSection('resources')}
              className="group flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-medium">Explore Resources</span>
              <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;