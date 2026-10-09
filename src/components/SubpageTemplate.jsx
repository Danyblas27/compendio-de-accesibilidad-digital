import PageHero from './PageHero.jsx'
import CardGrid from './CardGrid.jsx'

// Plantilla común de las subpáginas: encabezado + (filtros opcionales) + cuadrícula de cards
export default function SubpageTemplate({ title, description, cards, variant, filters }) {
  return (
    <>
      <PageHero title={title} description={description} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {filters}
        <p className="text-sm font-semibold text-secondary mb-5" role="status">
          {cards.length} {cards.length === 1 ? 'contenido disponible' : 'contenidos disponibles'}
        </p>
        <CardGrid cards={cards} variant={variant} label={title} />
      </section>
    </>
  )
}
