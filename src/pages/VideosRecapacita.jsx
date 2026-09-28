import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { videosCards } from '../data/cards.js'

export default function VideosRecapacita() {
  return (
    <SubpageTemplate
      title="Videos"
      description="Colección de videos"
      cards={videosCards}
      variant="video"
    />
  )
}
