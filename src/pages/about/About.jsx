import React from 'react'

const team = [
  {
    name: 'Nelson Ruiz',
    role: '',
    photo: '/public/assets/nelsonruiz.avif',
    bio: ''
  },
  {
    name: 'José Aguirre',
    role: '',
    photo: '/ruta/o/url/de/la-foto2.jpg',
    bio: ''
  },
  {
    name: 'Nelson Salgado',
    role: '',
    photo: '/public/assets/Nelson Salgado.jpg',
    bio: ''
  }
]

export default function About() {
  return (
    <section className="mx-auto flex flex-col max-w-6xl w-full space-y-8 animate-fade-in">
      {/* Header con el mismo estilo que Home */}
      <header className="w-full">
        <div className="w-full px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight max-w-3xl">
            Sobre la plataforma
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            Una plataforma gratuita de alfabetización digital pensada para acompañar, paso a paso, a quienes quieren
            aprender a usar la tecnología desde cero.
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="grid gap-8 px-6 pb-6 md:grid-cols-2">
        {/* Misión / propósito */}
        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Nuestra misión
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            La plataforma nace con el objetivo de reducir la brecha digital, ofreciendo recursos simples,
            claros y guiados para que cualquier persona pueda desarrollar habilidades digitales básicas:
            desde usar un celular y una computadora, hasta navegar con seguridad, comunicarse por internet
            y aprovechar herramientas de productividad.
          </p>
          <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
            Está pensada para personas adultas mayores, jóvenes y personas adultas que han tenido poco o
            ningún contacto con la tecnología, y que necesitan aprender a su ritmo, sin presiones y con
            explicaciones paso a paso.
          </p>
        </article>

        {/* A quién va dirigida / cómo funciona */}
        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            ¿A quién va dirigida?
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
            La plataforma está diseñada especialmente para:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
            <li>Personas de tercera edad que quieren aprender a usar su celular o computadora.</li>
            <li>Jóvenes y personas adultas que no han tenido acceso a formación en tecnología.</li>
            <li>Personas que necesitan una guía muy clara, con lenguaje sencillo y ejemplos prácticos.</li>
          </ul>
          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            Los contenidos están organizados en módulos cortos, con explicaciones paso a paso y actividades
            prácticas para que cada persona pueda avanzar poco a poco, repasar cuando lo necesite y aprender
            sin miedo a equivocarse.
          </p>
        </article>
      </div>

      {/* Valores / enfoque */}
      <div className="px-6 pb-4">
        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Nuestro enfoque
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Creemos que aprender tecnología no tiene por qué ser complicado. Por eso, la plataforma:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1 mt-3">
            <li>Usa un lenguaje claro, sin tecnicismos innecesarios.</li>
            <li>Prioriza ejemplos de la vida diaria: comunicación con la familia, trámites básicos, información confiable.</li>
            <li>Ofrece un recorrido ordenado, desde lo más básico hasta tareas un poco más avanzadas.</li>
            <li>Está pensada para ser ligera y funcionar bien en conexiones de internet modestas.</li>
          </ul>
        </article>
      </div>

      {/* Equipo */}
      <section className="px-6 pb-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Nuestro equipo
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl">
          La plataforma fue creada por un pequeño equipo con experiencia en educación, tecnología e inclusión digital,
          con el compromiso de hacer que el aprendizaje de habilidades digitales sea accesible para todas las personas.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
        <article
            key={person.name}
            className="group relative animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
         >

          {/* Foto */}
          <div className="w-full flex justify-center mb-4">
          <img
          src={person.photo}
          alt={person.name}
          className="w-28 h-28 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
        />
        </div>

          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1 text-center">
          {person.role}
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-indigo-600 transition-colors duration-300">
          {person.name}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed text-center">
          {person.bio}
          </p>

        </article>
        ))}
    </div>
  </section>
</section>
  )
}
