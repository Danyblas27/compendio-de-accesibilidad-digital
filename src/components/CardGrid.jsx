import ContentCard from './ContentCard.jsx'

export default function CardGrid({ cards, variant, label }) {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0"
      aria-label={label}
    >
      {cards.map((card) => (
        <li key={card.id} className="flex">
          <ContentCard card={card} variant={variant} />
        </li>
      ))}
    </ul>
  )
}
