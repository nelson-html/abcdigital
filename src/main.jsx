import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "tailwindcss"
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router.jsx'
import TTSProvider from '@/tts/TTSContext'
import { registerSW } from 'virtual:pwa-register'

// import App from './App.jsx'
registerSW({ immediate: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TTSProvider>
      <RouterProvider router={router} />
    </TTSProvider>
  </StrictMode>,
)
