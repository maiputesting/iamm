import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Database, Network, Brain, Bot, Code, Server, Cloud, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Tecnologías | Maipú IA",
  description:
    "Descubre las tecnologías de inteligencia artificial implementadas en la Municipalidad de Maipú para mejorar los servicios ciudadanos.",
}

export default function TecnologiasPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
            Tecnologías de Vanguardia
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conoce las tecnologías de inteligencia artificial que impulsan la transformación digital de la Municipalidad
            de Maipú y mejoran la experiencia ciudadana.
          </p>
        </div>

        <Tabs defaultValue="ia" className="w-full mb-16">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="ia" className="text-sm md:text-base">
              Inteligencia Artificial
            </TabsTrigger>
            <TabsTrigger value="datos" className="text-sm md:text-base">
              Gestión de Datos
            </TabsTrigger>
            <TabsTrigger value="infraestructura" className="text-sm md:text-base">
              Infraestructura
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ia" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TechCard
                title="Modelos de Lenguaje Avanzados"
                description="Utilizamos modelos de lenguaje de última generación para procesar y comprender consultas ciudadanas en lenguaje natural."
                icon={<Brain className="h-10 w-10 text-[#00AEEF]" />}
                tags={["GPT-4", "LLaMA 3", "Embeddings"]}
              />
              <TechCard
                title="Asistentes Virtuales Inteligentes"
                description="Nuestros chatbots utilizan IA conversacional para brindar respuestas precisas y personalizadas a las consultas ciudadanas."
                icon={<Bot className="h-10 w-10 text-[#F7931E]" />}
                tags={["Chatbots", "Asistentes 24/7", "Multimodal"]}
              />
              <TechCard
                title="Sistemas Multi-Agente"
                description="Implementamos sistemas de agentes autónomos que colaboran entre sí para resolver problemas complejos de gestión municipal."
                icon={<Network className="h-10 w-10 text-[#00AEEF]" />}
                tags={["Agentes Autónomos", "Colaboración", "Optimización"]}
              />
              <TechCard
                title="Procesamiento de Lenguaje Natural"
                description="Analizamos documentos, solicitudes y trámites mediante NLP para extraer información relevante y automatizar procesos."
                icon={<Code className="h-10 w-10 text-[#F7931E]" />}
                tags={["NLP", "Análisis Semántico", "Extracción de Entidades"]}
              />
            </div>

            <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#F7931E]/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Beneficios de nuestra IA</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BenefitItem text="Respuestas instantáneas a consultas ciudadanas" />
                <BenefitItem text="Reducción de tiempos de espera en trámites" />
                <BenefitItem text="Personalización de servicios según necesidades" />
                <BenefitItem text="Análisis predictivo para anticipar demandas" />
                <BenefitItem text="Automatización de procesos administrativos" />
                <BenefitItem text="Mejora continua basada en retroalimentación" />
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="datos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TechCard
                title="Bases de Conocimiento Vectoriales"
                description="Almacenamos y recuperamos información mediante bases de datos vectoriales que permiten búsquedas semánticas avanzadas."
                icon={<Database className="h-10 w-10 text-[#00AEEF]" />}
                tags={["Vector DB", "Embeddings", "Búsqueda Semántica"]}
              />
              <TechCard
                title="Análisis de Datos en Tiempo Real"
                description="Procesamos datos municipales en tiempo real para obtener insights y tomar decisiones basadas en evidencia."
                icon={<Cpu className="h-10 w-10 text-[#F7931E]" />}
                tags={["Streaming", "Dashboards", "Alertas"]}
              />
              <TechCard
                title="Integración de Fuentes de Datos"
                description="Conectamos múltiples fuentes de datos municipales para crear una visión unificada y coherente de la información."
                icon={<Server className="h-10 w-10 text-[#00AEEF]" />}
                tags={["ETL", "API", "Microservicios"]}
              />
              <TechCard
                title="Privacidad y Seguridad de Datos"
                description="Implementamos protocolos avanzados para garantizar la privacidad y seguridad de los datos ciudadanos."
                icon={<Lock className="h-10 w-10 text-[#F7931E]" />}
                tags={["Encriptación", "Anonimización", "Cumplimiento GDPR"]}
              />
            </div>

            <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#F7931E]/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Arquitectura de Datos</h3>
              <p className="mb-4">Nuestra arquitectura de datos está diseñada para garantizar:</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ArchitectureItem title="Escalabilidad" description="Capacidad para crecer según las necesidades" />
                <ArchitectureItem title="Resiliencia" description="Tolerancia a fallos y recuperación" />
                <ArchitectureItem title="Seguridad" description="Protección de datos sensibles" />
                <ArchitectureItem title="Interoperabilidad" description="Comunicación entre sistemas" />
                <ArchitectureItem title="Rendimiento" description="Respuesta rápida y eficiente" />
                <ArchitectureItem title="Mantenibilidad" description="Facilidad de actualización" />
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="infraestructura" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TechCard
                title="Infraestructura Cloud"
                description="Utilizamos servicios cloud de última generación para garantizar alta disponibilidad, escalabilidad y rendimiento."
                icon={<Cloud className="h-10 w-10 text-[#00AEEF]" />}
                tags={["AWS", "Azure", "Kubernetes"]}
              />
              <TechCard
                title="Arquitectura Serverless"
                description="Implementamos funciones serverless para optimizar recursos y reducir costos de operación."
                icon={<Server className="h-10 w-10 text-[#F7931E]" />}
                tags={["Lambda", "Functions", "Event-driven"]}
              />
              <TechCard
                title="APIs y Microservicios"
                description="Desarrollamos APIs RESTful y microservicios para facilitar la integración con sistemas internos y externos."
                icon={<Code className="h-10 w-10 text-[#00AEEF]" />}
                tags={["REST", "GraphQL", "Swagger"]}
              />
              <TechCard
                title="Monitoreo y Observabilidad"
                description="Implementamos herramientas avanzadas para monitorear el rendimiento y detectar problemas en tiempo real."
                icon={<Cpu className="h-10 w-10 text-[#F7931E]" />}
                tags={["Logs", "Métricas", "Alertas"]}
              />
            </div>

            <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#F7931E]/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Principios de Diseño</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Arquitectura</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00AEEF] mr-2">•</span>
                      <span>Diseño basado en microservicios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00AEEF] mr-2">•</span>
                      <span>Separación de responsabilidades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00AEEF] mr-2">•</span>
                      <span>Escalabilidad horizontal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Desarrollo</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>CI/CD automatizado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Testing exhaustivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F7931E] mr-2">•</span>
                      <span>Documentación como código</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#00AEEF]">Nuestro Stack Tecnológico</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StackItem name="Next.js" category="Frontend" />
            <StackItem name="Python" category="Backend" />
            <StackItem name="TensorFlow" category="IA" />
            <StackItem name="PyTorch" category="IA" />
            <StackItem name="PostgreSQL" category="Base de Datos" />
            <StackItem name="Redis" category="Cache" />
            <StackItem name="Docker" category="Contenedores" />
            <StackItem name="Kubernetes" category="Orquestación" />
            <StackItem name="FastAPI" category="API" />
            <StackItem name="React" category="UI" />
            <StackItem name="Tailwind CSS" category="Estilos" />
            <StackItem name="LangChain" category="IA" />
          </div>
        </div>

        <div className="bg-[#00AEEF]/10 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#00AEEF]">Evolución Tecnológica</h2>
          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-[#00AEEF] to-[#F7931E]"></div>
            <div className="space-y-12">
              <TimelineItem
                year="2023"
                title="Inicio del Proyecto IA"
                description="Implementación de los primeros chatbots y asistentes virtuales para atención ciudadana."
                position="left"
              />
              <TimelineItem
                year="2024"
                title="Expansión de Capacidades"
                description="Integración de modelos de lenguaje avanzados y sistemas de análisis predictivo."
                position="right"
              />
              <TimelineItem
                year="2025"
                title="Sistemas Multi-Agente"
                description="Desarrollo de agentes autónomos especializados para diferentes áreas municipales."
                position="left"
              />
              <TimelineItem
                year="2026"
                title="IA Generalizada"
                description="Implementación de IA en todos los procesos municipales y servicios ciudadanos."
                position="right"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F7931E]">¿Quieres saber más?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Explora nuestros recursos adicionales o contáctanos para obtener más información sobre las tecnologías que
            utilizamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recursos"
              className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Ver recursos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="bg-white border-2 border-[#F7931E] text-[#F7931E] hover:bg-[#F7931E]/10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Contactar al equipo
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

function TechCard({
  title,
  description,
  icon,
  tags,
}: { title: string; description: string; icon: React.ReactNode; tags: string[] }) {
  return (
    <Card className="border-2 border-gray-100 hover:border-[#00AEEF]/30 transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-gray-50 p-2 rounded-lg">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 mb-4 text-base">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <div className="mr-2 mt-1 text-[#F7931E]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span>{text}</span>
    </li>
  )
}

function ArchitectureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-[#00AEEF]">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function StackItem({ name, category }: { name: string; category: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all duration-300">
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm text-gray-500">{category}</div>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  description,
  position,
}: { year: string; title: string; description: string; position: "left" | "right" }) {
  return (
    <div
      className={`relative ${position === "left" ? "pl-12 pr-0 md:pl-0 md:pr-12 md:text-right md:ml-auto md:mr-1/2" : "pl-12 md:pl-12 md:ml-1/2"}`}
    >
      <div
        className={`absolute top-0 ${position === "left" ? "left-0 md:right-0 md:left-auto md:-mr-4" : "left-0 md:left-0 md:-ml-4"} w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-white font-bold z-10`}
      >
        {year.substring(2)}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-[#F7931E]">{year}</h3>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
