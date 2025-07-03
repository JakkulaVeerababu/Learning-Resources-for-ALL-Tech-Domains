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
      
      // Use stored data if it exists, otherwise create new high base values.
      const baseData = stored ? JSON.parse(stored) : {
        // Changed: Set base value to over 10 lakh (1,000,000)
        totalVisitors: Math.floor(Math.random() * 50000) + 1000000, 
        
        // Changed: Set base value to over 10k (10,000)
        onlineUsers: Math.floor(Math.random() * 500) + 10000,
        
        // Adjusted for consistency with high online user count
        currentViews: Math.floor(Math.random() * 1000) + 11000
      };

      // Increment for the current session visit
      baseData.currentViews += 1;
      baseData.totalVisitors += 1;
      
      setViewData(baseData);
      localStorage.setItem('techHubViewData', JSON.stringify(baseData));
    };

    initializeViewData();

    // The interval logic for small, continuous updates remains the same.
    const interval = setInterval(() => {
      setViewData(prev => {
        const updated = {
          currentViews: prev.currentViews + Math.floor(Math.random() * 3),
          // Ensure online users fluctuate but stay high
          onlineUsers: Math.max(10000, prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 5))),
          totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 2)
        };
        localStorage.setItem('techHubViewData', JSON.stringify(updated));
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bannerItems = [
    "🎓 Veerababu Jakkula",  "💡 Innovation Hub", "🔬 Research Center"
  ];

  // The toLocaleString() method will automatically format the large numbers with commas.
  const dynamicStats = [
    `👁️ Live Views: ${viewData.currentViews.toLocaleString()}`,
    `👥 Online Now: ${viewData.onlineUsers.toLocaleString()}`,
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`
  ];

  const allItems = [...bannerItems, ...dynamicStats];

  return (
    <div className="fixed top-36 left-0 w-full z-50 shadow-lg overflow-hidden relative">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-1 overflow-hidden">
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