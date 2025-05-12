import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-maipu-blue text-white">
      {/* Imagen a todo el ancho optimizada para visualización completa */}
      <div className="w-full bg-[#00AEEF] flex justify-center items-center">
        <div className="w-full max-w-[1920px] h-auto relative">
          <Image
            src="/images/MaipuMunicipio_blue_socials.png"
            alt="Municipalidad de Maipú"
            width={1536}
            height={256}
            className="w-full h-auto object-contain"
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* Enlaces rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-sm">
          <div>
            <h3 className="font-semibold text-base mb-3 text-maipu-green">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/que-es-ia"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  ¿Qué es IA?
                </Link>
              </li>
              <li>
                <Link
                  href="/casos-uso"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Casos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/hoja-ruta"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Hoja de Ruta
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-3 text-maipu-blue">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Glosario de IA
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Publicaciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-3 text-maipu-orange">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Accesibilidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-maipu-green rounded-full mr-2"></span>
                  Transparencia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-4 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-xs mb-2 md:mb-0">
              © {new Date().getFullYear()} Municipalidad de Maipú, Mendoza, Argentina. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/MaipuMunicipio/"
                target="_blank"
                className="text-maipu-green hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/MaipuMunicipio"
                target="_blank"
                className="text-maipu-blue hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/maipumunicipio/"
                target="_blank"
                className="text-maipu-green hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/municipalidad-de-maipu/"
                target="_blank"
                className="text-maipu-blue hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <p className="mt-2 text-maipu-green/80 text-xs text-center md:text-right">
            Desarrollado por Equipo de Informática | v1.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
