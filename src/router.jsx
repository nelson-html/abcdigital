import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/shell/AppLayout'

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Module = lazy(() => import('./pages/module/Module'))
const Lesson = lazy(() => import('./pages/lesson/Lesson'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Suspense fallback={<div className="p-4">Cargando…</div>}><Home /></Suspense> },
      { path: 'acerca', element: <Suspense fallback={<div className="p-4">Cargando…</div>}><About /></Suspense> },
      { path: 'modulo/:id', element: <Suspense fallback={<div className="p-4">Cargando…</div>}><Module /></Suspense> },
      { path: 'modulo/:moduleId/leccion/:lessonId', element: <Suspense fallback={<div className="p-4">Cargando…</div>}><Lesson /></Suspense> }
    ]
  }
])

