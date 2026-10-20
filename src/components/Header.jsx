import { NavLink, Link } from 'react-router-dom'
import { sections } from '../data/sections.js'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-surface border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
        <Link
          to="/"
          className="text-main no-underline font-extrabold text-lg sm:text-xl tracking-tight hover:text-interactive transition-colors"
          aria-label="Accesibilidad Digital, ir al inicio"
        >
          Accesibilidad Digital
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 sm:gap-2 flex-wrap">
            {sections.map((s) => (
              <li key={s.path}>
                <NavLink
                  to={s.path}
                  className={({ isActive }) =>
                    `block px-3 py-1.5 text-sm font-bold rounded-full transition-colors ${
                      isActive
                        ? 'bg-focus text-white'
                        : 'text-secondary hover:text-main hover:bg-interactive-tint'
                    }`
                  }
                >
                  {s.short}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
