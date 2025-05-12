import { NextResponse } from "next/server"

export async function GET() {
  // Información básica del sistema
  const healthInfo = {
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    nextVersion: process.env.NEXT_PUBLIC_VERSION || "unknown",
  }

  // Verificar que las rutas principales estén disponibles
  const routes = [
    { path: "/", name: "Home" },
    { path: "/que-es-ia", name: "Qué es IA" },
    { path: "/casos-uso", name: "Casos de Uso" },
    { path: "/chatbot", name: "Chatbot" },
    { path: "/contacto", name: "Contacto" },
  ]

  return NextResponse.json({
    ...healthInfo,
    routes,
    message: "El servidor está funcionando correctamente",
  })
}
