import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public", "images")
  let images = []
  let missingImages = []

  // Lista de imágenes críticas que deben existir
  const criticalImages = ["MaipuMunicipio_blue_socials.png", "logo-maipu.png"]

  try {
    // Verificar si el directorio existe
    if (fs.existsSync(imagesDir)) {
      // Leer todos los archivos en el directorio de imágenes
      const files = fs.readdirSync(imagesDir)

      // Filtrar solo archivos de imagen
      images = files.filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"].includes(ext)
      })

      // Verificar imágenes críticas
      missingImages = criticalImages.filter((img) => !images.includes(img))
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: "El directorio de imágenes no existe",
          path: imagesDir,
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      status: missingImages.length === 0 ? "ok" : "warning",
      imagesFound: images.length,
      images,
      missingCriticalImages: missingImages,
      message:
        missingImages.length === 0 ? "Todas las imágenes críticas están presentes" : "Faltan algunas imágenes críticas",
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error al verificar las imágenes",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
