import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ArrowRight, Bot, Code, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function ChatbotPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-maipu-blue/5 to-white py-16 md:py-20 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-maipu-blue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-maipu-green/20 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/20 p-2">
                <MessageSquare className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-maipu-blue via-maipu-green to-maipu-orange">
              Chatbot Conversacional
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed">
              Asistente virtual inteligente para atención ciudadana 24/7
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block rounded-lg bg-maipu-blue/10 px-3 py-1 text-sm text-maipu-black shadow-sm">
                Tecnología Avanzada
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Descripción técnica</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Widget flotante basado en Bootpress, con NLU entrenado en Rasa-like y spaCy para detección de intents y
                entidades, capaz de comprender el lenguaje natural y proporcionar respuestas precisas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestro chatbot utiliza algoritmos de machine learning para mejorar continuamente, aprendiendo de cada
                interacción para ofrecer un servicio cada vez más personalizado y eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="bg-maipu-green hover:bg-maipu-green/80 text-white shadow-md hover:shadow-lg transition-all">
                  Probar el chatbot <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-maipu-orange text-maipu-orange hover:bg-maipu-orange/5 transition-all"
                >
                  Ver documentación técnica
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[500px] w-full max-w-[400px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-maipu-blue to-maipu-green rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
              <div className="relative h-full w-full rounded-2xl border border-blue-100 bg-white shadow-soft overflow-hidden z-10">
                <div className="h-14 bg-maipu-blue flex items-center px-4">
                  <Bot className="h-6 w-6 text-white mr-2" />
                  <h3 className="text-white font-medium">Asistente Municipal</h3>
                </div>
                <div className="p-4 h-[calc(100%-56px)] flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-2 flex-shrink-0">
                        <Bot className="h-4 w-4 text-maipu-blue" />
                      </div>
                      <div className="bg-blue-50 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-gray-700">
                          ¡Hola! Soy el asistente virtual de la Municipalidad de Maipú. ¿En qué puedo ayudarte hoy?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <div className="bg-maipu-blue text-white rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        <p>Necesito información sobre trámites municipales</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-2 flex-shrink-0">
                        <Bot className="h-4 w-4 text-maipu-blue" />
                      </div>
                      <div className="bg-blue-50 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-gray-700">
                          ¡Claro! Puedo ayudarte con información sobre trámites municipales. ¿Qué tipo de trámite te
                          interesa? Tenemos licencias de conducir, habilitaciones comerciales, pagos de tasas, entre
                          otros.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full border border-blue-200 rounded-full py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-maipu-blue flex items-center justify-center text-white">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/20 p-2">
                <Settings className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Flujo de Conversación</h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              Diseñado para ofrecer una experiencia de usuario fluida y eficiente
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white border-blue-100 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-maipu-blue" />
                </div>
                <CardTitle className="text-xl text-maipu-black">Saludo y menú de opciones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  El chatbot inicia la conversación con un saludo personalizado y presenta un menú de opciones
                  principales para guiar al usuario. Utiliza análisis de contexto para adaptar las sugerencias según el
                  historial de interacciones.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-maipu-blue" />
                </div>
                <CardTitle className="text-xl text-maipu-black">Redirección a FAQs o generación de ticket</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Basado en la consulta del usuario, el sistema identifica si puede resolverse con información existente
                  en la base de conocimiento o si requiere la creación de un ticket para seguimiento por personal
                  especializado.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-maipu-blue/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-maipu-blue" />
                </div>
                <CardTitle className="text-xl text-maipu-black">
                  Escalado a agente humano con contexto completo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Cuando una consulta requiere atención personalizada, el sistema transfiere la conversación a un agente
                  humano, proporcionando todo el historial y contexto para garantizar una transición fluida y sin
                  repeticiones.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/20 p-2">
                <Code className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Arquitectura Técnica</h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              Componentes clave que hacen posible nuestro asistente virtual inteligente
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-soft p-8 border border-blue-100 max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-maipu-black mb-4">Frontend</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">1</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Widget Reactivo</span>
                      <p className="text-gray-600 mt-1">
                        Interfaz de usuario desarrollada con React y Tailwind CSS, optimizada para dispositivos móviles
                        y accesibilidad.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Gestión de Estado</span>
                      <p className="text-gray-600 mt-1">
                        Implementación de Redux para mantener el historial de conversación y estado de la interfaz.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">WebSockets</span>
                      <p className="text-gray-600 mt-1">
                        Comunicación en tiempo real para respuestas instantáneas y notificaciones de estado.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-maipu-black mb-4">Backend</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">1</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">NLU Engine</span>
                      <p className="text-gray-600 mt-1">
                        Procesamiento de lenguaje natural con spaCy y transformers para comprensión contextual avanzada.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Microservicios</span>
                      <p className="text-gray-600 mt-1">
                        Arquitectura distribuida con Docker y Kubernetes para escalabilidad y mantenimiento
                        simplificado.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Base de Conocimiento</span>
                      <p className="text-gray-600 mt-1">
                        Sistema vectorial de recuperación de información con embeddings para respuestas precisas y
                        contextuales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-100">
              <h3 className="text-xl font-bold text-maipu-black mb-4">Integración con Sistemas Municipales</h3>
              <p className="text-gray-600">
                El chatbot se integra con los sistemas existentes de la municipalidad a través de APIs RESTful y
                webhooks, permitiendo consultas en tiempo real a bases de datos de trámites, pagos y servicios,
                manteniendo siempre la seguridad y privacidad de los datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-maipu-green to-maipu-blue/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
              <div className="rounded-full bg-white/20 p-2">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mejora la experiencia ciudadana
            </h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Implementa nuestro chatbot conversacional en tu departamento y ofrece atención instantánea 24/7 a los
              ciudadanos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contacto">
                <Button className="bg-white text-maipu-green hover:bg-white/90 shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                  Solicitar implementación
                </Button>
              </Link>
              <Link href="/casos-uso">
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all w-full sm:w-auto"
                >
                  Ver casos de éxito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
