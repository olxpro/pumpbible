
import React, { useState } from 'react';
import { GlowingInput } from './GlowingInput';
import { PredictButton } from './PredictButton';
// import { GoogleGenAI } from "@google/genai"; // Commented out as per instructions for placeholder

export const ContractInputForm: React.FC = () => {
  const [contractAddress, setContractAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handlePredict = async () => {
    if (!contractAddress.trim()) {
      alert("Please enter a contract address.");
      return;
    }
    setIsLoading(true);
    setPrediction(null);
    console.log(`Predicting for contract: ${contractAddress}`);

    // Placeholder for actual Gemini API call
    // Ensure API_KEY is set in your environment for this to work
    // const apiKey = process.env.API_KEY;
    // if (!apiKey) {
    //   console.error("API_KEY environment variable not set.");
    //   setPrediction("Configuration error: API Key not found.");
    //   setIsLoading(false);
    //   return;
    // }
    // const ai = new GoogleGenAI({ apiKey });

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      // const response = await ai.models.generateContent({
      //   model: 'gemini-2.5-flash-preview-04-17',
      //   contents: `Analyze crypto contract ${contractAddress} and predict its future outcome with a mystical and slightly arcane tone. Be concise.`,
      // });
      // setPrediction(response.text);
      setPrediction(`Oracle's whisper for ${contractAddress}: The celestial alignments hint at shifting fortunes. Scrutinize the digital entrails closely.`);
    } catch (error) {
      console.error("Error during prediction:", error);
      setPrediction("The connection to the ethereal plane was disrupted. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="group p-8 md:p-12 bg-neutral-900/70 backdrop-blur-md rounded-xl shadow-2xl shadow-neutral-950/50 border border-neutral-700/50 transition-all duration-500 hover:shadow-neutral-800/60 w-full max-w-3xl"> {/* Changed max-w-2xl to max-w-3xl */}
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
        {/* Mystic Icon Image has been moved to App.tsx */}
        <div className="flex flex-col sm:flex-row items-end gap-4 md:gap-6 w-full">
          <div className="flex-grow w-full sm:w-auto">
            <GlowingInput
              id="contractAddress"
              label="Contract Address"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              placeholder="0x..."
            />
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <PredictButton onClick={handlePredict} isLoading={isLoading} />
          </div>
        </div>

        {isLoading && (
          <div className="mt-6 p-4 text-cyan-200 font-share-tech-mono text-sm w-full text-center">
             <div className="animate-pulse">Consulting the digital ether...</div>
          </div>
        )}

        {prediction && !isLoading && (
          <div
            className="mt-6 p-4 border border-cyan-700/50 rounded-md bg-cyan-900/20 text-cyan-200 font-share-tech-mono text-sm w-full text-left animate-fadeIn"
            role="alert"
            aria-live="assertive"
          >
            <h3 className="font-cinzel text-cyan-400 [filter:drop-shadow(0_0_0.2rem_#22d3ee)] mb-2 text-base">Oracle's Vision:</h3>
            <p className="whitespace-pre-wrap">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Define fadeIn animation if not already present in tailwind config (it is by default usually)
// For robustness, ensure App.tsx or index.html has a base set of keyframes if needed for fadeIn
// Tailwind usually has basic animations like this, so this is more of a note.
// Keyframe for fadeIn (if needed, Tailwind usually has opacity transitions which are smoother)
// @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
// .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
