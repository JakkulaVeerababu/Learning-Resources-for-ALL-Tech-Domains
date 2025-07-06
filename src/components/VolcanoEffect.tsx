import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const VolcanoEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (): Particle => {
      const colors = ['🔥', '💥', '⭐', '✨', '🌟', '💫', '🔴', '🟠', '🟡'];
      return {
        id: Math.random(),
        x: Math.random() * 100, // Start from anywhere on top
        y: -10, // Start above viewport
        size: Math.random() * 20 + 10,
        speed: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 10
      };
    };

    const updateParticles = () => {
      setParticles(prevParticles => {
        // Remove particles that have fallen off screen
        const activeParticles = prevParticles.filter(particle => particle.y < 110);
        
        // Update existing particles
        const updatedParticles = activeParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          x: particle.x + Math.sin(particle.y * 0.01) * 0.5, // Slight horizontal drift
          rotation: particle.rotation + particle.rotationSpeed
        }));

        // Add new particles randomly
        if (Math.random() < 0.3) { // 30% chance to add new particle each frame
          updatedParticles.push(createParticle());
        }

        return updatedParticles;
      });
    };

    const interval = setInterval(updateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute transition-all duration-100 ease-linear"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            transform: `rotate(${particle.rotation}deg)`,
            filter: 'drop-shadow(0 0 10px rgba(255, 100, 0, 0.8))',
            animation: `glow 2s ease-in-out infinite alternate`
          }}
        >
          {particle.color}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes glow {
          from {
            filter: drop-shadow(0 0 5px rgba(255, 100, 0, 0.8)) brightness(1);
          }
          to {
            filter: drop-shadow(0 0 20px rgba(255, 150, 0, 1)) brightness(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default VolcanoEffect;