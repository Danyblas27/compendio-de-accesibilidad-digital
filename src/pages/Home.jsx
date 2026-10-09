import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Alert from '../components/Alert.jsx'
import { sections } from '../data/sections.js'
import { variantes, tecnologias, videosCurados } from '../data/home.js'

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Compendio técnico"
        title="Entendiendo la discapacidad"
        description="Guía práctica y estructurada para conocer los tipos de discapacidad, las tecnologías de asistencia y las pautas de accesibilidad digital conforme a WCAG."
        breadcrumb={false}
      />

      {/* Alerta informativa inicial */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <Alert
          type="info"
          title="Pautas de Accesibilidad WCAG y Legibilidad"
        >
          Este compendio implementa la tipografía <strong>Inter</strong> y contrastes de color validados (nivel AAA) para asegurar una experiencia de lectura inclusiva y sin barreras.
        </Alert>
      </section>

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

      {/* 2. Variantes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-b border-border" aria-labelledby="h-variantes">
        <h2 id="h-variantes" className="text-2xl sm:text-3xl font-extrabold text-main mb-6">
          Variantes y tipos
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

      {/* 3. Tecnologías de asistencia y apoyos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-b border-border" aria-labelledby="h-tecnologias">
        <h2 id="h-tecnologias" className="text-2xl sm:text-3xl font-extrabold text-main mb-6">
          Tecnologías de asistencia y apoyos
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
          {tecnologias.map((t) => (
            <li
              key={t.title}
              className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-main mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-4">
                  {t.text}
                </p>
              </div>
              <a
                className="inline-flex items-center gap-1.5 text-sm font-bold text-interactive hover:text-interactive-dark underline-offset-4 hover:underline self-start"
                href={t.href}
                {...(t.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {t.link}
                {t.href.startsWith('http') && (
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                )}
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Recursos: videos curados */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-b border-border" aria-labelledby="h-recursos">
        <h2 id="h-recursos" className="text-2xl sm:text-3xl font-extrabold text-main mb-6">
          Recursos: videos recomendados
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
          {videosCurados.map((v) => (
            <li key={v.id} className="flex">
              <article className="relative bg-surface border border-border rounded-lg shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col w-full overflow-hidden group">
                <div className="aspect-video bg-[#E2E8F0] flex items-center justify-center border-b border-border" aria-hidden="true">
                  <span className="w-10 h-10 rounded-full bg-interactive text-white flex items-center justify-center text-xs shadow-md group-hover:bg-interactive-hover group-hover:scale-105 transition-all">
                    ▶
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-main leading-snug group-hover:text-interactive transition-colors">
                    <a href={v.href} className="after:absolute after:inset-0 text-main group-hover:text-interactive">
                      {v.title}
                    </a>
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {v.text}
                  </p>
                  <p className="mt-auto pt-2 text-xs font-semibold text-secondary">
                    {v.duration}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Componentes de estado y alertas contextuales */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 border-b border-border" aria-labelledby="h-alertas">
        <h2 id="h-alertas" className="text-2xl sm:text-3xl font-extrabold text-main mb-2">
          Componentes de estado y alertas contextuales
        </h2>
        <p className="text-secondary text-sm mb-6 max-w-2xl">
          Diseñadas bajo el criterio WCAG 1.4.1 (Uso del color), incorporando iconografía y contrastes certificados para máxima comprensión.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Alert type="success" title="Acción completada con éxito">
            El documento cumple con todos los estándares WCAG 2.2 nivel AAA.
          </Alert>

          <Alert type="info" title="Información relevante">
            Recuerda incluir subtítulos en transmisiones de video en vivo.
          </Alert>

          <Alert type="warning" title="Precaución requerida">
            El contraste de los elementos gráficos debe revisarse antes de publicar.
          </Alert>

          <Alert type="error" title="Error detectado">
            Se encontraron enlaces vacíos o imágenes sin atributo alt descriptivo.
          </Alert>
        </div>
      </section>

      {/* 6. Acceso a subpáginas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12" aria-labelledby="h-explora">
        <h2 id="h-explora" className="text-2xl sm:text-3xl font-extrabold text-main mb-6">
          Explora el compendio
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
          {sections.map((s) => (
            <li
              key={s.path}
              className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xl font-bold text-main mb-2 group-hover:text-interactive transition-colors">
                  <Link to={s.path} className="underline-offset-4 hover:underline">
                    {s.title}
                  </Link>
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="mt-4 pt-2">
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-1 text-sm font-bold text-interactive group-hover:text-interactive-dark"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  Acceder a la guía →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
