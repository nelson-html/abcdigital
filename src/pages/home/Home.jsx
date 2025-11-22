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
    <section className="mx-auto flex-col flex max-full space-y-8">

      <header className="space-y-2 w-full flex flex-col">

        <div className='w-full object-cover '>
          <img className='w-full max-h-9/12 block md:max-h-72 object-cover lg:max-h-96 xl:max-h-96 lg:object-top xl:object-center' src="/assets/aprendiendo.avif" alt="" />
        </div>

        <div className='w-full p-4'>
          <p className="text-lg">Plataforma educativa accesible para habilidades digitales.</p>
        </div>
      </header>

      {/* Bloques de modulo home */}
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map(m => {
          const pct = getModulePercent(m.id, 4)
          return (
            <article key={m.id} className="border rounded p-4 bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold">{m.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{m.desc}</p>
              <div className="mt-3" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100" aria-label={`Progreso ${m.title}`}>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-blue-500 dark:bg-blue-400 transition-all" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{pct}% completado</p>
              </div>
              <Link className="mt-3 inline-block px-3 py-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:underline" to={`/modulo/${m.id}`}>Entrar</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
