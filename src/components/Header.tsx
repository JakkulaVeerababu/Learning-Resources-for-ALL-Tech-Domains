import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Sparkles, GraduationCap, LogIn, User, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for logged in user
    const userData = localStorage.getItem('techHubUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
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

  const handleLogout = () => {
    localStorage.removeItem('techHubUser');
    setUser(null);
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
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-red-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Tech Learning Hub
                </h1>
                <p className="text-[10px] text-gray-400 font-medium">Free Resources Forever</p>
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
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-red-900/30 border border-red-500/50 px-4 py-2 rounded-full">
                    <User className="h-4 w-4 text-red-400" />
                    <span className="text-red-200 font-medium text-sm">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white font-medium transition-all duration-300"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg border border-red-500/50"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </button>
              )}
              
              <a 
                href="https://www.instagram.com/theflash9z?igsh=YjgwZ2toNDMyMHEw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-white font-medium border border-red-500/50"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow</span>
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
                
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 bg-red-900/30 border border-red-500/50 px-4 py-2 rounded-full w-fit">
                      <User className="h-4 w-4 text-red-400" />
                      <span className="text-red-200 font-medium text-sm">{user.name}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 w-fit"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full text-white font-medium w-fit border border-red-500/50"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </button>
                )}
                
                <a 
                  href="https://www.instagram.com/theflash9z?igsh=YjgwZ2toNDMyMHEw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full text-white font-medium w-fit border border-red-500/50"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow Us</span>
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