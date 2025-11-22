import React, { useEffect, useRef, useState } from 'react'

export default function PlayerYouTube({ videoId, title }) {
  const [ready, setReady] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true)
        io.disconnect()
      }
    }, { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
      {ready ? (
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <button
          onClick={() => setReady(true)}
          className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label={`Cargar video de YouTube: ${title}`}
        >
          <span className="text-center">
            <span className="block text-sm">Cargar video</span>
          </span>
        </button>
      )}
    </div>
  )
}
