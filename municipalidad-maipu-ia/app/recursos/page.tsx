import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Download,
  Video,
  Book,
  FileCode,
  Users,
  Calendar,
  Search,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Recursos | Maipú IA",
  description:
    "Accede a guías, documentos, tutoriales y otros recursos sobre la iniciativa de Inteligencia Artificial de la Municipalidad de Maipú.",
}

export default function RecursosPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
            Centro de Recursos
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explora nuestra colección de recursos educativos, técnicos y prácticos sobre inteligencia artificial y su
            aplicación en la gestión municipal.
          </p>
        </div>

        <div className="mb-10">
          <div className="relative max-w-2xl mx-auto">
            <Input type="text" placeholder="Buscar recursos..." className="pl-10 py-6 text-base" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#00AEEF] hover:bg-[#00AEEF]/90">
              Buscar
            </Button>
          </div>
        </div>

        <Tabs defaultValue="documentos" className="w-full mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="documentos" className="text-xs md:text-sm">
              <FileText className="h-4 w-4 mr-2 hidden md:inline" />
              Documentos
            </TabsTrigger>
            <TabsTrigger value="tutoriales" className="text-xs md:text-sm">
              <Video className="h-4 w-4 mr-2 hidden md:inline" />
              Tutoriales
            </TabsTrigger>
            <TabsTrigger value="eventos" className="text-xs md:text-sm">
              <Calendar className="h-4 w-4 mr-2 hidden md:inline" />
              Eventos
            </TabsTrigger>
            <TabsTrigger value="biblioteca" className="text-xs md:text-sm">
              <Book className="h-4 w-4 mr-2 hidden md:inline" />
              Biblioteca
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documentos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Plan Estratégico de IA Municipal"
                description="Documento que detalla la visión, objetivos y hoja de ruta para la implementación de IA en la municipalidad."
                type="PDF"
                category="Estrategia"
                icon={<FileText className="h-10 w-10 text-[#00AEEF]" />}
                link="#"
              />
              <ResourceCard
                title="Guía Ciudadana de Servicios IA"
                description="Manual práctico para ciudadanos sobre cómo utilizar los servicios municipales potenciados por IA."
                type="PDF"
                category="Guía"
                icon={<Users className="h-10 w-10 text-[#F7931E]" />}
                link="#"
              />
              <ResourceCard
                title="Informe de Impacto 2024"
                description="Análisis detallado del impacto de las iniciativas de IA en la eficiencia municipal y satisfacción ciudadana."
                type="PDF"
                category="Informe"
                icon={<FileText className="h-10 w-10 text-[#00AEEF]" />}
                link="#"
              />
              <ResourceCard
                title="Especificaciones Técnicas"
                description="Documentación técnica sobre la arquitectura, tecnologías y estándares utilizados en nuestras soluciones de IA."
                type="PDF"
                category="Técnico"
                icon={<FileCode className="h-10 w-10 text-[#F7931E]" />}
                link="#"
              />
              <ResourceCard
                title="Política de Privacidad y Datos"
                description="Documento que detalla cómo se recopilan, procesan y protegen los datos en nuestros sistemas de IA."
                type="PDF"
                category="Legal"
                icon={<FileText className="h-10 w-10 text-[#00AEEF]" />}
                link="#"
              />
              <ResourceCard
                title="Casos de Éxito"
                description="Recopilación de casos de éxito en la implementación de IA en diferentes áreas municipales."
                type="PDF"
                category="Casos"
                icon={<Award className="h-10 w-10 text-[#F7931E]" />}
                link="#"
              />
            </div>
          </TabsContent>

          <TabsContent value="tutoriales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TutorialCard
                title="Cómo utilizar el chatbot municipal"
                description="Aprende a sacar el máximo provecho del asistente virtual para realizar consultas y trámites."
                duration="5:30"
                level="Principiante"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <TutorialCard
                title="Trámites digitales paso a paso"
                description="Guía completa para realizar trámites municipales a través de nuestra plataforma digital."
                duration="8:45"
                level="Intermedio"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <TutorialCard
                title="Consulta de expedientes online"
                description="Aprende a consultar el estado de tus expedientes y solicitudes a través del sistema digital."
                duration="4:20"
                level="Principiante"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <TutorialCard
                title="Uso del portal de datos abiertos"
                description="Descubre cómo acceder y utilizar los datos abiertos municipales para análisis e investigación."
                duration="12:15"
                level="Avanzado"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
            </div>

            <div className="mt-8 text-center">
              <Link href="#">
                <Button variant="outline" className="border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF]/10">
                  Ver todos los tutoriales <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="eventos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EventCard
                title="Hackathon Municipal 2025"
                description="Competencia de desarrollo de soluciones innovadoras para desafíos municipales utilizando IA."
                date="15-16 Mayo, 2025"
                location="Centro Cultural Maipú"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <EventCard
                title="Seminario: IA y Gobierno Local"
                description="Expertos nacionales e internacionales discuten sobre el futuro de la IA en gobiernos locales."
                date="23 Junio, 2025"
                location="Auditorio Municipal"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <EventCard
                title="Taller: Ciudadanía Digital"
                description="Taller práctico sobre herramientas digitales para participación ciudadana y acceso a servicios."
                date="10 Julio, 2025"
                location="Biblioteca Municipal"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
              <EventCard
                title="Foro Abierto: IA y Comunidad"
                description="Espacio de diálogo entre autoridades y ciudadanos sobre el impacto de la IA en la comunidad."
                date="5 Agosto, 2025"
                location="Plaza Central"
                thumbnail="/placeholder.svg?height=200&width=400"
                link="#"
              />
            </div>

            <div className="mt-8 text-center">
              <Link href="#">
                <Button variant="outline" className="border-[#F7931E] text-[#F7931E] hover:bg-[#F7931E]/10">
                  Ver calendario completo <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="biblioteca">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#00AEEF]">Publicaciones Destacadas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PublicationCard
                  title="Inteligencia Artificial en Gobiernos Locales"
                  author="Dr. Carlos Méndez"
                  year="2024"
                  description="Análisis exhaustivo sobre la implementación de IA en municipios latinoamericanos."
                  link="#"
                />
                <PublicationCard
                  title="Transformación Digital Municipal"
                  author="Dra. María González"
                  year="2023"
                  description="Estudio de caso sobre la transformación digital en administraciones públicas locales."
                  link="#"
                />
                <PublicationCard
                  title="Ética y Gobernanza de Datos"
                  author="Prof. Juan Martínez"
                  year="2024"
                  description="Marco ético para la gestión de datos ciudadanos en entornos municipales."
                  link="#"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#F7931E]">Artículos Técnicos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ArticleCard
                  title="Arquitectura de Microservicios para Gobiernos Digitales"
                  source="Revista Tecnología & Gobierno"
                  date="Marzo 2025"
                  tags={["Arquitectura", "Microservicios", "Gobierno Digital"]}
                  link="#"
                />
                <ArticleCard
                  title="Implementación de Chatbots en Servicios Públicos"
                  source="Journal of AI in Public Administration"
                  date="Enero 2025"
                  tags={["Chatbots", "NLP", "Servicios Públicos"]}
                  link="#"
                />
                <ArticleCard
                  title="Análisis Predictivo para Gestión Municipal"
                  source="Data Science Review"
                  date="Febrero 2025"
                  tags={["Análisis Predictivo", "Machine Learning", "Gestión Municipal"]}
                  link="#"
                />
                <ArticleCard
                  title="Seguridad y Privacidad en Sistemas Municipales de IA"
                  source="Cybersecurity Today"
                  date="Abril 2025"
                  tags={["Seguridad", "Privacidad", "Cumplimiento"]}
                  link="#"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="#">
                <Button className="bg-[#00AEEF] hover:bg-[#00AEEF]/90">
                  Explorar biblioteca completa <BookOpen className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard
            title="Recursos Educativos"
            description="Material didáctico sobre IA y tecnología para estudiantes y docentes."
            icon={<GraduationCap className="h-12 w-12 text-[#00AEEF]" />}
            link="#"
          />
          <FeatureCard
            title="Innovación Abierta"
            description="Participa en nuestros desafíos de innovación y hackathons municipales."
            icon={<Lightbulb className="h-12 w-12 text-[#F7931E]" />}
            link="#"
          />
          <FeatureCard
            title="Datos Abiertos"
            description="Accede a nuestros conjuntos de datos abiertos para investigación y desarrollo."
            icon={<Database className="h-12 w-12 text-[#00AEEF]" />}
            link="#"
          />
        </div>

        <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#F7931E]/10 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#00AEEF]">Boletín Informativo</h2>
              <p className="text-gray-700 mb-6">
                Suscríbete a nuestro boletín mensual para recibir las últimas novedades, recursos y eventos relacionados
                con la iniciativa Maipú IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Tu correo electrónico" className="flex-grow" />
                <Button className="bg-[#F7931E] hover:bg-[#F7931E]/90 whitespace-nowrap">Suscribirse</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Boletín informativo"
                width={400}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F7931E]">¿No encuentras lo que buscas?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Si necesitas recursos específicos o tienes alguna consulta, no dudes en contactar con nuestro equipo.
          </p>
          <Link
            href="/contacto"
            className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
          >
            Contactar al equipo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

function ResourceCard({
  title,
  description,
  type,
  category,
  icon,
  link,
}: {
  title: string
  description: string
  type: string
  category: string
  icon: React.ReactNode
  link: string
}) {
  return (
    <Card className="border-2 border-gray-100 hover:border-[#00AEEF]/30 transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-gray-50 p-2 rounded-lg">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex gap-2 mt-1">
            <Badge variant="outline" className="bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/30">
              {type}
            </Badge>
            <Badge variant="outline" className="bg-[#F7931E]/10 text-[#F7931E] border-[#F7931E]/30">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 mb-4 text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-[#00AEEF] hover:text-[#00AEEF]/80 font-medium flex items-center">
          Descargar <Download className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

function TutorialCard({
  title,
  description,
  duration,
  level,
  thumbnail,
  link,
}: {
  title: string
  description: string
  duration: string
  level: string
  thumbnail: string
  link: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">{duration}</div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <Badge
          variant="outline"
          className={`
          ${
            level === "Principiante"
              ? "bg-green-100 text-green-800 border-green-300"
              : level === "Intermedio"
                ? "bg-blue-100 text-blue-800 border-blue-300"
                : "bg-purple-100 text-purple-800 border-purple-300"
          }
          inline-flex w-fit
        `}
        >
          {level}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-[#F7931E] hover:text-[#F7931E]/80 font-medium flex items-center">
          Ver tutorial <Video className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

function EventCard({
  title,
  description,
  date,
  location,
  thumbnail,
  link,
}: {
  title: string
  description: string
  date: string
  location: string
  thumbnail: string
  link: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-[#F7931E] text-white px-3 py-1 rounded-full text-sm font-medium">
          {date}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-[#00AEEF] hover:text-[#00AEEF]/80 font-medium flex items-center">
          Más información <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

function PublicationCard({ title, author, year, description, link }: {
  title: string;
  author: string;
  year: string;
  description:\
