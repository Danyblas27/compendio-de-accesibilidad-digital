import ContentCard from './ContentCard.jsx'

export default function CardGrid({ cards, variant, label, onPreview }) {
  if (!cards || cards.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-surface border border-dashed border-border rounded-xl text-secondary">
        <p className="text-base font-bold text-main">Próximamente más contenidos</p>
        <p className="text-sm text-secondary mt-1">Esta sección se encuentra en preparación y pronto contará con nuevos materiales.</p>
      </div>
    )
  }

  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0"
      aria-label={label}
    >
      {cards.map((card) => (
        <li key={card.id} className="flex">
          <ContentCard card={card} variant={variant} onPreview={onPreview} />
        </li>
      ))}
    </ul>
  )
}
