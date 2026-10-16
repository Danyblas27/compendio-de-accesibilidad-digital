import { useMemo, useState } from 'react'
import SubpageTemplate from '../components/SubpageTemplate.jsx'
import FilterTabs from '../components/FilterTabs.jsx'
import { videosCards, videosFilters } from '../data/cards.js'

export default function Videos() {
  const [filter, setFilter] = useState(null)

  const cards = useMemo(
    () => (filter ? videosCards.filter((c) => c.kind === filter) : videosCards),
    [filter]
  )

  return (
    <SubpageTemplate
      title="Videos"
      description="Colección audiovisual de sensibilización y buenas prácticas sobre accesibilidad universal y discapacidad."
      cards={cards}
      variant="video"
      filters={
        <FilterTabs
          label="Filtrar videos por tipo de discapacidad"
          options={videosFilters}
          active={filter}
          onChange={setFilter}
        />
      }
    />
  )
}