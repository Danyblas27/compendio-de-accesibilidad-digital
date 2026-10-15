// components/VideoViewerModal.jsx
import { useEffect, useRef } from 'react'
import { getEmbedUrl } from '../utils/youtube'

export default function VideoViewerModal({ video, onClose }) {
  const closeBtnRef = useRef(null)
  const embedUrl = video ? getEmbedUrl(video.webUrl) : null

  useEffect(() => {
    if (!video) return

    const previouslyFocused = document.activeElement
    closeBtnRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden' // bloquea el scroll del fondo

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus() // devuelve el foco a la card
    }
  }, [video, onClose])

  if (!video || !embedUrl) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-4">
          <h2 id="video-modal-title" className="text-lg font-semibold text-gray-900">
            {video.title}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar video"
            className="rounded-md p-1 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="aspect-video w-full bg-black">
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        <p className="p-4 text-sm text-gray-600">{video.description}</p>
      </div>
    </div>
  )
}