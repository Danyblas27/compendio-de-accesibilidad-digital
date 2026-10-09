export default function ContentCard({ card, variant = 'default' }) {
  return (
    <article className="relative bg-surface border border-border rounded-lg shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col h-full overflow-hidden group">
      {variant === 'video' && (
        <div className="aspect-video bg-[#E2E8F0] flex items-center justify-center border-b border-border" aria-hidden="true">
          <span className="w-12 h-12 rounded-full bg-interactive text-white flex items-center justify-center text-sm shadow-md group-hover:bg-interactive-hover group-hover:scale-105 transition-all">
            ▶
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        {card.kind && (
          <span className="inline-block self-start text-xs font-bold text-interactive bg-interactive-tint px-2.5 py-0.5 rounded-full border border-[#BCE1E8]">
            {card.kind}
          </span>
        )}
        <h3 className="text-lg font-bold text-main leading-snug group-hover:text-interactive transition-colors">
          <a
            href={card.href}
            className="after:absolute after:inset-0 text-main group-hover:text-interactive focus:text-interactive"
          >
            {card.title}
          </a>
        </h3>
        <p className="text-sm text-secondary leading-relaxed">
          {card.description}
        </p>
        {card.meta && (
          <p className="mt-auto pt-2 text-xs font-semibold text-secondary">
            {card.meta}
          </p>
        )}
      </div>
    </article>
  )
}
