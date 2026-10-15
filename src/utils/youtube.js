export function getYouTubeId(url) {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1)
    if (u.hostname.includes('youtube.com')) {
      return u.searchParams.get('v') || u.pathname.split('/').pop()
    }
  } catch {
    return null
  }
  return null
}

export const getEmbedUrl = (url) => {
  const id = getYouTubeId(url)
  // youtube-nocookie evita cookies de seguimiento hasta que se reproduce
  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&hl=es&cc_load_policy=1`
    : null
}

export const getThumbnail = (url) => {
  const id = getYouTubeId(url)
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null
}