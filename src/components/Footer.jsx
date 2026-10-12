import { Link } from 'react-router-dom'
import { sections } from '../data/sections.js'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center items-center text-sm text-secondary">
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <li>
              <Link
                to="/"
                className="text-interactive hover:text-interactive-dark font-medium underline-offset-4 hover:underline"
              >
                Inicio
              </Link>
            </li>
            {sections.map((s) => (
              <li key={s.path}>
                <Link
                  to={s.path}
                  className="text-interactive hover:text-interactive-dark font-medium underline-offset-4 hover:underline"
                >
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
