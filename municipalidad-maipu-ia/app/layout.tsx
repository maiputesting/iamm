import type React from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"

export const metadata = {
  title: "Inteligencia Artificial - Municipalidad de Maipú",
  description: "Plataforma de Inteligencia Artificial de la Municipalidad de Maipú, Mendoza, Argentina",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="light">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <ChatWidget />
        </div>
      </body>
    </html>
  )
}
