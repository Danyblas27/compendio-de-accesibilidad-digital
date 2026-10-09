import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { videosCards } from '../data/cards.js'

export default function VideosRecapacita() {
  return (
    <SubpageTemplate
      title="Videos Recapacita"
      description="Colección audiovisual de sensibilización y buenas prácticas sobre accesibilidad universal y discapacidad."
      cards={videosCards}
      variant="video"
    />
  )
}
