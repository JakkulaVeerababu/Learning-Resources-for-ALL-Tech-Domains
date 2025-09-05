import React from 'react';

const MeteorShower = () => {
  // Simplified version with much fewer meteors and lighter effects
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static background pattern instead of animated meteors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-1 h-20 bg-gradient-to-b from-red-400 to-transparent transform rotate-45"></div>
        <div className="absolute top-32 right-20 w-1 h-16 bg-gradient-to-b from-red-500 to-transparent transform rotate-45"></div>
        <div className="absolute top-64 left-1/3 w-1 h-24 bg-gradient-to-b from-red-300 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-18 bg-gradient-to-b from-red-600 to-transparent transform rotate-45"></div>
      </div>
    </div>
  );
};

export default MeteorShower;