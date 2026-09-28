import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { sections } from '../data/sections.js'
import { variantes, tecnologias, videosCurados } from '../data/home.js'

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Compendio técnico"
        title="Entendiendo la discapacidad"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una introducción para conocer las discapacidades, las tecnologías de asistencia y los recursos disponibles."
        breadcrumb={false}
      />

      {/* 1. Qué son las discapacidades */}
      <section className="container section" aria-labelledby="h-que-son">
        <div className="two-col">
          <div>
            <h2 id="h-que-son">¿Qué son las discapacidades?</h2>
          </div>
          <div className="prose">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>

      {/* 2. Variantes */}
      <section className="container section" aria-labelledby="h-variantes">
        <h2 id="h-variantes">Variantes</h2>
        <ul className="info-grid">
          {variantes.map((v) => (
            <li key={v.title} className="info-card">
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Tecnologías de asistencia y enlaces de apoyo */}
      <section className="container section" aria-labelledby="h-tecnologias">
        <h2 id="h-tecnologias">Tecnologías de asistencia y apoyos</h2>
        <ul className="info-grid info-grid-2">
          {tecnologias.map((t) => (
            <li key={t.title} className="info-card">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <a
                className="text-link"
                href={t.href}
                {...(t.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {t.link}
                {t.href.startsWith('http') && <span className="visually-hidden"> (se abre en una pestaña nueva)</span>}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Recursos: videos curados */}
      <section className="container section" aria-labelledby="h-recursos">
        <h2 id="h-recursos">Recursos: videos curados</h2>
        <ul className="card-grid card-grid-4">
          {videosCurados.map((v) => (
            <li key={v.id}>
              <article className="card card-video">
                <div className="card-thumb" aria-hidden="true"><span className="play">▶</span></div>
                <div className="card-body">
                  <h3 className="card-title"><a href={v.href}>{v.title}</a></h3>
                  <p className="card-text">{v.text}</p>
                  <p className="card-meta">{v.duration}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Acceso a subpáginas */}
      <section className="container section" aria-labelledby="h-explora">
        <h2 id="h-explora">Explora el compendio</h2>
        <ul className="info-grid info-grid-2">
          {sections.map((s) => (
            <li key={s.path} className="info-card">
              <h3><Link to={s.path}>{s.title}</Link></h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
