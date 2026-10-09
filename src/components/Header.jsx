import { NavLink, Link } from 'react-router-dom'
import { sections } from '../data/sections.js'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-surface border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
        <Link
          to="/"
          className="flex items-center gap-3 text-main no-underline rounded-md p-1 group"
          aria-label="Compendio A11y, ir al inicio"
        >
          <span
            className="w-9 h-9 rounded-full bg-interactive text-white font-bold flex items-center justify-center text-lg shadow-sm group-hover:bg-interactive-hover transition-colors"
            aria-hidden="true"
          >
            A
          </span>
          <span className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-main">
              Compendio A11y
            </span>
            <span className="text-xs text-secondary font-normal">
              Accesibilidad web · Guía
            </span>
          </span>
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block px-3 py-1.5 text-sm font-bold rounded-full transition-colors ${
                    isActive
                      ? 'bg-focus text-white'
                      : 'text-secondary hover:text-main hover:bg-interactive-tint'
                  }`
                }
              >
                Inicio
              </NavLink>
            </li>
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
