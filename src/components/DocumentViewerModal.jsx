import { useEffect } from 'react'
import { getKindBadgeClasses } from '../utils/kindColors.js'

export default function DocumentViewerModal({ document, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    // Evitar scroll en el fondo mientras el modal está activo
    const originalOverflow = window.document.body.style.overflow
    window.document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.document.body.style.overflow = originalOverflow
    }
  }, [onClose])

  if (!document) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-main/80 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="doc-modal-title"
    >
      <div
        className="w-full max-w-5xl h-[92vh] bg-surface rounded-xl shadow-2xl flex flex-col overflow-hidden border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior del visor */}
        <div className="px-4 sm:px-6 py-3.5 bg-surface border-b border-border flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            {document.kind && (
              <span
                className={`shrink-0 text-xs font-bold px-2.5 py-0.5 rounded-full border ${getKindBadgeClasses(
                  document.kind
                )}`}
              >
                {document.kind}
              </span>
            )}
            <h2
              id="doc-modal-title"
              className="text-base sm:text-lg font-bold text-main truncate"
              title={document.title}
            >
              {document.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
            {document.downloadUrl && (
              <a
                href={document.downloadUrl}
                download={document.downloadName || undefined}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md bg-interactive text-white hover:bg-interactive-hover transition-colors shadow-xs"
              >
                Descargar {document.kind || 'archivo original'}
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md bg-app text-secondary hover:text-main hover:bg-border/60 transition-colors border border-border"
              aria-label="Cerrar visor de documento"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* Contenedor del documento (iframe) */}
        <div className="flex-1 w-full bg-[#525659] relative">
          <iframe
            src={document.previewUrl}
            title={`Visualizador del documento ${document.title}`}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  )
}
