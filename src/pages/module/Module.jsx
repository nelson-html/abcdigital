import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { content } from '@/data/content'
import { useProgress } from '@/hooks/useProgress'

export default function Module() {
  const { id } = useParams()
  const data = content[id]
  const { isLessonCompleted } = useProgress()

  if (!data) return <section className="p-4 text-center">Módulo no encontrado.</section>

  const completedCount = data.lessons.filter(lesson => isLessonCompleted(id, lesson.id)).length
  const totalLessons = data.lessons.length
  const progressPercentage = (completedCount / totalLessons) * 100

  return (
    <section className="mx-auto max-w-4xl p-6 space-y-8 animate-fade-in">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold gradient-text">{data.title}</h1>
        <p className="text-gray-600 text-lg">Selecciona una lección para comenzar</p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progreso del módulo</span>
            <span className="font-medium">{completedCount} de {totalLessons} lecciones</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Lesson List */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {data.lessons.map((lesson, index) => {
          const completed = isLessonCompleted(id, lesson.id)
          
          return (
            <li key={lesson.id} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
              <Link 
                to={`/modulo/${id}/leccion/${lesson.id}`}
                className="block bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Lesson Number Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                    completed 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                  }`}>
                    {completed ? '✓' : index + 1}
                  </div>
                  
                  {/* Lesson Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {lesson.text.substring(0, 100)}...
                    </p>
                    
                    {/* Status Badge */}
                    <div className="mt-3">
                      {completed ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          Completada
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                          Pendiente
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Back to Home Button */}
      <div className="text-center pt-4">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          ← Volver al inicio
        </Link>
      </div>
    </section>
  )
}
