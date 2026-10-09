import { Link } from 'react-router-dom'

export default function PageHero({ title, description, eyebrow, breadcrumb = true }) {
  return (
    <section className="bg-surface border-b border-border py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {breadcrumb && (
          <nav aria-label="Ruta de navegación" className="mb-4 text-sm text-secondary">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link
                  to="/"
                  className="text-interactive hover:text-interactive-dark font-semibold underline-offset-4 hover:underline"
                >
                  Inicio
                </Link>
              </li>
              <li className="text-secondary select-none" aria-hidden="true">/</li>
              <li className="text-main font-bold" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-wider text-interactive mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-main leading-tight tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base sm:text-lg text-secondary max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
