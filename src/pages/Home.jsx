import PageHero from '../components/PageHero.jsx'
import { variantes, tecnologias } from '../data/home.js'

export default function Home() {
  return (
    <>
      <PageHero
        title="Entendiendo la discapacidad"
        description="Guía práctica y estructurada para conocer los tipos de discapacidad, las tecnologías de asistencia y las pautas de accesibilidad digital conforme a WCAG."
        breadcrumb={false}
      />

      {/* 1. Qué son las discapacidades */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-b border-border" aria-labelledby="h-que-son">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 id="h-que-son" className="text-2xl sm:text-3xl font-extrabold text-main">
              ¿Qué son las discapacidades?
            </h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-main leading-relaxed text-base">
            <p>
              La discapacidad resulta de la interacción entre las características personales y las barreras del entorno físico y digital que impiden la participación plena y efectiva en igualdad de condiciones con los demás.
            </p>
            <p className="text-secondary">
              Diseñar productos accesibles no solo beneficia a personas con discapacidades permanentes, sino también a quienes experimentan limitaciones temporales o situacionales (como entornos ruidosos o iluminación excesiva).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tipos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-b border-border" aria-labelledby="h-tipos">
        <h2 id="h-tipos" className="text-2xl sm:text-3xl font-extrabold text-main mb-6">
          Tipos
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
          {variantes.map((v) => (
            <li
              key={v.title}
              className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold text-main mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Tecnologías de asistencia */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12" aria-labelledby="h-tecnologias">
        <h2 id="h-tecnologias" className="text-2xl sm:text-3xl font-extrabold text-main mb-6">
          Tecnologías de asistencia
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
          {tecnologias.map((t) => (
            <li
              key={t.title}
              className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold text-main mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {t.text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
