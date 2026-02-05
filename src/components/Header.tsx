import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Sparkles, GraduationCap, Linkedin } from 'lucide-react';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-red-500/30 shadow-lg' : 'bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-4 group cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-red-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Tech Learning Hub
                </h1>
                <p className="text-xs text-gray-400 font-medium">Free Resources Forever</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group font-medium"
              >
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('compilers')}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group font-medium"
              >
                Compilers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('roadmaps')}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group font-medium"
              >
                Roadmaps
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group font-medium"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <UserProfile onAuthClick={() => setIsAuthModalOpen(true)} />
              
              <a
                href="https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-white font-medium border border-red-500/50"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow</span>
              </a>
              <a
                href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-white font-medium border border-blue-500/50"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </nav>

            <button 
              className="md:hidden text-gray-300 hover:text-red-400 transition-colors duration-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-red-500/30">
              <nav className="flex flex-col space-y-4 mt-6">
                <button 
                  onClick={() => scrollToSection('resources')}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium text-left"
                >
                  Resources
                </button>
                <button 
                  onClick={() => scrollToSection('compilers')}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium text-left"
                >
                  Compilers
                </button>
                <button 
                  onClick={() => scrollToSection('roadmaps')}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium text-left"
                >
                  Roadmaps
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium text-left"
                >
                  Contact
                </button>

                <div className="pt-4 border-t border-red-500/30">
                  <UserProfile onAuthClick={() => setIsAuthModalOpen(true)} />
                </div>
                
                <a
                  href="https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full text-white font-medium w-fit border border-red-500/50"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow Us</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full text-white font-medium w-fit border border-blue-500/50"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;