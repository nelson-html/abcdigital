import React, { useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { content } from '@/data/content'
import { useProgress } from '@/hooks/useProgress'
import PlayerYoutube from '@/components/PlayerYoutube'
import { useTTS } from '@/tts/useTTS'

export default function Lesson() {
  const { moduleId, lessonId } = useParams()
  const navigate = useNavigate()
  const { markCompleted, isLessonCompleted } = useProgress()
  const { speakElement } = useTTS()
  const textRef = useRef(null)

  const moduleData = content[moduleId]
  
  if (!moduleData) {
    return <section className="p-4 text-center">Módulo no encontrado.</section>
  }

  const lessonIndex = moduleData.lessons.findIndex(l => l.id === lessonId)
  
  if (lessonIndex === -1) {
    return <section className="p-4 text-center">Lección no encontrada.</section>
  }

  const lesson = moduleData.lessons[lessonIndex]
  const isFirstLesson = lessonIndex === 0
  const isLastLesson = lessonIndex === moduleData.lessons.length - 1
  const previousLesson = !isFirstLesson ? moduleData.lessons[lessonIndex - 1] : null
  const nextLesson = !isLastLesson ? moduleData.lessons[lessonIndex + 1] : null

  const handleNext = () => {
    if (nextLesson) {
      navigate(`/modulo/${moduleId}/leccion/${nextLesson.id}`)
    } else {
      navigate(`/modulo/${moduleId}`)
    }
  }

  const handlePrevious = () => {
    if (previousLesson) {
      navigate(`/modulo/${moduleId}/leccion/${previousLesson.id}`)
    }
  }

  return (
    <section className="mx-auto max-w-4xl p-6 space-y-6 animate-fade-in">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
        <span>›</span>
        <Link to={`/modulo/${moduleId}`} className="hover:text-indigo-600 transition-colors">
          {moduleData.title}
        </Link>
        <span>›</span>
        <span className="text-gray-900 font-medium">{lesson.title}</span>
      </nav>

      {/* Lesson Content */}
      <article className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
        
        <div ref={textRef}>
          <header className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold">
                {lessonIndex + 1}
              </span>
              <div>
                <p className="text-sm text-gray-500">Lección {lessonIndex + 1} de {moduleData.lessons.length}</p>
                <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
              </div>
            </div>
          </header>

          <p className="text-base text-gray-700 leading-relaxed mb-6">{lesson.text}</p>
        </div>

        {/* Images Section */}


        {/* YouTube Section */}
        <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
          <PlayerYoutube videoId={lesson.video} title={lesson.title} />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {isLessonCompleted(moduleId, lesson.id) ? (
            <button 
              disabled
              className="flex-1 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-default shadow-md opacity-90"
            >
              ✓ Completado
            </button>
          ) : (
            <button 
              onClick={() => markCompleted(moduleId, lesson.id)} 
              className="flex-1 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              ✓ Marcar completado
            </button>
          )}
          <button 
            onClick={() => speakElement(textRef.current)} 
            className="flex-1 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            🔊 Leer lección
          </button>
        </div>
      </article>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={isFirstLesson}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md ${
            isFirstLesson
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 hover:shadow-xl'
          }`}
        >
          ← Lección anterior
        </button>
        
        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {isLastLesson ? 'Volver al módulo →' : 'Siguiente lección →'}
        </button>
      </div>
    </section>
  )
}
