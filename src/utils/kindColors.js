// Retorna clases de Tailwind accesibles (contrastes certificados AAA/AA) para las etiquetas de tipo de documento
export function getKindBadgeClasses(kind) {
  const normalized = (kind || '').trim().toLowerCase()

  if (normalized.includes('word')) {
    // Azul para Word
    return 'bg-[#EBF5FF] text-[#1E40AF] border-[#BFDBFE]'
  }

  if (
    normalized.includes('powerpoint') ||
    normalized.includes('pptx') ||
    normalized.includes('pptm') ||
    normalized.includes('ppt')
  ) {
    // Naranja para PowerPoint / PPTX
    return 'bg-[#FFF7ED] text-[#9A3412] border-[#FED7AA]'
  }

  if (normalized.includes('pdf')) {
    // Rojo para PDF
    return 'bg-[#FEF2F2] text-[#991B1B] border-[#FECACA]'
  }

  if (
    normalized.includes('excel') ||
    normalized.includes('xlsx') ||
    normalized.includes('xls')
  ) {
    // Verde para Excel
    return 'bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]'
  }

  // Gris para los demás
  return 'bg-[#F1F5F9] text-[#334155] border-[#CBD5E1]'
}
