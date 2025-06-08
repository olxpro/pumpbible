
import React from 'react';

interface PredictButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const PredictButton: React.FC<PredictButtonProps> = ({ onClick, isLoading = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`relative group/button font-cinzel font-bold text-lg py-3 px-12 rounded-lg overflow-hidden {/* Changed px-10 to px-12 */}
                  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                  border-2 border-amber-500/50
                  focus:outline-none focus:ring-4 focus:ring-amber-400/50
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
                  w-full sm:w-auto 
                  ${isLoading 
                    ? 'bg-amber-700 text-amber-300 shadow-inner' 
                    : 'bg-gradient-to-br from-amber-500 to-yellow-600 text-neutral-800 shadow-lg shadow-amber-500/40 hover:shadow-glow-gold-hover'
                  }
                `}
      aria-label={isLoading ? "Consulting Oracle, please wait" : "Predict based on contract address"}
    >
      {/* Base text */}
      <span className="relative z-10">
        {isLoading ? 'Consulting Oracle...' : 'Predict'}
      </span>

      {/* Subtle shimmer element - animates on hover or continuously */}
      {!isLoading && (
         <span className="absolute inset-0 block w-full h-full" aria-hidden="true">
            {/* Pulsing glow effect */}
            <span className="absolute inset-0 animate-subtle-pulse rounded-lg bg-gradient-to-br from-yellow-400/50 via-yellow-300/30 to-amber-500/50 opacity-75 group-hover/button:opacity-100 transition-opacity duration-300"></span>
             {/* Glint effect (subtle) - more prominent on hover */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover/button:translate-x-full group-hover/button:duration-1000"></span>
        </span>
      )}
    </button>
  );
};
