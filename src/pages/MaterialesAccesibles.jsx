import { useMemo, useState } from 'react'
import SubpageTemplate from '../components/SubpageTemplate.jsx'
import FilterTabs from '../components/FilterTabs.jsx'
import { materialesCards, materialesFilters } from '../data/cards.js'

export default function MaterialesAccesibles() {
  const [filter, setFilter] = useState(null)

  const cards = useMemo(
    () => (filter ? materialesCards.filter((c) => c.kind === filter) : materialesCards),
    [filter]
  )

  return (
    <SubpageTemplate
      title="Cómo hacer materiales accesibles"
      description="Tutoriales para crear documentos de Word, presentaciones, videos, PDF y páginas web accesibles."
      cards={cards}
      filters={
        <FilterTabs
          label="Filtrar por tipo de material"
          options={materialesFilters}
          active={filter}
          onChange={setFilter}
        />
      }
    />
  )
}
