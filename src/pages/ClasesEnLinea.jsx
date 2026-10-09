import { useState, useMemo } from 'react'
import SubpageTemplate from '../components/SubpageTemplate.jsx'
import FilterTabs from '../components/FilterTabs.jsx'
import { clasesCards } from '../data/cards.js'

const clasesFilters = ['Subtítulos', 'Meet', 'Zoom', 'Grabaciones', 'Por clasificar']

export default function ClasesEnLinea() {
  const [filter, setFilter] = useState(null)

  const cards = useMemo(
    () => (filter ? clasesCards.filter((c) => c.kind === filter) : clasesCards),
    [filter]
  )

  return (
    <SubpageTemplate
      title="Clases en línea"
      description="Ajustes, recomendaciones y herramientas para impartir sesiones virtuales inclusivas (Google Meet, Zoom, transcripción en tiempo real)."
      cards={cards}
      filters={
        <FilterTabs
          label="Filtrar por herramienta o temática"
          options={clasesFilters}
          active={filter}
          onChange={setFilter}
        />
      }
    />
  )
}
