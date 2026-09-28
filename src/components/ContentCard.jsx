export default function ContentCard({ card, variant = 'default' }) {
  return (
    <article className={`card card-${variant}`}>
      {variant === 'video' && (
        <div className="card-thumb" aria-hidden="true">
          <span className="play">▶</span>
        </div>
      )}
      <div className="card-body">
        <p className="card-kind">{card.kind}</p>
        <h3 className="card-title">
          <a href={card.href}>{card.title}</a>
        </h3>
        <p className="card-text">{card.description}</p>
        <p className="card-meta">{card.meta}</p>
      </div>
    </article>
  )
}
