import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Building, CheckCircle, Clock, Database, FileText, Users } from "lucide-react"
import Image from "next/image"

export default function HojaRuta() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-maipu-green/5 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hoja de Ruta</h1>
            <p className="text-gray-500 md:text-xl/relaxed">
              Plan estratégico para la implementación de Inteligencia Artificial en la Municipalidad de Maipú
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Visión General</h2>
            <p className="text-gray-500">
              Nuestra estrategia de implementación de IA sigue un enfoque gradual y sistemático, asegurando una adopción
              efectiva y sostenible de estas tecnologías en todos los niveles de la gestión municipal.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Principios Rectores</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-maipu-green mt-0.5" />
                  <span>
                    <strong>Centrado en el ciudadano:</strong> Todas las iniciativas de IA están diseñadas para mejorar
                    la experiencia y calidad de vida de nuestros ciudadanos.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-maipu-green mt-0.5" />
                  <span>
                    <strong>Escalabilidad:</strong> Comenzamos con proyectos piloto que pueden escalarse progresivamente
                    a toda la organización.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-maipu-green mt-0.5" />
                  <span>
                    <strong>Interoperabilidad:</strong> Aseguramos que las soluciones de IA se integren perfectamente
                    con los sistemas existentes.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-maipu-green mt-0.5" />
                  <span>
                    <strong>Ética y transparencia:</strong> Implementamos IA de manera responsable, con supervisión
                    humana y explicabilidad de las decisiones.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-maipu-green mt-0.5" />
                  <span>
                    <strong>Mejora continua:</strong> Evaluamos constantemente el desempeño de nuestras soluciones para
                    optimizarlas.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Visión estratégica de IA"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="fase1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TabsTrigger
                  value="fase1"
                  className="data-[state=active]:bg-maipu-green/10 data-[state=active]:text-maipu-black"
                >
                  <Building className="mr-2 h-4 w-4" />
                  Fase 1: Área de Informática
                </TabsTrigger>
                <TabsTrigger
                  value="fase2"
                  className="data-[state=active]:bg-maipu-green/10 data-[state=active]:text-maipu-black"
                >
                  <Database className="mr-2 h-4 w-4" />
                  Fase 2: Áreas Internas
                </TabsTrigger>
                <TabsTrigger
                  value="fase3"
                  className="data-[state=active]:bg-maipu-green/10 data-[state=active]:text-maipu-black"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Fase 3: Servicios Ciudadanos
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="fase1" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-maipu-green/10 px-3 py-1 text-sm text-maipu-green">
                    Abril–Junio 2025
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Fase 1: Implementación en el Área de Informática
                  </h2>
                  <p className="text-gray-500">
                    La primera fase se centra en establecer las bases tecnológicas y desarrollar capacidades internas en
                    el departamento de Informática, que servirá como centro de excelencia en IA para toda la
                    municipalidad.
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Fase 1: Área de Informática"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <Clock className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Objetivos Clave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Configuración de infraestructuras IA on-premise (Docker, Kubernetes)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Integración inicial de chatbot Bootpress</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Entrenamiento de primeros modelos NLP</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Definir estándares y metodologías</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Establecer métricas de evaluación</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <FileText className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Proyectos Principales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Automatización de tareas de soporte técnico</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Sistema de monitoreo predictivo de infraestructura</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Análisis de datos para optimización de recursos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Desarrollo de APIs para servicios de IA</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Prototipo de chatbot para consultas internas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Brain className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Capacitación y Desarrollo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Formación técnica en IA para el equipo de TI</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Talleres sobre ética en IA y protección de datos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Certificaciones en tecnologías de IA</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Participación en comunidades de práctica</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Desarrollo de documentación y guías internas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="fase2" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-maipu-green/10 px-3 py-1 text-sm text-maipu-green">
                    Julio–Diciembre 2025
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Fase 2: Expansión a Áreas Internas
                  </h2>
                  <p className="text-gray-500">
                    La segunda fase expande las soluciones de IA a otras áreas administrativas de la municipalidad,
                    optimizando procesos internos y mejorando la eficiencia operativa en toda la organización.
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Fase 2: Áreas Internas"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <Clock className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Objetivos Clave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Despliegue de microservicios de visión por computadora para inspección de obras</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Automatización de procesos de atención en Salud y Desarrollo Social</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Desarrollar soluciones específicas por departamento</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Establecer métricas de impacto organizacional</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Crear un centro de excelencia en IA municipal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <FileText className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Proyectos Principales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Sistema de gestión documental inteligente</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Automatización de procesos financieros</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Análisis predictivo para recursos humanos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Optimización de compras y contrataciones</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Plataforma de colaboración interdepartamental</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Brain className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Áreas Prioritarias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Administración y Finanzas</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Recursos Humanos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Compras y Contrataciones</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Planificación Estratégica</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Gestión de Proyectos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="fase3" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-maipu-green/10 px-3 py-1 text-sm text-maipu-green">
                    2026 en adelante
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Fase 3: Servicios Orientados al Ciudadano
                  </h2>
                  <p className="text-gray-500">
                    La tercera fase se enfoca en implementar soluciones de IA directamente orientadas a mejorar la
                    experiencia ciudadana, optimizando servicios públicos y facilitando la interacción con la
                    municipalidad.
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Fase 3: Servicios Ciudadanos"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <Clock className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Objetivos Clave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Portal público de solicitudes inteligentes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Asistente virtual multicanal (WhatsApp, web y app móvil)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Optimizar la gestión de servicios urbanos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Desarrollar aplicaciones móviles inteligentes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Implementar sistemas predictivos para servicios</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <FileText className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Proyectos Principales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Chatbot municipal para atención ciudadana</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Plataforma de trámites inteligentes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Sistema de gestión de reclamos con IA</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Optimización de rutas de servicios urbanos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>App móvil con asistente virtual</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Brain className="h-8 w-8 text-maipu-green mb-2" />
                    <CardTitle>Servicios Prioritarios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Atención al Contribuyente</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Gestión de Trámites</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Servicios Urbanos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Participación Ciudadana</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                        <span>Información y Transparencia</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Indicadores de Éxito</h2>
            <p className="text-gray-500">Métricas clave para evaluar el impacto de nuestra estrategia de IA</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Eficiencia Operativa</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Reducción del 50% en tiempos de procesamiento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Disminución del 30% en costos operativos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Automatización del 80% de tareas administrativas rutinarias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Satisfacción Ciudadana</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Aumento del 40% en índices de satisfacción</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Reducción del 70% en tiempos de espera</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Incremento del 60% en resolución al primer contacto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Innovación y Aprendizaje</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>100% del personal técnico capacitado en IA</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Implementación de 20+ soluciones innovadoras</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-maipu-green"></div>
                    <span>Desarrollo de 5+ casos de estudio replicables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-maipu-green/5">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Compromiso con la Mejora Continua</h2>
            <p className="text-gray-500">
              Nuestra hoja de ruta es un documento vivo que se adapta constantemente a las necesidades cambiantes de
              nuestra comunidad y a los avances tecnológicos.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Evaluación y Ajuste</h3>
                <p className="text-gray-500">
                  Realizamos evaluaciones trimestrales de nuestro progreso, ajustando prioridades y recursos según los
                  resultados obtenidos y las nuevas oportunidades identificadas.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Participación Ciudadana</h3>
                <p className="text-gray-500">
                  Involucramos a los ciudadanos en el proceso de mejora continua, recogiendo sus opiniones y sugerencias
                  para adaptar nuestras soluciones a sus necesidades reales.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Innovación Abierta</h3>
                <p className="text-gray-500">
                  Colaboramos con universidades, empresas tecnológicas y otras municipalidades para intercambiar
                  conocimientos y adoptar las mejores prácticas en IA para la gestión pública.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
