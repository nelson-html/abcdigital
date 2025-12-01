import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react'
import { TTSContext } from '@/tts/context'

export default function TTSProvider({ children }) {
  const [enabled, setEnabled] = useState(false)
  const [rate, setRate] = useState(() => {
    const r = localStorage.getItem('tts_rate')
    return r ? parseFloat(r) : 1.0
  })

  const synthRef = useRef(() => window.speechSynthesis)
  const utterRef = useRef(null)
  const voicesReadyRef = useRef(false)

  // 1) Pre-cargar voces y marcar readiness
  useEffect(() => {
    const synth = synthRef.current()
    const ensure = () => {
      const v = synth.getVoices()
      if (v && v.length > 0) voicesReadyRef.current = true
    }
    synth.addEventListener('voiceschanged', ensure)
    ensure() // intento inicial
    return () => synth.removeEventListener('voiceschanged', ensure)
  }, [])

  const stop = useCallback(() => {
    const synth = synthRef.current()
    if (synth?.speaking) synth.cancel()
    utterRef.current = null
  }, [])

  const toggle = useCallback(() => {
    setEnabled(v => {
      const newValue = !v
      // Si se está desactivando (OFF), detener la lectura
      if (!newValue) {
        stop()
      }
      return newValue
    })
  }, [stop])

  // 2) Hablar un elemento con reintento cuando las voces aún no están
  const speakElement = useCallback((el) => {
    if (!enabled || !el) return
    const synth = synthRef.current()
    if (!synth) return

    const start = () => {
      stop()
      const text = el.innerText.trim()
      if (!text) return
      const utter = new SpeechSynthesisUtterance(text)
      utter.rate = rate
      const voices = synth.getVoices()
      const preferred =
        voices.find(v => v.lang?.toLowerCase().startsWith('es-419') || v.lang?.toLowerCase().startsWith('es-es')) ||
        voices.find(v => v.lang?.toLowerCase().startsWith('es')) || null
      if (preferred) utter.voice = preferred
      utterRef.current = utter
      synth.speak(utter)
    }

    if (!voicesReadyRef.current || synth.getVoices().length === 0) {
      const once = () => { voicesReadyRef.current = true; synth.removeEventListener('voiceschanged', once); start() }
      synth.addEventListener('voiceschanged', once)
      synth.getVoices() // fuerza resolución de voces
      return
    }

    start()
  }, [enabled, rate, stop])

  // 3) Setter de velocidad con persistencia
  const setRateWithStorage = useCallback((r) => {
    localStorage.setItem('tts_rate', String(r))
    setRate(r)
  }, [])

  const value = useMemo(() => ({
    enabled, rate, toggle, setRate: setRateWithStorage, speakElement, stop
  }), [enabled, rate, toggle, setRateWithStorage, speakElement, stop])

  return <TTSContext.Provider value={value}>{children}</TTSContext.Provider>
}
