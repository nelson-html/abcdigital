import React, { useState } from 'react'
import { useTTS } from '@/tts/useTTS'

export default function TTSButton() {
  const { enabled, toggle, rate, setRate, stop } = useTTS()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-50">
      {open && (
        <div className="rounded border bg-white p-3 shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <label htmlFor="rate" className="block text-sm font-medium mb-2">Velocidad: {rate.toFixed(2)}x</label>
          <input
            id="rate"
            type="range"
            min="0.8"
            max="1.4"
            step="0.05"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full"
            aria-label="Control de velocidad de lectura"
          />
          <div className="mt-3 flex gap-2">
            <button onClick={stop} className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Detener</button>
            <button onClick={() => setOpen(false)} className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Cerrar</button>
          </div>
        </div>
      )}
      <div className="flex gap-2">
        <button
          aria-label="Abrir controles de lectura"
          onClick={() => setOpen(v => !v)}
          className="px-3 py-2 border rounded bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
        >
          Controles
        </button>
        <button
          aria-pressed={enabled}
          onClick={toggle}
          className={`px-3 py-2 border rounded text-sm font-medium ${enabled ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-900'}`}
        >
          {enabled ? 'TTS: ON' : 'TTS: OFF'}
        </button>
      </div>
    </div>
  )
}
