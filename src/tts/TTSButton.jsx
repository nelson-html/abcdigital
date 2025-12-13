import React, { useState } from "react";
import { useTTS } from "@/tts/useTTS";

export default function TTSButton() {
   const { enabled, toggle, rate, setRate, stop } =
      useTTS();
   const [open, setOpen] = useState(false);

   return (
      <div
         id="tts-button"
         className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50"
      >
         {open && (
            <div className="glass-effect rounded-2xl p-5 shadow-2xl border border-white/30 animate-scale-in min-w-[280px]">
               <label
                  htmlFor="rate"
                  className="block text-sm font-semibold mb-3 text-gray-800"
               >
                  Velocidad:{" "}
                  <span className="text-indigo-600">
                     {rate.toFixed(2)}x
                  </span>
               </label>
               <input
                  id="rate"
                  type="range"
                  min="0.8"
                  max="1.4"
                  step="0.05"
                  value={rate}
                  onChange={(e) =>
                     setRate(parseFloat(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  aria-label="Control de velocidad de lectura"
               />
               <div className="mt-4 flex gap-2">
                  <button
                     onClick={stop}
                     className="flex-1 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                     ⏹ Detener
                  </button>
                  <button
                     onClick={() => setOpen(false)}
                     className="flex-1 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                     ✕ Cerrar
                  </button>
               </div>
            </div>
         )}
         <div className="flex gap-3">
            <button
               aria-label="Abrir controles de lectura"
               onClick={() => setOpen((v) => !v)}
               className="px-5 py-3 rounded-xl font-medium bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
               ⚙️ Controles
            </button>
            <button
               aria-pressed={enabled}
               onClick={toggle}
               className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  enabled
                     ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                     : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200"
               }`}
            >
               {enabled ? "🔊 TTS: ON" : "🔇 TTS: OFF"}
            </button>
         </div>
      </div>
   );
}
