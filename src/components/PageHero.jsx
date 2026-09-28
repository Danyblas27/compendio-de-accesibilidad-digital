import { Link } from 'react-router-dom'

export default function PageHero({ title, description, eyebrow, breadcrumb = true }) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumb && (
          <nav aria-label="Ruta de navegación" className="breadcrumb">
            <ol>
              <li><Link to="/">Inicio</Link></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="lead">{description}</p>}
      </div>
    </section>
  )
}
