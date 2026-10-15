import { getKindBadgeClasses } from '../utils/kindColors.js'
import { getThumbnail } from '../utils/youtube.js'

export default function ContentCard({ card, variant = 'default', onPreview }) {
  const hasPreview = Boolean(card.previewUrl && onPreview)
  const isVideo = variant === 'video' && Boolean(card.webUrl && onPreview)
  const thumb = isVideo ? getThumbnail(card.webUrl) : null

  return (
    <article className="relative bg-surface border border-border rounded-lg shadow-sm hover:border-interactive hover:shadow-md transition-all flex flex-col h-full overflow-hidden group">
      {variant === 'video' && (
        <div
          className="relative aspect-video bg-[#E2E8F0] flex items-center justify-center border-b border-border overflow-hidden"
          aria-hidden="true"
        >
          {thumb && (
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          )}
          <span className="relative w-12 h-12 rounded-full bg-interactive text-white flex items-center justify-center shadow-md group-hover:bg-interactive-hover group-hover:scale-105 transition-all">
            <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col gap-2.5 flex-1">
        {card.kind && (
          <span
            className={`inline-block self-start text-xs font-bold px-2.5 py-0.5 rounded-full border ${getKindBadgeClasses(
              card.kind
            )}`}
          >
            {card.kind}
          </span>
        )}

        <h3 className="text-lg font-bold text-main leading-snug group-hover:text-interactive transition-colors">
          {isVideo ? (
            // Botón "estirado": el ::after cubre toda la card, así que todo el card es clicable
            <button
              type="button"
              onClick={() => onPreview(card)}
              aria-label={`Reproducir video: ${card.title}. ${card.meta ?? ''}`}
              className="text-left cursor-pointer after:absolute after:inset-0 after:rounded-lg focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-interactive focus-visible:after:ring-inset"
            >
              {card.title}
            </button>
          ) : hasPreview ? (
            card.title
          ) : (
            <a
              href={card.href}
              download={card.download || undefined}
              target={card.target || undefined}
              rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="after:absolute after:inset-0 text-main group-hover:text-interactive focus:text-interactive"
            >
              {card.title}
            </a>
          )}
        </h3>

        <p className="text-sm text-secondary leading-relaxed">
          {card.description}
        </p>

        {card.meta && (
          <p className="mt-auto pt-2 text-xs font-semibold text-secondary">
            {card.meta}
          </p>
        )}

        {hasPreview && (
          <div className="pt-3 border-t border-border/60 flex items-center gap-2.5 flex-wrap mt-2">
            <button
              type="button"
              onClick={() => onPreview(card)}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md bg-interactive text-white hover:bg-interactive-hover transition-colors shadow-xs cursor-pointer"
            >
              Ver en PDF
            </button>

            {card.downloadUrl && (
              <a
                href={card.downloadUrl}
                download={card.downloadName || undefined}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md bg-surface text-secondary hover:text-main hover:bg-interactive-tint border border-border transition-colors cursor-pointer"
              >
                Descargar {card.kind || 'documento'}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}