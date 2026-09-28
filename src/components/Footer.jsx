import { Link } from 'react-router-dom'
import { sections } from '../data/sections.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Compendio A11y. Contenido de ejemplo.</p>
        <nav aria-label="Pie de página">
          <ul className="footer-list">
            <li><Link to="/">Inicio</Link></li>
            {sections.map((s) => (
              <li key={s.path}><Link to={s.path}>{s.short}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
