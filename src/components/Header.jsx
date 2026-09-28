import { NavLink, Link } from 'react-router-dom'
import { sections } from '../data/sections.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Compendio A11y, ir al inicio">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-text">
            Compendio A11y
            <small>Accesibilidad web · Guía</small>
          </span>
        </Link>

        <nav aria-label="Principal">
          <ul className="nav-list">
            <li>
              <NavLink to="/" end>Inicio</NavLink>
            </li>
            {sections.map((s) => (
              <li key={s.path}>
                <NavLink to={s.path}>{s.short}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
