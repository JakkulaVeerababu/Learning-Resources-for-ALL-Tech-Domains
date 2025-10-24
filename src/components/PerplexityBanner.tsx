import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

const PerplexityBanner = () => {
  const handleDownloadClick = () => {
    window.open('https://pplx.ai/veerababu-jakkula', '_blank');
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Hero Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&crop=center"
            alt="Comet AI Browser - Smart browsing for students"
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/1200x400/1e293b/60a5fa?text=Comet+AI+Browser";
            }}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4 tracking-tight">
            Comet AI Browser
          </h1>
          <p className="text-lg text-slate-600 font-light">
            Smart, Fast, and Free for Students
          </p>
        </div>

        {/* About Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-base text-slate-700 leading-relaxed">
            Experience the future of browsing with AI-powered search and intelligent assistance.
            Comet Browser combines cutting-edge technology with an intuitive interface, designed
            specifically for students who need fast, accurate information at their fingertips.
            Get premium features worth $200k, completely free with your student email.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
          <h2 className="text-2xl font-light text-slate-800 mb-6 text-center">
            Get Started in 3 Simple Steps
          </h2>
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium shadow-md">
                1
              </div>
              <div className="pt-1">
                <p className="text-slate-700">Download the Perplexity app on your device</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium shadow-md">
                2
              </div>
              <div className="pt-1">
                <p className="text-slate-700">Search for anything in Perplexity</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium shadow-md">
                3
              </div>
              <div className="pt-1">
                <p className="text-slate-700">Click the first link to unlock your free Comet Browser access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-slate-200">
            <CheckCircle className="h-6 w-6 text-blue-500 mb-3" />
            <h3 className="text-base font-medium text-slate-800 mb-2">AI-Powered Search</h3>
            <p className="text-sm text-slate-600">Intelligent results tailored to your academic needs</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-slate-200">
            <CheckCircle className="h-6 w-6 text-purple-500 mb-3" />
            <h3 className="text-base font-medium text-slate-800 mb-2">Student Exclusive</h3>
            <p className="text-sm text-slate-600">Premium features designed for academic success</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-slate-200">
            <CheckCircle className="h-6 w-6 text-blue-600 mb-3" />
            <h3 className="text-base font-medium text-slate-800 mb-2">$200k Value Free</h3>
            <p className="text-sm text-slate-600">Access premium tools at no cost with student email</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleDownloadClick}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Comet AI Browser</span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Limited time offer for students. Requires valid student email address.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PerplexityBanner;
