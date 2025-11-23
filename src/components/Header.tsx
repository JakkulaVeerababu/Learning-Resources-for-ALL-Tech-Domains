import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, GraduationCap, LogIn, User, LogOut } from 'lucide-react';
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
    const userData = localStorage.getItem('techHubUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('techHubUser');
    setUser(null);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? 'bg-white shadow-lg border-b border-slate-200' : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 h-2 sm:h-3 w-2 sm:w-3 text-blue-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-sm sm:text-lg font-bold text-slate-900">
                  Tech Learning Hub
                </h1>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Free Resources</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Resources
              </button>
              <button className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Compiler
              </button>
              <button className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Roadmaps
              </button>
              <button className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Contact
              </button>
            </nav>

            {/* Auth & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="text-xs sm:text-sm text-slate-700">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hidden sm:flex items-center space-x-1 text-slate-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-xs sm:text-sm">Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="hidden sm:flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-slate-700" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2 border-t border-slate-200 pt-4">
              <button className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                Resources
              </button>
              <button className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                Compiler
              </button>
              <button className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                Roadmaps
              </button>
              <button className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                Contact
              </button>
              {!user && (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Login
                </button>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Header;
