import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
// import ToggleTheme from '../ui/ToggleTheme'
import TTSButton from '@/tts/TTSButton'

export default function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="backdrop-blur sticky top-0 z-40">

        <nav aria-label="Principal" className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

          <NavLink to="/" className="text-xl font-semibold text-brand " aria-label="Ir a inicio">
            Aprendiendo
          </NavLink>

          <ul className="flex gap-4">

            <li><NavLink className={({ isActive }) => isActive ? 'underline' : 'hover:underline focus-visible:underline'} to="/">Inicio</NavLink></li>

            <li><NavLink className={({ isActive }) => isActive ? 'underline' : 'hover:underline focus-visible:underline'} to="/acerca">Conocenos</NavLink></li>
          </ul>


        </nav>
      </header>
      
      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <TTSButton />

      <footer className="text-sm text-gray-400 p-4 text-center">
        © {new Date().getFullYear()} Aprendiendo
      </footer>
    </div>
  )
}
