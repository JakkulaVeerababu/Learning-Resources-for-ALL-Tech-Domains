import React, { useState, useEffect } from 'react';
import { X, Bell, Star, Zap, Gift, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface UpdatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdatesModal: React.FC<UpdatesModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  const updates = [
    {
      icon: Zap,
      title: "New GATE 2025 Resources Added",
      description: "Complete study materials for all branches with latest syllabus updates",
      date: "Dec 15, 2024",
      type: "New",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Gift,
      title: "Free AI-Powered Study Assistant",
      description: "Get personalized guidance and doubt clearing with our advanced AI chatbot",
      date: "Dec 10, 2024",
      type: "Feature",
      color: "from-red-700 to-red-800"
    },
    {
      icon: Star,
      title: "Interactive Online Compilers",
      description: "Code in 20+ programming languages directly in your browser",
      date: "Dec 5, 2024",
      type: "Update",
      color: "from-red-800 to-red-900"
    },
    {
      icon: Bell,
      title: "Professional Learning Roadmaps",
      description: "Structured learning paths with detailed timelines and milestones",
      date: "Nov 30, 2024",
      type: "New",
      color: "from-red-600 to-red-800"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'New': return 'bg-red-600 text-white';
      case 'Feature': return 'bg-red-700 text-white';
      case 'Update': return 'bg-red-800 text-white';
      default: return 'bg-red-600 text-white';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div 
        className={`relative bg-gradient-to-br from-black via-red-950 to-black border-2 border-red-500/50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{
          boxShadow: '0 25px 50px rgba(220, 38, 38, 0.5), 0 0 0 1px rgba(220, 38, 38, 0.2)'
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 animate-pulse"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-full p-3 text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="relative p-8 pb-6 border-b border-red-500/30">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Bell className="h-8 w-8 text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-2">
                🚀 LATEST UPDATES
              </h2>
              <p className="text-red-200 text-lg font-medium">
                Discover what's new in your learning journey
              </p>
            </div>
            <Sparkles className="h-8 w-8 text-red-400 animate-spin" />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-red-900/30 border border-red-500/50 px-4 py-2 rounded-full">
              <Calendar className="h-4 w-4 text-red-400" />
              <span className="text-red-200 font-semibold text-sm">December 2024</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-800/30 border border-red-500/50 px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-red-400" />
              <span className="text-red-200 font-semibold text-sm">4 New Updates</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-8 max-h-96 overflow-y-auto">
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div 
                key={index}
                className="group bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${update.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <update.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {update.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(update.type)}`}>
                          {update.type}
                        </span>
                        <span className="text-red-400 text-sm font-semibold">
                          {update.date}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {update.description}
                    </p>
                    
                    <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative p-8 pt-6 border-t border-red-500/30 bg-gradient-to-r from-red-950/50 to-black/50">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                🎯 Ready to Explore?
              </h3>
              <p className="text-red-200 text-sm">
                Dive into our comprehensive learning resources and start your journey to success!
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleClose}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg border border-red-500/50"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesModal;