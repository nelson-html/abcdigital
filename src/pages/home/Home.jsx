import React from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '@/hooks/useProgress'

const modules = [
  { id: '1', title: 'Uso básico de celulares', desc: 'Navegación, apps y configuraciones.' },
  { id: '2', title: 'Uso básico de computadoras', desc: 'Escritorio, navegador y SO.' },
  { id: '3', title: 'Navegación segura', desc: 'Riesgos, contraseñas y privacidad.' },
  { id: '4', title: 'Búsqueda y evaluación', desc: 'Motores y verificación.' },
  { id: '5', title: 'Comunicación digital', desc: 'Email, mensajería y video.' },
  { id: '6', title: 'Productividad', desc: 'Ofimática y colaboración.' }
]

export default function Home() {
  const { getModulePercent } = useProgress()

  return (
    <section className="mx-auto flex-col flex max-full space-y-8 animate-fade-in">

      <header className="space-y-2 w-full flex flex-col">

        <div className='w-full object-cover relative overflow-hidden'>
          <img 
            className='w-full max-h-9/12 block md:max-h-72 object-cover lg:max-h-96 xl:max-h-96 lg:object-top xl:object-center' 
            src="/assets/aprendiendo.avif" 
            alt="imagen hero"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div className='w-full p-6 bg-white/80 backdrop-blur-sm'>
          <p className="text-xl text-gray-800 font-medium">Plataforma educativa accesible para habilidades digitales.</p>
        </div>
      </header>

      {/* Bloques de modulo home */}
      <div className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((m, index) => {
          const pct = getModulePercent(m.id, 4)
          return (
            <article 
              key={m.id} 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover-lift overflow-hidden border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              <h2 className="text-xl text-gray-900 font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {m.title}
              </h2>
              
              <p className="text-sm text-gray-600 mt-2 mb-4 leading-relaxed">
                {m.desc}
              </p>
              
              <div 
                className="mt-4" 
                role="progressbar" 
                aria-valuenow={pct} 
                aria-valuemin="0" 
                aria-valuemax="100" 
                aria-label={`Progreso ${m.title}`}
              >
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out relative overflow-hidden" 
                    style={{ width: `${pct}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">{pct}% completado</p>
              </div>
              
              <Link 
                className="mt-5 inline-flex items-center justify-center w-full text-white font-medium px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-xl" 
                to={`/modulo/${m.id}`}
              >
                Entrar al módulo
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
