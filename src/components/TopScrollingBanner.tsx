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
    <div className="fixed top-36 left-0 w-full z-50 shadow-lg overflow-hidden relative">
      <div className="bg-gradient-to-r from-red-800 via-red-900 to-black py-1 overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...allItems, ...allItems, ...allItems].map((text, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-4 text-white font-semibold text-xs tracking-wide"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-red-800 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default TopScrollingBanner;