import React from 'react';
import { Download, Star, Zap, Gift, ExternalLink, Sparkles, Brain, Rocket } from 'lucide-react';

const PerplexityBanner = () => {
  const handleDownloadClick = () => {
    window.open('https://pplx.ai/veerababu-jakkula', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl" style={{ animationDelay: '0.5s' }}>
              <Brain className="h-10 w-10 text-white" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl" style={{ animationDelay: '1s' }}>
              <Rocket className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
              Golden Opportunity
            </span>
            <br />
            <span className="text-white text-xl md:text-3xl lg:text-4xl font-semibold">
              for Students
            </span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Image Card - Comet Header */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-2 shadow-2xl border border-blue-500/30">
              <div className="bg-gradient-to-br from-slate-900 to-blue-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center" 
                  alt="Comet AI Browser" 
                  className="w-full h-64 object-cover rounded-t-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x400/1e293b/60a5fa?text=Comet+AI+Browser";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Comet AI Browser</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">Revolutionary AI-powered browsing experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-1 flex flex-col justify-center space-y-8">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 shadow-2xl">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-6 leading-relaxed text-center">
                Download Perplexity and search anything. Open the first link to get 
                <span className="text-blue-400 font-bold"> FREE access worth $200k</span> to 
                <span className="text-purple-400 font-bold"> Perplexity Comet Browser</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-blue-900/30 p-4 rounded-xl border border-blue-400/30">
                  <Star className="h-6 w-6 text-blue-400" />
                  <span className="font-medium text-white text-sm">Premium AI</span>
                </div>
                <div className="flex items-center space-x-3 bg-purple-900/30 p-4 rounded-xl border border-purple-400/30">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <span className="font-medium text-white text-sm">$200k Value</span>
                </div>
                <div className="flex items-center space-x-3 bg-pink-900/30 p-4 rounded-xl border border-pink-400/30">
                  <Gift className="h-6 w-6 text-pink-400" />
                  <span className="font-medium text-white text-sm">Student Only</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-900/30 p-4 rounded-xl border border-blue-400/30">
                  <Download className="h-6 w-6 text-blue-400" />
                  <span className="font-medium text-white text-sm">Instant Access</span>
                </div>
              </div>

              <button
                onClick={handleDownloadClick}
                className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-6 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/20"
              >
                <div className="flex items-center justify-center space-x-4">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download Comet AI Browser</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Image Card - Speed of Thought */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-3xl p-2 shadow-2xl border border-purple-500/30">
              <div className="bg-gradient-to-br from-slate-900 to-purple-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center" 
                  alt="Browse at the Speed of Thought" 
                  className="w-full h-64 object-cover rounded-t-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x400/1e1b4b/a855f7?text=Speed+of+Thought";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Speed of Thought</h3>
                  <p className="text-purple-200 text-sm leading-relaxed">Experience lightning-fast AI browsing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Comet is Here Image */}
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-2 shadow-2xl border border-blue-500/30">
            <div className="bg-gradient-to-br from-slate-900 to-blue-800 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center" 
                alt="Comet is here - Download with student email" 
                className="w-full h-80 object-cover rounded-t-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/1e293b/60a5fa?text=Comet+is+Here";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Comet is Here</h3>
                <p className="text-blue-200 text-base mb-4 leading-relaxed">Download Comet with your student email for exclusive access</p>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium text-sm">Student Exclusive Offer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 text-blue-400 mr-3" />
                Why Comet Browser?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-white text-sm">AI-Powered Search</h4>
                    <p className="text-gray-300 text-sm">Revolutionary search capabilities with advanced AI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Student Benefits</h4>
                    <p className="text-gray-300 text-sm">Exclusive features designed for academic success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Premium Access</h4>
                    <p className="text-gray-300 text-sm">$200k worth of premium features absolutely free</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Gift className="h-6 w-6 text-purple-400 mr-3" />
                How to Get Started
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">1</div>
                  <span className="text-gray-300 text-sm">Download Perplexity app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">2</div>
                  <span className="text-gray-300 text-sm">Search anything in Perplexity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">3</div>
                  <span className="text-gray-300 text-sm">Click the first link to get Comet access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-full inline-block shadow-2xl border-2 border-white/20">
            <p className="font-semibold text-base">
              ⚡ Limited Time - Get Your FREE $200k Comet Browser Access! ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerplexityBanner;