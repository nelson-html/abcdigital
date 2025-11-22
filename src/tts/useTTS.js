import { useContext } from 'react'
import { TTSContext } from './context'

export function useTTS() {
  const ctx = useContext(TTSContext)
  if (!ctx) throw new Error('useTTS debe usarse dentro de TTSProvider')
  return ctx
}
