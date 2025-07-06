import React, { useEffect, useState } from 'react';

interface Meteor {
  id: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  delay: number;
}

const MeteorShower = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const createMeteor = (): Meteor => {
      return {
        id: Math.random(),
        x: Math.random() * 100 - 20, // Start from left side with some variation
        y: -10, // Start above viewport
        length: Math.random() * 80 + 60, // Meteor trail length
        speed: Math.random() * 2 + 1.5, // Speed of falling
        opacity: Math.random() * 0.8 + 0.2,
        delay: Math.random() * 2000 // Random delay before appearing
      };
    };

    const updateMeteors = () => {
      setMeteors(prevMeteors => {
        // Remove meteors that have fallen off screen
        const activeMeteors = prevMeteors.filter(meteor => 
          meteor.y < 120 && meteor.x < 120
        );
        
        // Update existing meteors (diagonal movement)
        const updatedMeteors = activeMeteors.map(meteor => ({
          ...meteor,
          y: meteor.y + meteor.speed,
          x: meteor.x + meteor.speed * 0.8, // Diagonal movement
          opacity: meteor.y > 80 ? meteor.opacity * 0.95 : meteor.opacity // Fade out near bottom
        }));

        // Add new meteors randomly
        if (Math.random() < 0.15) { // 15% chance to add new meteor
          updatedMeteors.push(createMeteor());
        }

        return updatedMeteors;
      });
    };

    const interval = setInterval(updateMeteors, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes meteor-trail {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px) rotate(45deg);
            opacity: 0;
          }
        }

        .meteor {
          background: linear-gradient(45deg, 
            rgba(255, 255, 255, 0.9) 0%,
            rgba(135, 206, 250, 0.8) 20%,
            rgba(255, 165, 0, 0.6) 40%,
            rgba(255, 69, 0, 0.4) 60%,
            rgba(255, 0, 0, 0.2) 80%,
            transparent 100%
          );
          box-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(135, 206, 250, 0.6),
            0 0 30px rgba(255, 165, 0, 0.4);
        }

        .meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, 
            rgba(255, 255, 255, 1) 0%,
            rgba(135, 206, 250, 0.8) 30%,
            transparent 70%
          );
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 
            0 0 15px rgba(255, 255, 255, 1),
            0 0 25px rgba(135, 206, 250, 0.8);
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {meteors.map(meteor => (
          <div
            key={meteor.id}
            className="meteor absolute"
            style={{
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              width: `${meteor.length}px`,
              height: '2px',
              transform: 'rotate(45deg)',
              opacity: meteor.opacity,
              transformOrigin: 'left center'
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MeteorShower;