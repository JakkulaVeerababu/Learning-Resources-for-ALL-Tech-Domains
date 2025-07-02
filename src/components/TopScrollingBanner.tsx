import React, { useState, useEffect } from 'react';

const TopScrollingBanner = () => {
  // 1. Restore the full state to hold all view data
  const [viewData, setViewData] = useState({
    currentViews: 0,
    onlineUsers: 0,
    totalVisitors: 0
  });

  // 2. Restore the full useEffect logic to manage all three stats
  useEffect(() => {
    const initializeViewData = () => {
      const stored = localStorage.getItem('techHubViewData');
      const baseData = stored ? JSON.parse(stored) : {
        currentViews: Math.floor(Math.random() * 500) + 100,
        onlineUsers: Math.floor(Math.random() * 50) + 10,
        totalVisitors: Math.floor(Math.random() * 10000) + 5000
      };

      // Increment for the current session
      baseData.currentViews += 1;
      baseData.totalVisitors += 1;
      
      setViewData(baseData);
      localStorage.setItem('techHubViewData', JSON.stringify(baseData));
    };

    initializeViewData();

    // Simulate real-time updates for all stats
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

  // 3. Define the static items
  const bannerItems = [
    "🎓 Veerababu Jakkula", 
  ];

  // 4. Create an array of the dynamic stat strings
  const dynamicStats = [
    `👁️ Live Views: ${viewData.currentViews.toLocaleString()}`,
    `👥 Online Now: ${viewData.onlineUsers}`,
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`
  ];

  // 5. Combine the static and dynamic items into one final array
  const allItems = [...bannerItems, ...dynamicStats];

  return (
    <div className="fixed top-36 left-0 w-full z-50 shadow-lg overflow-hidden relative">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-1 overflow-hidden">
        {/* 6. Map over the final combined 'allItems' array */}
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
      
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-pink-600 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default TopScrollingBanner;