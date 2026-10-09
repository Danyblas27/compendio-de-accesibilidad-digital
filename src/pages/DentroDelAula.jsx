import { useState, useMemo } from 'react'
import SubpageTemplate from '../components/SubpageTemplate.jsx'
import FilterTabs from '../components/FilterTabs.jsx'
import { aulaCards } from '../data/cards.js'

const aulaFilters = ['Estrategia', 'Apoyo', 'Recurso']

export default function DentroDelAula() {
  const [filter, setFilter] = useState(null)

  const cards = useMemo(
    () => (filter ? aulaCards.filter((c) => c.kind === filter) : aulaCards),
    [filter]
  )

  return (
    <SubpageTemplate
      title="Dentro del aula"
      description="Estrategias metodológicas, adaptaciones razonables y apoyos didácticos para la práctica docente presencial."
      cards={cards}
      filters={
        <FilterTabs
          label="Filtrar por tipo de apoyo"
          options={aulaFilters}
          active={filter}
          onChange={setFilter}
        />
      }
    />
  )
}
