import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { clasesCards } from '../data/cards.js'

export default function ClasesEnLinea() {
  return (
    <SubpageTemplate
      title="Clases en línea"
      description="Ajustes y herramientas para clases virtuales"
      cards={clasesCards}
    />
  )
}
