import React from 'react';
import { Download } from 'lucide-react';

const PerplexityBanner = () => {
  const handleDownloadClick = () => {
    window.open('https://pplx.ai/veerababu-jakkula', '_blank');
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:py-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-3xl lg:max-w-5xl relative z-10">

        {/* Hero Image */}
        <div className="mb-4 sm:mb-6 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=300&fit=crop&crop=center"
            alt="Comet AI Browser"
            className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/1200x300/1e293b/60a5fa?text=Comet+AI+Browser";
            }}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-1 sm:mb-2 tracking-tight">
            Comet AI Browser
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-light px-2">
            Smart, Fast, and Free for Students
          </p>
        </div>

        {/* About Section */}
        <div className="mb-4 sm:mb-6 text-center max-w-xl mx-auto px-2">
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
            Experience AI-powered browsing designed for students. Get premium features worth $200k, completely free with your student email.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-4 sm:mb-6 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md border border-slate-200">
          <h2 className="text-base sm:text-lg md:text-xl font-light text-slate-800 mb-3 sm:mb-4 text-center">
            Get Started in 3 Steps
          </h2>
          <div className="space-y-2 sm:space-y-3 max-w-xl mx-auto">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium shadow-sm flex-none">
                1
              </div>
              <div className="pt-0.5">
                <p className="text-xs sm:text-sm text-slate-700">Download Perplexity app</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium shadow-sm flex-none">
                2
              </div>
              <div className="pt-0.5">
                <p className="text-xs sm:text-sm text-slate-700">Search anything in Perplexity</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium shadow-sm flex-none">
                3
              </div>
              <div className="pt-0.5">
                <p className="text-xs sm:text-sm text-slate-700">Click first link for free access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-slate-200">
            <h3 className="text-xs sm:text-sm font-medium text-slate-800 mb-1">AI-Powered Search</h3>
            <p className="text-xs text-slate-600">Intelligent results for students</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-slate-200">
            <h3 className="text-xs sm:text-sm font-medium text-slate-800 mb-1">Student Exclusive</h3>
            <p className="text-xs text-slate-600">Premium academic features</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-slate-200">
            <h3 className="text-xs sm:text-sm font-medium text-slate-800 mb-1">$200k Value Free</h3>
            <p className="text-xs text-slate-600">Free with student email</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-3 sm:mb-4">
          <button
            onClick={handleDownloadClick}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-white text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>Download Comet AI</span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center px-2">
          <p className="text-xs text-slate-500">
            Limited offer for students. Requires valid student email.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PerplexityBanner;
