import React, { useState, useEffect } from 'react';

const TopScrollingBanner = () => {
  // Use a non-round base number to look more authentic
  const INITIAL_VISITORS_BASE = 1051234; // Over 10 Lakh
  const VISITORS_PER_SECOND = 1.7;     // Simulates ~1-2 new visitors every second

  // "currentViews" has been removed from the state
  const [viewData, setViewData] = useState({
    onlineUsers: 8500,
    totalVisitors: INITIAL_VISITORS_BASE
  });

  useEffect(() => {
    // This is the core logic that now works correctly
    const updateStats = () => {
      let storedData = JSON.parse(localStorage.getItem('techHubViewData'));

      // If this is the user's first time EVER, set up the initial data
      if (!storedData || !storedData.firstVisitTimestamp) {
        storedData = {
          firstVisitTimestamp: Date.now(), // Save the time of the very first visit
          onlineUsers: 11482
          // "currentViews" logic removed from here
        };
      }

      // Calculate how many seconds have passed since the first visit
      const secondsSinceFirstVisit = (Date.now() - storedData.firstVisitTimestamp) / 1000;
      
      // Calculate the "grown" visitors based on time passed
      const grownVisitors = Math.floor(secondsSinceFirstVisit * VISITORS_PER_SECOND);
      
      // The new total is the base number + the growth over time
      const newTotalVisitors = INITIAL_VISITORS_BASE + grownVisitors;

      // Update the state with the newly calculated, large number
      setViewData(prev => ({
        ...prev, // Keep other stats
        totalVisitors: newTotalVisitors,
      }));

      // Save the timestamp back to storage for the next visit
      localStorage.setItem('techHubViewData', JSON.stringify(storedData));
    };

    updateStats(); // Run it once on page load

    // This interval now adds small, real-time increments during the session
    const interval = setInterval(() => {
      setViewData(prev => {
        const newOnline = Math.max(9500, prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 25));

        // "currentViews" has been removed from the return object
        return {
          totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 3) + 1,
          onlineUsers: newOnline,
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const bannerItems = [
     'veerababu jakkula'
  ];

  // REMOVED: The "Live Views" item has been deleted from this array.
  const dynamicStats = [
    `👥 Online Now: ${viewData.onlineUsers.toLocaleString()}`,
    `📈 Total Visitors: ${viewData.totalVisitors.toLocaleString()}`
  ];

  const allItems = [...bannerItems, ...dynamicStats];

  return (
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