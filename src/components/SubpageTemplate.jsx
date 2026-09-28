import PageHero from './PageHero.jsx'
import CardGrid from './CardGrid.jsx'

// Plantilla común de las 4 subpáginas: encabezado + (filtros opcionales) + cuadrícula de cards
export default function SubpageTemplate({ title, description, cards, variant, filters }) {
  return (
    <>
      <PageHero title={title} description={description} />
      <section className="container section">
        {filters}
        <p className="result-count" role="status">
          {cards.length} {cards.length === 1 ? 'contenido' : 'contenidos'}
        </p>
        <CardGrid cards={cards} variant={variant} label={title} />
      </section>
    </>
  )
}
