import { useState } from 'react'
import PageHero from './PageHero.jsx'
import CardGrid from './CardGrid.jsx'
import DocumentViewerModal from './DocumentViewerModal.jsx'
import VideoViewerModal from './VideoViewerModal.jsx'

export default function SubpageTemplate({ title, description, cards, variant, filters }) {
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)

  // Una sola función de apertura: decide el visor según la variante de la página
  const handlePreview = (card) => {
    if (variant === 'video') setSelectedVideo(card)
    else setSelectedDoc(card)
  }

  return (
    <>
      <PageHero title={title} description={description} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {filters}
        {cards.length > 0 && (
          <p className="text-sm font-semibold text-secondary mb-5" role="status">
            {cards.length} {cards.length === 1 ? 'contenido disponible' : 'contenidos disponibles'}
          </p>
        )}
        <CardGrid
          cards={cards}
          variant={variant}
          label={title}
          onPreview={handlePreview}
        />
      </section>

      {selectedDoc && (
        <DocumentViewerModal
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}

      {selectedVideo && (
        <VideoViewerModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  )
}