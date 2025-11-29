import { useCallback, useEffect, useState } from 'react'

const KEY = 'aprendiendo_progress'

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(progress))
  }, [progress])

  const markCompleted = useCallback((moduleId, lessonId) => {
    setProgress(prev => {
      const m = prev[moduleId] || { completed: {} }
      return {
        ...prev,
        [moduleId]: {
          ...m,
          completed: { ...m.completed, [lessonId]: true }
        }
      }
    })
  }, [])

  const getModulePercent = useCallback((moduleId, totalLessons) => {
    const m = progress[moduleId] || { completed: {} }
    const done = Object.values(m.completed).filter(Boolean).length
    return totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0
  }, [progress])

  const isLessonCompleted = useCallback((moduleId, lessonId) => {
    const m = progress[moduleId] || { completed: {} }
    return !!m.completed[lessonId]
  }, [progress])

  return { progress, markCompleted, getModulePercent, isLessonCompleted }
}
