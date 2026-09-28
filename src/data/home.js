export const variantes = [
  { title: 'Discapacidad visual', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { title: 'Discapacidad auditiva', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
  { title: 'Discapacidad motriz', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  { title: 'Discapacidad intelectual', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
  { title: 'Discapacidad psicosocial', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' },
  { title: 'Neurodivergencias', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
]

export const tecnologias = [
  { title: 'NVDA', text: 'Lector de pantalla gratuito. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', href: 'https://www.nvaccess.org', link: 'Sitio oficial de NVDA' },
  { title: 'Ampliadores de pantalla', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', href: '#', link: 'Más información' },
  { title: 'Subtitulado y transcripción', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', href: '#', link: 'Más información' },
  { title: 'Control por voz y teclado', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.', href: '#', link: 'Más información' },
]

export const videosCurados = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  title: `Video curado ${String(i + 1).padStart(2, '0')}`,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  duration: `${6 + i * 3} min`,
  href: '#',
}))
