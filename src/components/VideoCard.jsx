// components/VideoCard.jsx
import { getThumbnail } from '../utils/youtube'

export default function VideoCard({ video, onPlay }) {
  const thumb = getThumbnail(video.webUrl)

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      aria-label={`Reproducir video: ${video.title}. ${video.meta}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      <div className="relative aspect-video w-full bg-gray-200">
        {thumb && (
          <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover" />
        )}
        {/* Botón play superpuesto */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow">
            <svg className="ml-1 h-7 w-7 text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{video.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{video.description}</p>
        <p className="mt-2 text-xs text-gray-500">{video.meta}</p>
      </div>
    </button>
  )
}