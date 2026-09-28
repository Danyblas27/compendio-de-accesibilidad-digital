import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { videosCards } from '../data/cards.js'

export default function VideosRecapacita() {
  return (
    <SubpageTemplate
      title="Videos Recapacita"
      description="Colección de videos de la serie Recapacita."
      cards={videosCards}
      variant="video"
    />
  )
}
