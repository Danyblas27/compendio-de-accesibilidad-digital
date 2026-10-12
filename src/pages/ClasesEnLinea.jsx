import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { clasesCards } from '../data/cards.js'

export default function ClasesEnLinea() {
  return (
    <SubpageTemplate
      title="Clases en línea"
      description="Ajustes, recomendaciones y herramientas para impartir sesiones virtuales inclusivas (Google Meet, Zoom, transcripción en tiempo real)."
      cards={clasesCards}
    />
  )
}
