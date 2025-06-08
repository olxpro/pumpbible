
import React from 'react';

interface GlowingInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export const GlowingInput: React.FC<GlowingInputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = "Enter value...",
  type = "text",
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-md font-cinzel text-cyan-300 tracking-wider [filter:drop-shadow(0_0_0.3rem_#22d3ee)]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 font-share-tech-mono bg-neutral-800/50 border-2 border-cyan-600/70 
                   rounded-md text-cyan-200 placeholder-cyan-700/80 caret-cyan-400
                   focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/80 
                   focus:shadow-glow-cyan transition-all duration-300 ease-in-out"
      />
    </div>
  );
};
