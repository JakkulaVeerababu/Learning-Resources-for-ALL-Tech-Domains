import React, { useState, useEffect } from 'react';

const TopScrollingBanner = () => {
  // Define the impressive base numbers you want to see
  const BASE_TOTAL_VISITORS = 1000000; // 10 Lakh+
  const BASE_CURRENT_VIEWS = 50000;    // 50k+
  const BASE_ONLINE_USERS = 10000;     // 10k+

  const [viewData, setViewData] = useState({
    currentViews: BASE_CURRENT_VIEWS,
    onlineUsers: BASE_ONLINE_USERS,
    totalVisitors: BASE_TOTAL_VISITORS
  });

  useEffect(() => {
    // This function now correctly initializes with HIGH numbers
    const initializeViewData = () => {
      const stored = localStorage.getItem('techHubViewData');
      
      // If data is in storage, use it. Otherwise, create it with our high base numbers.
      const baseData = stored ? JSON.parse(stored) : {
        currentViews: BASE_CURRENT_VIEWS + Math.floor(Math.random() * 1000), // Start with a random high value
        onlineUsers: BASE_ONLINE_USERS + Math.floor(Math.random() * 500),   // Start with a random high value
        totalVisitors: BASE_TOTAL_VISITORS + Math.floor(Math.random() * 5000) // Start with a random high value
      };

      // Always increment total visitors for the new session
      baseData.totalVisitors += 1;
      
      setViewData(baseData);
      localStorage.setItem('techHubViewData', JSON.stringify(baseData));
    };

    initializeViewData();

    // This interval now makes the numbers fluctuate realistically around the high base
    const interval = setInterval(() => {
      setViewData(prev => {
        const updated = {
          // Total visitors should only go up
          totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 3) + 1,
          
          // Live views fluctuate around the base, ensuring it doesn't dip too low
          currentViews: Math.max(
            BASE_CURRENT_VIEWS - 2000, 
            prev.currentViews + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 75)
          ),
          
          // Online users fluctuate similarly
          onlineUsers: Math.max(
            BASE_ONLINE_USERS - 500, 
            prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 30)
          ),
        };
        localStorage.setItem('techHubViewData', JSON.stringify(updated));
        return updated;
      });
    }, 2500); // Using a slightly faster interval for a more "live" feel

    return () => clearInterval(interval);
  }, []);

  const bannerItems = [
    'veerababu jakkula'
  ];

  const dynamicStats = [
    `👁️ Live Views: ${viewData.currentViews.toLocaleString()}`,
    `👥 Online Now: ${viewData.onlineUsers.toLocaleString()}`, // Added toLocaleString for consistency
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`
  ];

  const allItems = [...bannerItems, ...dynamicStats];

  return (
    // Assuming you have 'animate-fast-scroll' or a similar class defined in tailwind.config.js
    <div className="fixed top-36 left-0 w-full z-50 shadow-lg overflow-hidden relative">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-1 overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap"> 
          {[...allItems, ...allItems, ...allItems, ...allItems].map((text, index) => (
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