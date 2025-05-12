import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function QueEsIA() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-maipu-blue/5 to-white py-16 md:py-20 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-maipu-blue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-maipu-green/20 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/20 p-2">
                <Brain className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-maipu-blue via-maipu-orange to-maipu-green">
              ¿Qué es la Inteligencia Artificial?
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed">
              Comprendiendo la tecnología que está transformando la gestión municipal y revolucionando nuestra sociedad
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block rounded-lg bg-maipu-blue/10 px-3 py-1 text-sm text-maipu-black shadow-sm">
                Fundamentos Tecnológicos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Definición técnico-científica
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                La Inteligencia Artificial (IA) es la disciplina que desarrolla sistemas capaces de razonar, aprender y
                actuar de manera autónoma a partir de datos, utilizando técnicas de machine learning, deep learning y
                NLP.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                En el contexto municipal, la IA nos permite analizar grandes volúmenes de información para mejorar
                servicios, optimizar recursos y anticipar necesidades ciudadanas, creando una administración más
                eficiente y centrada en las personas.
              </p>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[400px] w-full max-w-[500px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-maipu-blue to-maipu-green rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Representación de Inteligencia Artificial"
                fill
                className="rounded-2xl object-cover shadow-soft z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-maipu-blue/10 rounded-full flex items-center justify-center shadow-md z-20">
                <Brain className="h-10 w-10 text-maipu-blue" />
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
                <Database className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Componentes Principales</h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              Conoce las diferentes tecnologías que componen el ecosistema de Inteligencia Artificial y cómo trabajan
              juntas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white border-maipu-blue/20 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-2xl bg-maipu-blue/10 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-maipu-blue" />
                </div>
                <CardTitle className="text-2xl text-maipu-black">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  <span className="font-semibold text-maipu-orange block mb-2">
                    Entrenamiento supervisado y no supervisado
                  </span>
                  Algoritmos que permiten a las computadoras aprender de los datos y mejorar con la experiencia. En la
                  municipalidad, utilizamos machine learning para predecir demandas de servicios y optimizar procesos
                  administrativos con precisión creciente.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-maipu-orange/20 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-2xl bg-maipu-orange/10 flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-maipu-orange" />
                </div>
                <CardTitle className="text-2xl text-maipu-black">Deep Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  <span className="font-semibold text-maipu-blue block mb-2">
                    Redes neuronales convolucionales y recurrentes
                  </span>
                  Aplicamos deep learning para reconocimiento de imágenes en seguridad urbana, análisis de documentos y
                  sistemas de recomendación personalizados que mejoran continuamente con cada interacción ciudadana.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white border-maipu-green/20 shadow-soft hover:shadow-highlight transition-all duration-300 transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 rounded-2xl bg-maipu-green/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-maipu-green" />
                </div>
                <CardTitle className="text-2xl text-maipu-black">NLP (Procesamiento de Lenguaje Natural)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  <span className="font-semibold text-maipu-green block mb-2">
                    Tokenización, embeddings y transformers
                  </span>
                  Implementamos NLP en nuestros chatbots de atención ciudadana, análisis de sentimiento en redes
                  sociales y clasificación automática de solicitudes para una respuesta más humana y eficiente.
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
                <Brain className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              Funcionamiento básico de la IA
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              Entendiendo cómo operan los sistemas de Inteligencia Artificial para transformar datos en soluciones
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-maipu-blue/10 text-maipu-blue">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-maipu-black">Recolección de datos</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Los sistemas de IA requieren grandes cantidades de datos para aprender. En el contexto municipal,
                    recopilamos información de diversas fuentes: sistemas internos, interacciones ciudadanas, sensores
                    urbanos y bases de datos públicas, asegurando siempre la privacidad y seguridad.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-maipu-blue/10 text-maipu-blue">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-maipu-black">Entrenamiento de modelos</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Los algoritmos analizan los datos para identificar patrones y relaciones. Este proceso de
                    entrenamiento permite al sistema aprender de ejemplos pasados para hacer predicciones o tomar
                    decisiones futuras con un alto grado de precisión y adaptabilidad.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-maipu-blue/10 text-maipu-blue">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-maipu-black">Inferencia y aplicación</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Una vez entrenados, los modelos pueden procesar nuevos datos y generar resultados: predicciones,
                    clasificaciones, recomendaciones o acciones automatizadas que mejoran la eficiencia de los servicios
                    municipales y la experiencia ciudadana en tiempo real.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-6 shadow-soft hover:shadow-highlight transition-all duration-300">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-maipu-blue/10 text-maipu-blue">
                  <span className="font-bold text-xl">4</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-maipu-black">Mejora continua</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Los sistemas de IA se perfeccionan constantemente con nuevos datos y retroalimentación. Este ciclo
                    de mejora continua permite adaptar las soluciones a las necesidades cambiantes de nuestra comunidad,
                    creando un ecosistema tecnológico que evoluciona con la ciudad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-maipu-green to-maipu-blue/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
              <div className="rounded-full bg-white/20 p-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Consideraciones éticas</h2>
            <p className="text-white/90 md:text-xl/relaxed">
              Nuestro compromiso con una IA responsable y centrada en el ciudadano
            </p>
            <div className="mt-12 space-y-6 text-left">
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-maipu-blue">Transparencia y explicabilidad</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Nos comprometemos a que nuestros sistemas de IA sean transparentes y sus decisiones explicables para
                  los ciudadanos y funcionarios municipales, manteniendo la confianza pública en nuestras soluciones
                  tecnológicas.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-maipu-green">Privacidad y protección de datos</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Cumplimos con todas las normativas de protección de datos personales, asegurando que la información
                  ciudadana sea tratada con el máximo respeto y seguridad, implementando las mejores prácticas de
                  ciberseguridad.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-maipu-orange">Inclusión y accesibilidad</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Diseñamos nuestras soluciones de IA para que sean accesibles a todos los ciudadanos,
                  independientemente de sus capacidades técnicas o físicas, promoviendo la equidad digital en toda la
                  comunidad.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-maipu-blue">Supervisión humana</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Mantenemos siempre el control humano sobre las decisiones críticas, utilizando la IA como herramienta
                  de apoyo y no como reemplazo del juicio humano en cuestiones sensibles que afectan a nuestros
                  ciudadanos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
