
import React from 'react';

export const SmokyBackground: React.FC = () => {
  return (
    <>
      {/* Layer 1 - Slower, larger, more diffuse */}
      <div
        className="absolute inset-0 opacity-20 animate-smoke-drift-1"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 80%, rgba(55, 65, 81, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 30%, rgba(75, 85, 99, 0.4) 0%, transparent 50%)
          `,
        }}
      />
      {/* Layer 2 - Faster, smaller, slightly more defined */}
      <div
        className="absolute inset-0 opacity-15 animate-smoke-drift-2"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 50%, rgba(107, 114, 128, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse at 90% 10%, rgba(156, 163, 175, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 10% 10%, rgba(120, 130, 145, 0.3) 0%, transparent 60%)
          `,
        }}
      />
       {/* Subtle stars/particles */}
      <div
        className="absolute inset-0 opacity-30 animate-pulse"
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 2px, transparent 3px)',
          backgroundSize: '50px 50px', 
        }}
      />
    </>
  );
};
