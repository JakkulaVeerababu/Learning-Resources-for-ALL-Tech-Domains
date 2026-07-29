import React from 'react';
import {
  Target, Clock, Gift, Zap, ChevronRight, Code, Cpu,
  Database, Globe, Brain, Calculator, Wrench, Building, Instagram,
  MessageCircle, Linkedin, BookOpen, Github
} from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Gift, text: "Free Forever" },
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw%3D%3D', '_blank');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I saw your Tech Learning Hub and need guidance for my studies. Can you help me?");
    window.open(`https://wa.me/918008651769?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-primary">
      <div className="container mx-auto text-center relative z-10">

        {/* Creator Badge */}
        <div className="flex justify-center mb-6 md:mb-10 px-2">
          <div className="inline-flex flex-col md:flex-row md:items-center gap-2 md:gap-4 bg-card border border-default rounded-lg md:rounded-full p-2 shadow-sm max-w-sm md:max-w-none">
            <div className="flex items-center space-x-2 pl-1 md:pl-2 text-center md:text-left">
              <span className="h-4 w-4 md:h-6 md:w-6 flex-shrink-0 rounded-full bg-accent"></span>
              <p className="text-xs md:text-sm font-semibold text-primary">
                Created by <span className="font-bold">VEERABABU JAKKULA</span>
              </p>
            </div>

            <div className="hidden md:block w-[1px] h-6 bg-default"></div>
            <div className="block md:hidden h-[1px] w-full bg-default"></div>

            <div className="flex items-center justify-center gap-1 md:gap-2">
              <a href="https://github.com/JakkulaVeerababu" target="_blank" rel="noopener noreferrer" title="GitHub profile" className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full text-primary hover:bg-secondary transition-colors duration-300">
                <Github className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline text-xs font-semibold">GitHub</span>
              </a>
              <a href="https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw%3D%3D" target="_blank" rel="noopener noreferrer" title="Follow on Instagram for updates" className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full text-primary hover:bg-secondary transition-colors duration-300">
                <Instagram className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline text-xs font-semibold">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn" className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full text-primary hover:bg-secondary transition-colors duration-300">
                <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline text-xs font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-12">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="block text-primary">
                Tech Learning Hub
              </span>
              <span className="block text-secondary font-light text-3xl md:text-4xl mt-4">
                Engineering & Programming Resources
              </span>
            </h1>

            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>

            <p className="text-lg md:text-xl text-secondary mb-6 max-w-3xl mx-auto font-light leading-relaxed">
              A collection of free study materials for GATE preparation, programming, and engineering domains.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['GATE', 'Full Stack', 'AI', 'VLSI', 'Embedded'].map((tag) => (
                <span key={tag} className="bg-secondary border border-default px-5 py-2 rounded-full text-primary font-medium text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Domain Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-card border border-default rounded-xl p-4 hover:border-hover transition-colors duration-300 shadow-sm cursor-pointer hover:bg-secondary"
              onClick={() => scrollToSection('resources')}
            >
              <domain.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-primary text-xs font-medium">{domain.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-default rounded-2xl p-6 hover:border-hover transition-colors duration-300 shadow-sm cursor-pointer hover:bg-secondary"
              onClick={() => scrollToSection('resources')}
            >
              <feature.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-primary font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('resources')}
            className="group bg-accent bg-accent-hover px-10 py-4 rounded-full text-accent-text font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-sm border-accent"
          >
            <span>Explore Resources</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={openInstagram}
            className="group bg-card hover:bg-secondary border border-default hover:border-hover px-10 py-4 rounded-full text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-sm"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @thflashz</span>
          </button>
        </div>

        {/* Coding Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-default rounded-2xl p-6 hover:border-hover transition-colors duration-300 shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-4">LeetCode Profiles</h4>
            <div className="space-y-3">
              <a href="https://leetcode.com/u/veerababu9z/" target="_blank" rel="noopener noreferrer" className="block bg-secondary hover:bg-tertiary border border-default rounded-lg p-3 transition-colors duration-300">
                <span className="text-primary font-semibold">veerababu9z</span>
              </a>
              <a href="https://leetcode.com/u/veerababu_jakkula/" target="_blank" rel="noopener noreferrer" className="block bg-secondary hover:bg-tertiary border border-default rounded-lg p-3 transition-colors duration-300">
                <span className="text-primary font-semibold">veerababu_jakkula</span>
              </a>
            </div>
          </div>

          <div className="bg-card border border-default rounded-2xl p-6 hover:border-hover transition-colors duration-300 shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-4">CodeForces Profile</h4>
            <a href="https://codeforces.com/profile/jakkulaveerababu" target="_blank" rel="noopener noreferrer" className="block bg-secondary hover:bg-tertiary border border-default rounded-lg p-3 transition-colors duration-300">
              <span className="text-primary font-semibold">jakkulaveerababu</span>
            </a>
          </div>
        </div>

        {/* Personal Guidance */}
        <div className="bg-card border border-default rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">Personal Mentorship</h3>
          <p className="text-secondary text-base mb-6 leading-relaxed">
            One-on-one guidance for GATE preparation, career strategy, and technical excellence.
            Direct access to expert mentorship for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-accent bg-accent-hover px-8 py-3 rounded-full text-accent-text font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm border-accent"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={openInstagram}
              className="bg-card hover:bg-secondary border border-default hover:border-hover px-8 py-3 rounded-full text-primary font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram DM</span>
            </button>
          </div>
        </div>

        {/* Latest Updates */}
        <div className="bg-card border border-default rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Latest Updates</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-default rounded-xl p-6 hover:bg-tertiary transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent-text" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">GATE ECE Syllabus</h4>
                  <p className="text-secondary text-sm font-semibold">Official PDF</p>
                </div>
              </div>
              <p className="text-secondary text-sm mb-4">
                Complete GATE Electronics & Communication Engineering syllabus with detailed topics and weightage.
              </p>
              <a href="https://drive.google.com/file/d/1pTI8oMHIbnTerPlxJshkiYJ6QJUG6s1s/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="w-full bg-accent bg-accent-hover px-4 py-3 rounded-lg text-accent-text font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm border-accent">
                <BookOpen className="h-4 w-4" />
                <span>View Syllabus PDF</span>
              </a>
            </div>

            <div className="bg-secondary border border-default rounded-xl p-6 hover:bg-tertiary transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent-text" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">GATE 2026 Official</h4>
                  <p className="text-secondary text-sm font-semibold">Official Website</p>
                </div>
              </div>
              <p className="text-secondary text-sm mb-4">
                Official GATE 2026 website for registration, notifications, admit cards, and results.
              </p>
              <a href="https://gate2026.iitr.ac.in/" target="_blank" rel="noopener noreferrer" className="w-full bg-accent bg-accent-hover px-4 py-3 rounded-lg text-accent-text font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm border-accent">
                <Globe className="h-4 w-4" />
                <span>Visit Official Site</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="text-center bg-card border border-default rounded-2xl p-6 shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">29+</div>
            <div className="text-secondary font-medium">Resource Categories</div>
          </div>
          <div className="text-center bg-card border border-default rounded-2xl p-6 shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-secondary font-medium">Learning Roadmaps</div>
          </div>
          <div className="text-center bg-card border border-default rounded-2xl p-6 shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-secondary font-medium">Free Forever</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-card border border-default rounded-2xl p-6 max-w-3xl mx-auto shadow-sm">
          <p className="text-primary font-medium text-base">
            Built for students, by a student. Follow for updates and new resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
