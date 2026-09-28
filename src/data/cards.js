// Genera tarjetas de contenido genéricas. Se reemplaza por datos reales más adelante.
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export function makeCards({ count = 25, prefix, kinds, duration = false }) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, '0')
    const kind = kinds[i % kinds.length]
    return {
      id: `${prefix}-${n}`,
      title: `Título del contenido ${n}`,
      description: lorem,
      kind,
      meta: duration ? `${5 + (i % 12)} min` : `${3 + (i % 9)} min de lectura`,
      href: '#',
    }
  })
}

export const materialesFilters = [
  'Word',
  'PowerPoint',
  'Video',
  'PDF',
  'Página web',
  'EDICO',
]

export const materialesCards = makeCards({
  prefix: 'mat',
  kinds: materialesFilters,
})

export const clasesCards = makeCards({
  prefix: 'cla',
  kinds: ['Subtítulos', 'Meet', 'Zoom', 'Grabaciones', 'Por clasificar'],
})

export const videosCards = makeCards({
  prefix: 'vid',
  kinds: ['Recapacita'],
  duration: true,
})

export const aulaCards = makeCards({
  prefix: 'aul',
  kinds: ['Estrategia', 'Apoyo', 'Recurso'],
})
