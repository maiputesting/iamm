/**
 * Genera un placeholder de color sólido para imágenes
 * @param hex Código de color hexadecimal (ej: "#00AEEF")
 * @returns Data URL para usar como placeholder
 */
export function generateColorPlaceholder(hex: string): string {
  // Eliminar el # si existe
  const sanitizedHex = hex.replace("#", "")

  // Crear un canvas pequeño de 4x4 píxeles
  const canvas = document.createElement("canvas")
  canvas.width = 4
  canvas.height = 4

  const ctx = canvas.getContext("2d")
  if (!ctx) return ""

  // Dibujar un rectángulo con el color especificado
  ctx.fillStyle = `#${sanitizedHex}`
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Convertir el canvas a data URL
  return canvas.toDataURL()
}

/**
 * Calcula el tamaño óptimo para imágenes basado en el viewport
 * @param containerWidth Ancho del contenedor en píxeles o porcentaje
 * @returns String para el atributo sizes de Next.js Image
 */
export function calculateImageSizes(containerWidth: string): string {
  // Si es un porcentaje, convertirlo a vw
  if (containerWidth.endsWith("%")) {
    const percentage = Number.parseInt(containerWidth)
    return `${percentage}vw`
  }

  // Si es un valor fijo en píxeles
  return containerWidth
}
