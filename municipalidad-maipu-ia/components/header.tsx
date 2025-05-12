"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "¿Qué es IA?", href: "/que-es-ia" },
    { name: "Casos de Uso", href: "/casos-uso" },
    { name: "Hoja de Ruta", href: "/hoja-ruta" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-white/60"
          : "bg-maipu-blue text-white"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r border-maipu-blue/20">
              <div className="flex items-center space-x-2 mb-8 mt-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/logo-maipu.png"
                    alt="Logo Maipú"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-maipu-black">IA Municipalidad de Maipú</span>
              </div>
              <nav className="flex flex-col gap-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-maipu-blue ${
                      pathname === item.href ? "text-maipu-blue font-semibold" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/images/logo-maipu.png" alt="Logo Maipú" width={40} height={40} className="object-contain" />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block text-maipu-black">IA Municipalidad de Maipú</span>
            <span className="font-bold text-xl sm:hidden text-maipu-black">IA Maipú</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-maipu-orange relative group ${
                pathname === item.href
                  ? isScrolled
                    ? "text-maipu-blue font-semibold"
                    : "text-white font-semibold"
                  : isScrolled
                    ? "text-gray-600"
                    : "text-white/80"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-maipu-green transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? "w-full" : ""
                }`}
              ></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contacto">
            <Button className="hidden md:flex bg-maipu-green hover:bg-maipu-green/80 text-white shadow-md hover:shadow-lg transition-all">
              Contactar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
