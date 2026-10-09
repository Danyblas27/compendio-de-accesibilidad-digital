import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Página no encontrada (404)"
        description="La dirección que buscas no existe o ha sido movida a otra ubicación."
        breadcrumb={false}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-interactive hover:bg-interactive-hover text-white font-bold transition-colors shadow-sm"
        >
          ← Volver a la página de inicio
        </Link>
      </section>
    </>
  )
}
