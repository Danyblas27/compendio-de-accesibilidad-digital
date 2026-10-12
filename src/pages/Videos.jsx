import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { videosCards } from '../data/cards.js'

export default function Videos() {
  return (
    <SubpageTemplate
      title="Videos"
      description="Colección audiovisual de sensibilización y buenas prácticas sobre accesibilidad universal y discapacidad."
      cards={videosCards}
      variant="video"
    />
  )
}
