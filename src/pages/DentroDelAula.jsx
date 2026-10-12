import SubpageTemplate from '../components/SubpageTemplate.jsx'
import { aulaCards } from '../data/cards.js'

export default function DentroDelAula() {
  return (
    <SubpageTemplate
      title="Dentro del aula"
      description="Estrategias metodológicas, adaptaciones razonables y apoyos didácticos para la práctica docente presencial."
      cards={aulaCards}
    />
  )
}
