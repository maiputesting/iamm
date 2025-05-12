import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Building, Recycle, Users } from "lucide-react"
import Image from "next/image"

export default function CasosUso() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-maipu-green/5 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Casos de Uso</h1>
            <p className="text-gray-500 md:text-xl/relaxed">
              Aplicaciones prácticas de la Inteligencia Artificial en la gestión municipal
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="atencion" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger
                  value="atencion"
                  className="data-[state=active]:bg-maipu-blue/10 data-[state=active]:text-maipu-blue"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Atención Ciudadana
                </TabsTrigger>
                <TabsTrigger
                  value="gestion"
                  className="data-[state=active]:bg-maipu-orange/10 data-[state=active]:text-maipu-orange"
                >
                  <Building className="mr-2 h-4 w-4" />
                  Gestión Interna
                </TabsTrigger>
                <TabsTrigger
                  value="servicios"
                  className="data-[state=active]:bg-maipu-green/10 data-[state=active]:text-maipu-green"
                >
                  <Recycle className="mr-2 h-4 w-4" />
                  Servicios Urbanos
                </TabsTrigger>
                <TabsTrigger
                  value="emergencias"
                  className="data-[state=active]:bg-maipu-green/10 data-[state=active]:text-maipu-green"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Emergencias
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="atencion" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Atención al Contribuyente</h2>
                  <p className="text-gray-500">
                    Chatbot 24/7 entrenado con spaCy y Transformers para resolver FAQs en menos de 5 segundos
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Atención Ciudadana con IA"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Chatbot Municipal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Asistente virtual que responde consultas ciudadanas sobre trámites, servicios y eventos
                      municipales. Utiliza procesamiento de lenguaje natural para entender preguntas en lenguaje
                      coloquial y proporcionar respuestas precisas.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Clasificación Automática de Solicitudes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sistema que analiza y categoriza automáticamente las solicitudes ciudadanas, dirigiéndolas al área
                      correspondiente para su atención. Reduce tiempos de espera y mejora la eficiencia en la resolución
                      de problemas.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Análisis de Sentimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Monitoreo de redes sociales y canales de comunicación para detectar el sentimiento ciudadano hacia
                      servicios municipales. Permite identificar áreas de mejora y medir el impacto de iniciativas
                      públicas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-maipu-blue/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-maipu-blue">Resultados obtenidos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-blue">✓</div>
                    <span>Reducción del 70% en tiempos de espera para consultas básicas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-blue">✓</div>
                    <span>Disponibilidad 24/7 de información municipal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-blue">✓</div>
                    <span>Aumento del 40% en la satisfacción ciudadana con la atención municipal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-blue">✓</div>
                    <span>Identificación proactiva de problemas emergentes en la comunidad</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="gestion" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Gestión Tributaria</h2>
                  <p className="text-gray-500">
                    Sistema predictivo de recaudación que anticipa morosidad con un 85% de precisión
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Gestión Interna con IA"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Automatización de Documentos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Procesamiento automático de documentos administrativos mediante reconocimiento óptico de
                      caracteres (OCR) y análisis de texto. Reduce el tiempo de procesamiento y minimiza errores
                      humanos.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Predicción de Recaudación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Modelos predictivos que analizan tendencias históricas para proyectar ingresos municipales.
                      Facilita la planificación presupuestaria y la asignación eficiente de recursos.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Detección de Anomalías</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sistemas que identifican patrones inusuales en transacciones financieras o administrativas.
                      Contribuye a la transparencia y prevención de irregularidades en la gestión pública.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-maipu-green/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Resultados obtenidos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Reducción del 60% en tiempo dedicado a tareas administrativas rutinarias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Mejora del 25% en la precisión de proyecciones presupuestarias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Disminución del 30% en errores de procesamiento de documentos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Optimización en la asignación de recursos humanos y materiales</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="servicios" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Mantenimiento Urbano</h2>
                  <p className="text-gray-500">
                    Sensores IoT y análisis predictivo para programar tareas de limpieza y mantenimiento preventivo
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Servicios Urbanos con IA"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Optimización de Rutas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Algoritmos que calculan las rutas más eficientes para servicios como recolección de residuos y
                      mantenimiento urbano. Reduce costos operativos y emisiones de carbono.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Mantenimiento Predictivo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Análisis de datos para predecir cuándo la infraestructura urbana (alumbrado, pavimento, etc.)
                      requerirá mantenimiento. Previene fallas y optimiza recursos de mantenimiento.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Monitoreo Ambiental</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sistemas que analizan datos de sensores ambientales para monitorear calidad del aire, niveles de
                      ruido y otros parámetros. Facilita la toma de decisiones para mejorar la calidad ambiental.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-maipu-green/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Resultados obtenidos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Reducción del 20% en costos operativos de servicios urbanos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Disminución del 15% en emisiones de CO2 asociadas a vehículos municipales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Aumento del 35% en la vida útil de infraestructura urbana</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Mejora significativa en indicadores ambientales urbanos</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="emergencias" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Gestión de Emergencias</h2>
                  <p className="text-gray-500">
                    Aplicamos IA para mejorar la respuesta ante emergencias y situaciones de crisis, protegiendo a los
                    ciudadanos y minimizando daños.
                  </p>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[300px] w-full max-w-[500px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Gestión de Emergencias con IA"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Predicción de Inundaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Modelos que analizan datos meteorológicos e hidrológicos para predecir riesgos de inundación.
                      Permite activar protocolos preventivos y alertar a zonas vulnerables.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Coordinación de Recursos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sistemas que optimizan la asignación de recursos de emergencia (ambulancias, bomberos, policía)
                      según la naturaleza y ubicación de incidentes. Reduce tiempos de respuesta en situaciones
                      críticas.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Análisis de Riesgos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Evaluación continua de riesgos en infraestructura crítica mediante análisis de datos históricos y
                      en tiempo real. Identifica vulnerabilidades y prioriza intervenciones preventivas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-maipu-green/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Resultados obtenidos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Reducción del 40% en tiempos de respuesta ante emergencias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Disminución significativa de daños materiales por desastres naturales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Mejora en la coordinación entre diferentes servicios de emergencia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-maipu-green">✓</div>
                    <span>Aumento de la capacidad predictiva para eventos críticos</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Diagrama de Flujo de Trabajo</h2>
            <p className="text-gray-500">
              Visualización del proceso de implementación de soluciones de IA en servicios municipales
            </p>
          </div>

          <div className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-sm">
            <div className="mermaid-diagram">
              {/* Aquí se insertaría un diagrama Mermaid en una implementación real */}
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Diagrama de flujo de trabajo de IA"
                width={800}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
