
import React from 'react';
import { ContractInputForm } from './components/ContractInputForm';
import { SmokyBackground } from './components/SmokyBackground';

// Base64 encoded SVG for the mystic icon, moved here from ContractInputForm
const mysticIconSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJteXN0aWNfaWNvbl9ncmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDYsMTgyLDIxMik7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMTY3LDI0MywyMDgpO3N0b3Atb3BhY2l0eTowLjgiIC8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJteXN0aWNfaWNvbl9nbG93Ij48ZmVHYXVzc2lhbkJsdXIgc3RhbmRhcmREZXZpYXRpb249IjMiIHJlc3VsdD0iY29sb3JlZEJsdXIiLz48ZmVOZXJnZT48ZmVNZXJnZU5vZGUgaW49ImNvbG9yZWRCbHVyIi8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNNTAgMTIgQyAyNSAyNSwgMjAgNjAsIDUwIDg4IEMgODAgNjAsIDc1IDI1LCA1MCAxMiBaIE01MCAzMCBDIDM1IDQwLCAzNSA2MCwgNTAgNzAgQyA2NSA2MCwgNjUgNDAsIDUwIDMwIFoiIGZpbGw9InVybCgjbXlzdGljX2ljb25fZ3JhZDEpIiBmaWx0ZXI9InVybCgjbXlzdGljX2ljb25fZ2xvdykiIHN0cm9rZT0icmdiYSgyMDksMjUwLDIyOSwwLjUpIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI3IiBmaWxsPSJyZ2IoMjA5LDI1MCwyMjkpIi8+PHBhdGggZD0iTTUwIDIwIEMgMzAgMzUsIDMwIDY1LCA1MCA4MCBDIDcwIDY1LCA3MCAzNSwgNTAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsMTgyLDIxMiwwLjcpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvc3ZnPg==`;

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-gray-200 flex flex-col items-center justify-center overflow-hidden antialiased p-4">
      <SmokyBackground />
      <div className="relative z-10 animate-gentle-bob flex flex-col items-center">
        <img 
          src={mysticIconSvg} 
          alt="Mystic Oracle Icon" 
          className="mb-6 md:mb-8 h-24 w-24 md:h-28 md:w-28 opacity-90 [filter:drop-shadow(0_0_0.5rem_#22d3ee)]" 
          aria-hidden="true" 
        />
        <ContractInputForm />
      </div>
       <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-600 text-xs font-share-tech-mono z-20">
        Crypto Oracle v0.1 // System Online
      </footer>
    </div>
  );
};

export default App;
