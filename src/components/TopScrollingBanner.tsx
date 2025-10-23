import React, { useState, useEffect } from 'react';

// A new, unique key to force re-initialization
const STORAGE_KEY = 'techHubViewData_v2'; 

const TopScrollingBanner = () => {
  const [viewData, setViewData] = useState({
    onlineUsers: 0,
    totalVisitors: 0
  });

  useEffect(() => {
    const initializeViewData = () => {
      // We now look for the new key
      const stored = localStorage.getItem(STORAGE_KEY);
      
      const baseData = stored ? JSON.parse(stored) : {
        // High base values will now be used on the first load
        totalVisitors: Math.floor(Math.random() * 50000) + 1000000, 
        onlineUsers: Math.floor(Math.random() * 500) + 10000,
      };

      baseData.currentViews += 1;
      baseData.totalVisitors += 1;
      
      setViewData(baseData);
      // We now save under the new key
      localStorage.setItem(STORAGE_KEY, JSON.stringify(baseData));
    };

    initializeViewData();

    const interval = setInterval(() => {
      setViewData(prev => {
        const updated = {
          currentViews: prev.currentViews + Math.floor(Math.random() * 3),
          onlineUsers: Math.max(10000, prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 5))),
          totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 2)
        };
        // We now update the new key
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bannerItems = [
    "🎓 Veerababu Jakkula", 
    "💡 Innovation Hub", 
    "🔬 Research Center",
    "⚠️ Material Access Issues? DM on WhatsApp - Get materials within 1 minute! 📱",
    "🚀 24/7 Support Available"
  ];

  const dynamicStats = [
    `👥 Online Now: ${viewData.onlineUsers.toLocaleString()}`,
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`
  ];

  const allItems = [...bannerItems, ...dynamicStats];

  return (
    <>
      {/* WhatsApp Help Notice */}
      <div className="fixed top-16 left-0 w-full z-50 bg-gradient-to-r from-green-600 via-green-700 to-green-800 py-1 shadow-lg border-b border-green-500/50">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className="inline-flex items-center px-6 text-white font-bold text-xs tracking-wide"
            >
              MATERIAL ACCESS ISSUES? WHATSAPP +91 8008651769
            </span>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-green-600 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-green-800 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Original Banner */}
      <div className="fixed top-20 left-0 w-full z-50 shadow-lg overflow-hidden relative">
        <div className="bg-gradient-to-r from-red-800 via-red-900 to-black py-0.5 overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...allItems, ...allItems, ...allItems].map((text, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 text-white font-semibold text-[10px] tracking-wide"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-red-800 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>
    </>
  );
};

export default TopScrollingBanner;