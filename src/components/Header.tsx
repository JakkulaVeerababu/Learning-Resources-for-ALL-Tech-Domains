import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, GraduationCap, Linkedin, Sun, Moon } from 'lucide-react';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-lg border-b border-default shadow-sm' : 'bg-primary/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleLogoClick}>
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-7 w-7 text-accent-text" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  Tech Learning Hub
                </h1>
                <p className="text-xs text-secondary font-medium">Free Engineering Resources</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('resources')} className="text-secondary hover:text-primary transition-colors duration-300 relative group font-medium">
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('compilers')} className="text-secondary hover:text-primary transition-colors duration-300 relative group font-medium">
                Compilers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('roadmaps')} className="text-secondary hover:text-primary transition-colors duration-300 relative group font-medium">
                Roadmaps
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-secondary hover:text-primary transition-colors duration-300 relative group font-medium">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary hover:bg-tertiary text-primary transition-colors duration-300"
                title="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <UserProfile onAuthClick={() => setIsAuthModalOpen(true)} />

              <a
                href="https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-accent bg-accent-hover px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-accent-text font-medium border-accent"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow</span>
              </a>
              <a
                href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-secondary hover:bg-tertiary px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-primary font-medium border border-default"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </nav>

            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary hover:bg-tertiary text-primary transition-colors duration-300"
                title="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                className="text-primary hover:text-secondary transition-colors duration-300 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-default">
              <nav className="flex flex-col space-y-4 mt-6">
                <button onClick={() => scrollToSection('resources')} className="text-secondary hover:text-primary transition-colors duration-300 font-medium text-left">Resources</button>
                <button onClick={() => scrollToSection('compilers')} className="text-secondary hover:text-primary transition-colors duration-300 font-medium text-left">Compilers</button>
                <button onClick={() => scrollToSection('roadmaps')} className="text-secondary hover:text-primary transition-colors duration-300 font-medium text-left">Roadmaps</button>
                <button onClick={() => scrollToSection('contact')} className="text-secondary hover:text-primary transition-colors duration-300 font-medium text-left">Contact</button>

                <div className="pt-4 border-t border-default">
                  <UserProfile onAuthClick={() => setIsAuthModalOpen(true)} />
                </div>

                <a href="https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-accent px-6 py-3 rounded-full text-accent-text font-medium w-fit border-accent">
                  <Instagram className="h-4 w-4" />
                  <span>Follow Us</span>
                </a>
                <a href="https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-secondary px-6 py-3 rounded-full text-primary font-medium w-fit border border-default">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Header;
