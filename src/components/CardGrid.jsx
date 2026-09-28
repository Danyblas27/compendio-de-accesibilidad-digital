import ContentCard from './ContentCard.jsx'

export default function CardGrid({ cards, variant, label }) {
  return (
    <ul className="card-grid" aria-label={label}>
      {cards.map((card) => (
        <li key={card.id}>
          <ContentCard card={card} variant={variant} />
        </li>
      ))}
    </ul>
  )
}
