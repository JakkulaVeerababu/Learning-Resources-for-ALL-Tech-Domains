import React from 'react';
import { Download, Star, Zap, Gift, ExternalLink } from 'lucide-react';

const PerplexityBanner = () => {
  const handleDownloadClick = () => {
    window.open('https://pplx.ai/veerababu-jakkula', '_blank');
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-y-4 border-amber-400">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            
            {/* Header with Icons */}
            <div className="text-center mb-8">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Golden Opportunity
                </span>
                <br />
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold">
                  for Students
                </span>
              </h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Main Message */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-relaxed">
                    Download Perplexity and search anything. Open the first link to get 
                    <span className="text-amber-600 font-black"> FREE access worth $200k</span> to 
                    <span className="text-orange-600 font-black"> Perplexity Comet Browser</span>
                  </h2>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <Star className="h-6 w-6 text-amber-600" />
                    <span className="font-semibold text-gray-800">Premium AI Browser</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <Zap className="h-6 w-6 text-yellow-600" />
                    <span className="font-semibold text-gray-800">$200k Value FREE</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-orange-50 p-4 rounded-xl border border-orange-200">
                    <Gift className="h-6 w-6 text-orange-600" />
                    <span className="font-semibold text-gray-800">Student Exclusive</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <Download className="h-6 w-6 text-amber-600" />
                    <span className="font-semibold text-gray-800">Instant Access</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center lg:text-left">
                  <button
                    onClick={handleDownloadClick}
                    className="group bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 px-12 py-6 rounded-full text-white font-black text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 border-4 border-white"
                  >
                    <div className="flex items-center space-x-4">
                      <Download className="h-8 w-8 group-hover:animate-bounce" />
                      <span>Download Comet AI Browser</span>
                      <ExternalLink className="h-6 w-6" />
                    </div>
                  </button>
                  
                  <p className="text-gray-600 text-sm mt-4 font-medium">
                    🎯 Click above to access your exclusive $200k worth premium browser!
                  </p>
                </div>
              </div>

              {/* Right Content - Image Placeholder */}
              <div className="space-y-6">
                {/* Main Image Placeholder */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border-4 border-amber-300 text-center">
                  <div className="w-full h-64 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-xl flex items-center justify-center border-2 border-amber-400">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Perplexity Comet Browser</h3>
                      <p className="text-gray-600 font-medium">Premium AI-Powered Browsing Experience</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Image Placeholder */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-4 border-2 border-yellow-300">
                    <div className="w-full h-24 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-lg flex items-center justify-center border border-yellow-400">
                      <Star className="h-8 w-8 text-yellow-600" />
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-700 mt-2">AI Features</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-4 border-2 border-orange-300">
                    <div className="w-full h-24 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg flex items-center justify-center border border-orange-400">
                      <Gift className="h-8 w-8 text-orange-600" />
                    </div>
                    <p className="text-center text-sm font-semibold text-gray-700 mt-2">Free Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full inline-block shadow-lg">
                <p className="font-bold text-lg">
                  ⚡ Limited Time Offer - Grab Your FREE $200k Access Now! ⚡
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerplexityBanner;