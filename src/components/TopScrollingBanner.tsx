import React, { useState, useEffect } from 'react';

const TopScrollingBanner = () => {
  const [viewData, setViewData] = useState({
    currentViews: 0,
    onlineUsers: 0,
    totalVisitors: 0
  });

  useEffect(() => {
    // This function initializes the data and keeps it updated
    const initializeViewData = () => {
      const stored = localStorage.getItem('techHubViewData');
      const baseData = stored ? JSON.parse(stored) : {
        currentViews: Math.floor(Math.random() * 500) + 100,
        onlineUsers: Math.floor(Math.random() * 50) + 10,
        totalVisitors: Math.floor(Math.random() * 10000) + 5000
      };
      
      baseData.totalVisitors += 1;
      
      setViewData(baseData);
      localStorage.setItem('techHubViewData', JSON.stringify(baseData));
    };

    initializeViewData();

    // This interval simulates real-time updates
    const interval = setInterval(() => {
      setViewData(prev => {
        const updated = {
          currentViews: prev.currentViews + Math.floor(Math.random() * 3),
          onlineUsers: Math.max(1, prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3)),
          totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 2)
        };
        localStorage.setItem('techHubViewData', JSON.stringify(updated));
        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Items for the SLOWER, top banner
  const slowBannerItems = [
    "🎓 Veerababu Jakkula", "🏫 NEC Student ECE", "📱 Instagram: @csweterner", "💻 Fussionos",
    "🚀 Tech Learning Hub", "🌟 Free Resources Forever"
  ];

  // Items for the FASTER, bottom banner with dynamic data
  const fastBannerItems = [
    `👁️ Live Views: ${viewData.currentViews.toLocaleString()}`,
    `👥 Online Now: ${viewData.onlineUsers}`,
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`,
    "💡 Innovation Hub", "🔬 Research Center"
  ];
  
  // A helper function to create a seamless loop of items
  const duplicateItemsForLoop = (items) => [...items, ...items, ...items, ...items];

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-lg overflow-hidden group">
      {/* Container for both banners */}
      <div className="relative">
        
        {/* Banner 1: Slower Speed */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-2.5 overflow-hidden">
          <div className="flex animate-scroll-slow group-hover:pause">
            {duplicateItemsForLoop(slowBannerItems).map((text, index) => (
              <span 
                key={index}
                className="inline-flex items-center mx-4 text-white font-semibold text-sm tracking-wide whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Banner 2: Faster Speed */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 py-1.5 border-t-2 border-white/30 overflow-hidden">
           <div className="flex animate-scroll-fast group-hover:pause">
            {duplicateItemsForLoop(fastBannerItems).map((text, index) => (
              <span 
                key={index}
                className="inline-flex items-center mx-4 text-white font-semibold text-xs tracking-wide whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        
        {/* Fades for a clean look */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10 opacity-40"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10 opacity-40"></div>
      </div>
    </div>
  );
};

export default TopScrollingBanner;