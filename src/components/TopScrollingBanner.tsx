import React, { useState, useEffect } from 'react';

const TopScrollingBanner = () => {
  const [viewData, setViewData] = useState({
    currentViews: 0,
    onlineUsers: 0,
    totalVisitors: 0
  });

  useEffect(() => {
    const initializeViewData = () => {
      const stored = localStorage.getItem('techHubViewData');
      const baseData = stored ? JSON.parse(stored) : {
        currentViews: Math.floor(Math.random() * 00) + 100,
        onlineUsers: Math.floor(Math.random() * 0) + 10,
        totalVisitors: Math.floor(Math.random() * 0000) + 5000
      };

      // Increment for the current session (as per your original code)
      baseData.currentViews += 1;
      baseData.totalVisitors += 1;
      
      setViewData(baseData);
      localStorage.setItem('techHubViewData', JSON.stringify(baseData));
    };

    initializeViewData();

    const interval = setInterval(() => {
      setViewData(prev => {
        const updated = {
          currentViews: prev.currentViews + Math.floor(Math.random() * 3),
          onlineUsers: Math.max(1, prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1)),
          totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 2)
        };
        localStorage.setItem('techHubViewData', JSON.stringify(updated));
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    const bannerItems = [
     'veerababu jakkula'
  ];

  const dynamicStats = [
    `👁️ Live Views: ${viewData.currentViews.toLocaleString()}`,
    `👥 Online Now: ${viewData.onlineUsers}`,
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`
  ];

  const allItems = [...bannerItems, ...dynamicStats];

  return (
    // Restored to your original `top-36` position
    <div className="fixed top-36 left-0 w-full z-50 shadow-lg overflow-hidden relative">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-1 overflow-hidden">
        {/* Using your original 'animate-scroll-left' class */}
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
      
      {/* Restored your original fade effects */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-pink-600 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default TopScrollingBanner;