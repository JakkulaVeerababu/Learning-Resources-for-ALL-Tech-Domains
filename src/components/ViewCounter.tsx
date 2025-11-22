import { useEffect } from 'react';

const ViewCounter = () => {
  useEffect(() => {
    const initializeViewData = () => {
      const stored = localStorage.getItem('techHubViewData');
      const baseData = stored ? JSON.parse(stored) : {
        currentViews: Math.floor(Math.random() * 500) + 100,
        onlineUsers: Math.floor(Math.random() * 50) + 10,
        totalVisitors: Math.floor(Math.random() * 10000) + 5000
      };

      baseData.currentViews += 1;
      baseData.totalVisitors += 1;

      localStorage.setItem('techHubViewData', JSON.stringify(baseData));
    };

    initializeViewData();

    const interval = setInterval(() => {
      const stored = localStorage.getItem('techHubViewData');
      const updated = stored ? JSON.parse(stored) : { currentViews: 0, onlineUsers: 0, totalVisitors: 0 };

      updated.currentViews += Math.floor(Math.random() * 3);
      updated.onlineUsers = Math.max(1, updated.onlineUsers + (Math.random() > 0.5 ? 1 : -1));
      updated.totalVisitors += Math.floor(Math.random() * 2);

      localStorage.setItem('techHubViewData', JSON.stringify(updated));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ViewCounter;
