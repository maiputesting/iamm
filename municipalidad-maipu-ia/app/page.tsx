import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Brain,
  Clock,
  LineChart,
  Users,
  Code,
  Database,
  BotIcon as Robot,
  Lightbulb,
  FileText,
  CheckCircle,
  HelpCircle,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-maipu-blue/5 to-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-fixed"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-maipu-blue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-maipu-green/30 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-maipu-orange/10 px-3 py-1 text-sm text-maipu-orange shadow-sm">
                Innovación Municipal
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-maipu-blue via-maipu-green to-maipu-orange">
                Revolucionando Maipú con Inteligencia Artificial
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Optimización, automatización y eficiencia en cada proceso municipal, transformando la experiencia
                ciudadana con tecnología de vanguardia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/vision">
                  <Button className="bg-maipu-blue hover:bg-maipu-blue/80 text-white shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                    Conoce cómo funciona <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/casos-uso">
                  <Button
                    variant="outline"
                    className="border-maipu-green text-maipu-green hover:bg-maipu-green/5 transition-all w-full sm:w-auto"
                  >
                    Ver casos de uso
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[350px] w-full max-w-[500px] lg:h-[450px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-maipu-blue to-maipu-orange rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
              <Image
                src="/placeholder.svg?height=450&width=500"
                alt="Inteligencia Artificial en la Municipalidad"
                fill
                className="rounded-2xl object-cover shadow-soft z-10"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-maipu-orange/10 rounded-full flex items-center justify-center shadow-md z-20">
                <Brain className="h-12 w-12 text-maipu-orange" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/10 p-2">
                <Brain className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Beneficios de la IA en nuestra gestión
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La implementación de Inteligencia Artificial transforma radicalmente la forma en que servimos a nuestra
              comunidad, optimizando cada aspecto de la gestión municipal.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="bg-white border-maipu-blue/20 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-maipu-blue" />
                </div>
                <CardTitle className="text-xl text-maipu-black">Procesos Automatizados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Reducción de tiempos y errores humanos mediante workflows inteligentes que optimizan cada etapa del
                  proceso administrativo.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-maipu-orange/20 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-maipu-orange/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-maipu-orange" />
                </div>
                <CardTitle className="text-xl text-maipu-black">Optimización de Recursos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Asignación dinámica de personal y materiales con algoritmos de ML que predicen necesidades y maximizan
                  la eficiencia operativa.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-maipu-green/20 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-maipu-green/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-maipu-green" />
                </div>
                <CardTitle className="text-xl text-maipu-black">Atención Ciudadana 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  Chatbot y asistentes virtuales que responden consultas al instante, brindando soporte continuo y
                  personalizado a cada ciudadano.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infografía de Neuromarketing */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-maipu-blue/5">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/10 p-2">
                <Brain className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Impacto de la IA en Maipú</h2>
            <p className="text-gray-600 md:text-xl/relaxed mb-8">
              Estudios muestran un <span className="font-semibold text-maipu-blue">40% más de engagement</span> cuando
              se aplican principios de mejora de calidad en procesos administrativos y ciudadanos
            </p>
            <div className="mt-8 relative h-[400px] w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-maipu-blue to-maipu-green opacity-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Infografía de Neuromarketing"
                fill
                className="object-contain p-4 z-10"
              />
              <div className="absolute bottom-4 right-4 bg-maipu-blue text-white px-4 py-2 rounded-lg text-sm font-medium">
                Basado en estudios científicos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-20 md:py-28 bg-maipu-blue/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-blue-200 p-2">
                <Clock className="h-6 w-6 text-blue-700" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Nuestra Hoja de Ruta
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un plan estratégico para implementar IA en todos los niveles de la gestión municipal, con objetivos claros
              y medibles.
            </p>
          </div>
          <div className="mt-12 space-y-4 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 ml-4 h-full w-1 bg-gradient-to-b from-blue-300 to-cyan-300 rounded-full"></div>
              <div className="relative ml-6 space-y-8">
                <div className="relative animate-slide-in" style={{ animationDelay: "0.1s" }}>
                  <div className="absolute -left-10 top-1 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Fase 1: Área de Informática</h3>
                    <p className="text-gray-600">
                      Implementación de soluciones de IA para optimizar procesos internos con Agentes de IA, RAGS,
                      Chatbot, automatización administrativa, generación de tickets, atencion a empleados de la
                      organización, capacitación del personal técnico y desarrollo de infraestructura, seguridad y
                      automatización.
                    </p>
                    <div className="mt-4 inline-block bg-blue-50 px-3 py-1 text-sm text-blue-700 rounded-full">
                      Julio–Noviembre 2025
                    </div>
                  </div>
                </div>
                <div className="relative animate-slide-in" style={{ animationDelay: "0.3s" }}>
                  <div className="absolute -left-10 top-1 h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Fase 2: Áreas Internas</h3>
                    <p className="text-gray-600">
                      Expansión a otras áreas municipales, integración de sistemas y automatización de procesos
                      administrativos con tecnologías avanzadas.
                    </p>
                    <div className="mt-4 inline-block bg-blue-50 px-3 py-1 text-sm text-blue-700 rounded-full">
                      Noviembre–Diciembre 2025 a 2026 en adelante
                    </div>
                  </div>
                </div>
                <div className="relative animate-slide-in" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute -left-10 top-1 h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Fase 3: Servicios Ciudadanos</h3>
                    <p className="text-gray-600">
                      Implementación de soluciones orientadas al ciudadano, chatbots, análisis predictivo y mejora
                      continua de servicios para una experiencia óptima.
                    </p>
                    <div className="mt-4 inline-block bg-blue-50 px-3 py-1 text-sm text-blue-700 rounded-full">
                      2026 en adelante
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/hoja-ruta">
                <Button className="bg-maipu-blue hover:bg-maipu-blue/80 text-white shadow-md hover:shadow-lg transition-all">
                  Ver hoja de ruta completa <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-maipu-green to-maipu-green/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
              <div className="rounded-full bg-white/20 p-2">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sé parte de la transformación digital
            </h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conoce más sobre nuestras iniciativas de IA y cómo están transformando la gestión municipal para crear una
              ciudad más inteligente y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contacto">
                <Button className="bg-white text-maipu-green hover:bg-white/90 shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                  Contactar al equipo
                </Button>
              </Link>
              <Link href="/que-es-ia">
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all w-full sm:w-auto"
                >
                  Aprender sobre IA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 1: Tecnologías Implementadas (Fondo Blanco) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-green/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-green/10 p-2">
                <Code className="h-6 w-6 text-maipu-green" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Tecnologías Implementadas
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Utilizamos las tecnologías más avanzadas para potenciar la gestión municipal y ofrecer servicios de
              calidad a nuestros ciudadanos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-maipu-blue/10 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                <Robot className="h-8 w-8 text-maipu-blue" />
              </div>
              <h3 className="text-xl font-bold text-maipu-black mb-2">Chatbots Avanzados</h3>
              <p className="text-gray-600 text-center">
                Asistentes virtuales con procesamiento de lenguaje natural para atención ciudadana 24/7.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-maipu-green/10 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-maipu-green/10 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-maipu-green" />
              </div>
              <h3 className="text-xl font-bold text-maipu-black mb-2">Big Data Municipal</h3>
              <p className="text-gray-600 text-center">
                Análisis de grandes volúmenes de datos para toma de decisiones basadas en evidencia.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-maipu-orange/10 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-maipu-orange/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-maipu-orange" />
              </div>
              <h3 className="text-xl font-bold text-maipu-black mb-2">Sistemas Predictivos</h3>
              <p className="text-gray-600 text-center">
                Algoritmos de machine learning para anticipar necesidades y optimizar recursos municipales.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-maipu-blue/10 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-maipu-blue" />
              </div>
              <h3 className="text-xl font-bold text-maipu-black mb-2">Automatización Documental</h3>
              <p className="text-gray-600 text-center">
                Procesamiento automático de documentos y formularios con reconocimiento inteligente.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/tecnologias">
              <Button className="bg-maipu-green hover:bg-maipu-green/80 text-white shadow-md hover:shadow-lg transition-all">
                Explorar todas las tecnologías <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 2: Resultados Obtenidos (Fondo Naranja) */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-maipu-orange to-maipu-orange/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
              <div className="rounded-full bg-white/20 p-2">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resultados Obtenidos</h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestras iniciativas de IA ya están generando impacto positivo en la gestión municipal y en la experiencia
              ciudadana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">60%</h3>
                  <p className="text-white/80">Reducción en tiempos de respuesta</p>
                </div>
              </div>
              <p className="text-white/70">
                Los ciudadanos reciben respuestas más rápidas a sus consultas y trámites gracias a la automatización
                inteligente.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">85%</h3>
                  <p className="text-white/80">Satisfacción ciudadana</p>
                </div>
              </div>
              <p className="text-white/70">
                Las encuestas muestran altos niveles de satisfacción con los nuevos servicios digitales implementados.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">40%</h3>
                  <p className="text-white/80">Ahorro en recursos</p>
                </div>
              </div>
              <p className="text-white/70">
                Optimización de procesos que ha permitido reasignar recursos a áreas prioritarias para la comunidad.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Testimonio de Director de Informática"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white/90 italic text-lg mb-4">
                  "La implementación de IA en nuestra municipalidad ha transformado radicalmente nuestra capacidad de
                  servicio. Hemos logrado automatizar procesos que antes tomaban días y ahora se resuelven en minutos."
                </p>
                <p className="text-white font-semibold">Ing. Carlos Mendoza</p>
                <p className="text-white/70 text-sm">Director de Informática, Municipalidad de Maipú</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 3: Preguntas Frecuentes (Fondo Blanco) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/10 p-2">
                <HelpCircle className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Resolvemos tus dudas sobre la implementación de Inteligencia Artificial en la Municipalidad de Maipú.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-soft hover:shadow-highlight transition-all duration-300">
              <h3 className="text-xl font-bold text-maipu-blue mb-3">¿Qué tipo de IA utiliza la municipalidad?</h3>
              <p className="text-gray-600">
                Utilizamos una combinación de tecnologías de IA, incluyendo procesamiento de lenguaje natural para
                chatbots, algoritmos de machine learning para análisis predictivo, y sistemas de automatización para
                procesos administrativos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-soft hover:shadow-highlight transition-all duration-300">
              <h3 className="text-xl font-bold text-maipu-green mb-3">
                ¿Cómo se protege la privacidad de los datos ciudadanos?
              </h3>
              <p className="text-gray-600">
                Implementamos estrictos protocolos de seguridad y cumplimos con todas las normativas de protección de
                datos. La información personal es anonimizada y encriptada, y solo se utiliza para mejorar los servicios
                municipales.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-soft hover:shadow-highlight transition-all duration-300">
              <h3 className="text-xl font-bold text-maipu-orange mb-3">
                ¿Qué beneficios obtienen los ciudadanos con esta implementación?
              </h3>
              <p className="text-gray-600">
                Los ciudadanos disfrutan de tiempos de respuesta más rápidos, atención 24/7 a través de chatbots,
                trámites simplificados, y servicios personalizados según sus necesidades específicas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-soft hover:shadow-highlight transition-all duration-300">
              <h3 className="text-xl font-bold text-maipu-blue mb-3">
                ¿Cómo puedo acceder a los servicios de IA municipal?
              </h3>
              <p className="text-gray-600">
                Todos los servicios están disponibles a través del portal web municipal, la aplicación móvil, y en las
                oficinas físicas de atención ciudadana. El chatbot está disponible en todas las plataformas digitales.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/faq">
              <Button className="bg-maipu-blue hover:bg-maipu-blue/80 text-white shadow-md hover:shadow-lg transition-all">
                Ver todas las preguntas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-maipu-blue/5 to-maipu-green/5 rounded-xl p-8 border border-maipu-blue/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-maipu-blue" />
              </div>
              <h3 className="text-xl font-bold text-maipu-black mb-3">¿Tienes más preguntas?</h3>
              <p className="text-gray-600 mb-6">
                Consulta nuestra documentación completa o contacta directamente con nuestro equipo de soporte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/recursos">
                  <Button
                    variant="outline"
                    className="border-maipu-blue text-maipu-blue hover:bg-maipu-blue/5 transition-all w-full sm:w-auto"
                  >
                    Ver recursos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button className="bg-maipu-green hover:bg-maipu-green/80 text-white shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                    Contactar soporte
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
