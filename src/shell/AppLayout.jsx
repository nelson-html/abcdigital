import React from "react";
import { Outlet, NavLink } from "react-router-dom";
// import ToggleTheme from '../ui/ToggleTheme'
import TTSButton from "@/tts/TTSButton";
import TourGuide from "@/components/TourGuide";

export default function AppLayout() {
   return (
      <div className="min-h-dvh flex flex-col">
         <header className="glass-effect sticky top-0 z-40 border-b border-white/20 shadow-lg">
            <nav
               aria-label="Principal"
               className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
            >
               <NavLink
                  to="/"
                  id="app-logo"
                  className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
                  aria-label="Ir a inicio"
               >
                  ABC Digital
               </NavLink>

               <ul className="flex gap-6">
                  <li>
                     <NavLink
                        id="nav-inicio"
                        className={({ isActive }) =>
                           `relative px-4 py-2 font-medium transition-all duration-300 ${
                              isActive
                                 ? "text-indigo-600"
                                 : "text-gray-700 hover:text-indigo-600"
                           } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-purple-600 after:transition-transform after:duration-300 ${
                              isActive
                                 ? "after:scale-x-100"
                                 : "after:scale-x-0 hover:after:scale-x-100"
                           }`
                        }
                        to="/"
                     >
                        Inicio
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        id="nav-conocenos"
                        className={({ isActive }) =>
                           `relative px-4 py-2 font-medium transition-all duration-300 ${
                              isActive
                                 ? "text-indigo-600"
                                 : "text-gray-700 hover:text-indigo-600"
                           } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-purple-600 after:transition-transform after:duration-300 ${
                              isActive
                                 ? "after:scale-x-100"
                                 : "after:scale-x-0 hover:after:scale-x-100"
                           }`
                        }
                        to="/acerca"
                     >
                        Conocenos
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>

         <main
            id="main"
            className="flex-1"
         >
            <Outlet />
         </main>

         <TTSButton />
         <TourGuide />

         <footer className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 text-center shadow-xl">
            <div className="relative z-10">
               <p className="text-sm font-medium">
                  © {new Date().getFullYear()} ABC Digital -
                  Educación Digital Accesible
               </p>
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
         </footer>
      </div>
   );
}
