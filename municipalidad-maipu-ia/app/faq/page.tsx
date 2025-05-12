import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MessageCircle, FileText, Brain } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Maipú IA",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre la iniciativa de Inteligencia Artificial de la Municipalidad de Maipú.",
}

export default function FAQPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra iniciativa de Inteligencia Artificial y cómo
            está transformando los servicios municipales.
          </p>
        </div>

        <div className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <Input type="text" placeholder="Buscar en las preguntas frecuentes..." className="pl-10 py-6 text-base" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#00AEEF] hover:bg-[#00AEEF]/90">
              Buscar
            </Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full mb-16">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="general" className="text-xs md:text-sm">
              <span className="hidden md:inline">General</span>
              <span className="md:hidden">Gral</span>
            </TabsTrigger>
            <TabsTrigger value="servicios" className="text-xs md:text-sm">
              <span className="hidden md:inline">Servicios</span>
              <span className="md:hidden">Serv</span>
            </TabsTrigger>
            <TabsTrigger value="tecnologia" className="text-xs md:text-sm">
              <span className="hidden md:inline">Tecnología</span>
              <span className="md:hidden">Tec</span>
            </TabsTrigger>
            <TabsTrigger value="privacidad" className="text-xs md:text-sm">
              <span className="hidden md:inline">Privacidad</span>
              <span className="md:hidden">Priv</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                question="¿Qué es la iniciativa Maipú IA?"
                answer="La iniciativa Maipú IA es un proyecto integral de transformación digital que busca implementar soluciones de Inteligencia Artificial en los servicios municipales para mejorar la eficiencia, transparencia y calidad de atención a los ciudadanos. Esta iniciativa abarca desde chatbots para atención al público hasta sistemas avanzados de análisis de datos para la toma de decisiones."
              />
              <FAQItem
                question="¿Cuáles son los objetivos principales de Maipú IA?"
                answer="Los objetivos principales de Maipú IA son: 1) Mejorar la experiencia ciudadana en su interacción con la municipalidad, 2) Optimizar los procesos internos y reducir tiempos de respuesta, 3) Facilitar el acceso a la información y servicios municipales, 4) Implementar soluciones innovadoras basadas en datos para resolver problemas comunitarios, y 5) Posicionar a Maipú como un municipio innovador y tecnológicamente avanzado."
              />
              <FAQItem
                question="¿Cómo beneficia esta iniciativa a los ciudadanos?"
                answer="Los ciudadanos se benefician de múltiples maneras: atención 24/7 a través de asistentes virtuales, reducción de tiempos de espera en trámites, personalización de servicios según sus necesidades, mayor transparencia en la gestión municipal, acceso simplificado a información y servicios, y mejora continua de los servicios basada en sus interacciones y retroalimentación."
              />
              <FAQItem
                question="¿Cuándo comenzó este proyecto y cuál es su horizonte temporal?"
                answer="El proyecto Maipú IA comenzó su implementación en 2023 con las primeras soluciones de chatbots y asistentes virtuales. Actualmente nos encontramos en una fase de expansión (2025) con la implementación de sistemas multi-agente y soluciones más avanzadas. El horizonte temporal del proyecto se extiende hasta 2026, cuando esperamos tener la IA integrada en todos los procesos municipales relevantes."
              />
              <FAQItem
                question="¿Quiénes están detrás de esta iniciativa?"
                answer="Esta iniciativa es liderada por la Secretaría de Innovación y Tecnología de la Municipalidad de Maipú, en colaboración con un equipo multidisciplinario de profesionales en tecnología, administración pública, experiencia de usuario y ciencia de datos. También contamos con alianzas estratégicas con universidades locales y empresas tecnológicas que aportan conocimiento y experiencia en el campo de la IA."
              />
            </Accordion>
          </TabsContent>

          <TabsContent value="servicios">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                question="¿Qué servicios municipales utilizan actualmente IA?"
                answer="Actualmente, la IA está implementada en varios servicios municipales: atención ciudadana a través de chatbots, gestión de reclamos y solicitudes, sistema de turnos inteligente, análisis predictivo para mantenimiento urbano, gestión tributaria automatizada, y asistencia en trámites municipales. Estamos constantemente expandiendo la implementación a nuevas áreas."
              />
              <FAQItem
                question="¿Cómo puedo acceder al chatbot municipal?"
                answer="Puedes acceder al chatbot municipal de varias formas: a través de nuestra página web oficial, mediante la aplicación móvil de la municipalidad, por WhatsApp enviando un mensaje al número oficial, o en los terminales de autoservicio ubicados en las oficinas municipales. El chatbot está disponible 24/7 para responder tus consultas."
              />
              <FAQItem
                question="¿Qué tipo de consultas puedo realizar al asistente virtual?"
                answer="Nuestro asistente virtual puede responder a una amplia variedad de consultas, incluyendo: información sobre trámites y requisitos, estado de solicitudes y expedientes, fechas de vencimiento de impuestos y servicios, ubicación y horarios de oficinas municipales, eventos y actividades culturales, y procedimientos para diferentes gestiones. Si el asistente no puede resolver tu consulta, te derivará a un operador humano."
              />
              <FAQItem
                question="¿Cómo se integra la IA con los trámites municipales tradicionales?"
                answer="La IA se integra con los trámites tradicionales de varias maneras: automatizando la clasificación y derivación de solicitudes, pre-completando formularios con información ya disponible, verificando documentación de forma automática, sugiriendo pasos a seguir según el tipo de trámite, y monitoreando los tiempos de respuesta. Esto permite que los trámites sean más ágiles y que el personal municipal pueda enfocarse en tareas de mayor valor agregado."
              />
              <FAQItem
                question="¿Qué hacer si el sistema automatizado no resuelve mi problema?"
                answer="Si el sistema automatizado no logra resolver tu problema, siempre tienes la opción de ser atendido por personal municipal. Puedes solicitar la derivación a un operador humano directamente en el chat, llamar a nuestro centro de atención telefónica, o agendar una cita presencial a través de nuestro sistema de turnos. Todas las interacciones con el sistema automatizado quedan registradas, lo que facilita la continuidad de la atención."
              />
            </Accordion>
          </TabsContent>

          <TabsContent value="tecnologia">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                question="¿Qué tecnologías de IA utiliza la municipalidad?"
                answer="La municipalidad utiliza diversas tecnologías de IA, incluyendo: Modelos de Lenguaje Natural (LLM) para procesamiento de consultas y generación de respuestas, sistemas de reconocimiento de entidades para extracción de información de documentos, bases de conocimiento vectoriales para búsquedas semánticas, sistemas multi-agente para tareas complejas, análisis predictivo para anticipar necesidades, y procesamiento de lenguaje natural para análisis de sentimiento y categorización de solicitudes."
              />
              <FAQItem
                question="¿Qué son los sistemas multi-agente y cómo se utilizan?"
                answer="Los sistemas multi-agente son conjuntos de agentes de IA autónomos que colaboran entre sí para resolver problemas complejos. Cada agente tiene capacidades y conocimientos específicos, y pueden comunicarse y coordinar sus acciones. En la municipalidad, utilizamos estos sistemas para gestionar procesos que requieren múltiples pasos y áreas de conocimiento, como la planificación urbana, la gestión de emergencias, o la coordinación de servicios públicos."
              />
              <FAQItem
                question="¿Cómo aprende y mejora el sistema de IA municipal?"
                answer="Nuestro sistema de IA mejora continuamente a través de varios mecanismos: aprendizaje supervisado con retroalimentación de expertos municipales, análisis de las interacciones con los ciudadanos, evaluación periódica de métricas de rendimiento, actualización regular de la base de conocimientos, y refinamiento de los modelos basado en casos de uso reales. Además, contamos con un equipo dedicado a la mejora continua que analiza patrones y oportunidades de optimización."
              />
              <FAQItem
                question="¿La IA reemplazará a los empleados municipales?"
                answer="No, la IA no busca reemplazar a los empleados municipales, sino complementar y potenciar su trabajo. La tecnología se enfoca en automatizar tareas repetitivas y de bajo valor agregado, permitiendo que el personal municipal pueda dedicarse a actividades que requieren empatía, criterio humano y atención personalizada. De hecho, la implementación de IA ha permitido reasignar recursos humanos a áreas donde son más necesarios y pueden generar mayor impacto."
              />
              <FAQItem
                question="¿Qué infraestructura tecnológica soporta estos sistemas?"
                answer="Nuestra infraestructura tecnológica incluye: servidores cloud de alta disponibilidad, arquitectura de microservicios para flexibilidad y escalabilidad, bases de datos relacionales y no relacionales según las necesidades, sistemas de almacenamiento seguro para datos sensibles, redes de comunicación redundantes, y sistemas de respaldo y recuperación ante desastres. Todo esto está gestionado bajo estrictos protocolos de seguridad y cumplimiento normativo."
              />
            </Accordion>
          </TabsContent>

          <TabsContent value="privacidad">
            <Accordion type="single" collapsible className="w-full">
              <FAQItem
                question="¿Cómo se protegen los datos personales de los ciudadanos?"
                answer="Protegemos los datos personales mediante: encriptación de extremo a extremo, políticas estrictas de acceso basadas en roles, anonimización de datos para análisis, almacenamiento seguro en servidores certificados, auditorías regulares de seguridad, y cumplimiento con todas las normativas de protección de datos aplicables. Además, solo recolectamos los datos estrictamente necesarios para brindar los servicios solicitados."
              />
              <FAQItem
                question="¿Qué información recopila el sistema de IA?"
                answer="El sistema recopila únicamente la información necesaria para brindar los servicios solicitados, que puede incluir: datos de identificación básicos para verificar identidad, historial de interacciones con servicios municipales, consultas y solicitudes realizadas, preferencias de comunicación, y retroalimentación proporcionada. No recopilamos datos sensibles innecesarios y siempre informamos claramente qué información se está procesando."
              />
              <FAQItem
                question="¿Quién tiene acceso a mis interacciones con el chatbot?"
                answer="El acceso a las interacciones está estrictamente controlado. Solo personal autorizado con necesidad específica puede acceder a estos datos, principalmente para fines de mejora del servicio, resolución de problemas complejos, o cuando es legalmente requerido. Todas las consultas se almacenan de forma segura y, después de un período determinado, se anonimizan para análisis estadísticos manteniendo la privacidad de los usuarios."
              />
              <FAQItem
                question="¿Cumple el sistema con las leyes de protección de datos?"
                answer="Sí, nuestro sistema cumple rigurosamente con todas las leyes de protección de datos aplicables, incluyendo la Ley de Protección de Datos Personales y normativas municipales específicas. Realizamos evaluaciones de impacto en la privacidad antes de implementar nuevas funcionalidades, contamos con un Delegado de Protección de Datos, y mantenemos políticas actualizadas de retención y eliminación de información."
              />
              <FAQItem
                question="¿Puedo solicitar la eliminación de mis datos del sistema?"
                answer="Sí, como ciudadano tienes el derecho de solicitar la eliminación de tus datos personales del sistema, conforme a las leyes de protección de datos vigentes. Puedes realizar esta solicitud a través de nuestro formulario específico de derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) disponible en la web municipal o presencialmente en nuestras oficinas. Procesaremos tu solicitud en los plazos establecidos por la normativa."
              />
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 border-[#00AEEF]/20 hover:border-[#00AEEF] transition-all duration-300">
            <CardHeader className="flex flex-col items-center">
              <MessageCircle className="h-12 w-12 text-[#00AEEF] mb-2" />
              <CardTitle className="text-center">¿Tienes más preguntas?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-700 mb-4">
                Nuestro equipo está listo para responder cualquier consulta adicional que puedas tener.
              </CardDescription>
              <Link href="/contacto">
                <Button className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 w-full">Contactar</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#F7931E]/20 hover:border-[#F7931E] transition-all duration-300">
            <CardHeader className="flex flex-col items-center">
              <FileText className="h-12 w-12 text-[#F7931E] mb-2" />
              <CardTitle className="text-center">Recursos adicionales</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-700 mb-4">
                Explora nuestra biblioteca de recursos para aprender más sobre nuestras iniciativas.
              </CardDescription>
              <Link href="/recursos">
                <Button className="bg-[#F7931E] hover:bg-[#F7931E]/90 w-full">Ver recursos</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#00AEEF]/20 hover:border-[#00AEEF] transition-all duration-300">
            <CardHeader className="flex flex-col items-center">
              <Brain className="h-12 w-12 text-[#00AEEF] mb-2" />
              <CardTitle className="text-center">Prueba nuestro chatbot</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-700 mb-4">
                Experimenta de primera mano cómo funciona nuestra IA conversacional.
              </CardDescription>
              <Link href="/chatbot-demo">
                <Button className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 w-full">Probar ahora</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#F7931E]/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">¿No encontraste lo que buscabas?</h2>
          <p className="text-center mb-6">Envíanos tu pregunta y te responderemos a la brevedad</p>
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Nombre" />
              <Input placeholder="Email" type="email" />
            </div>
            <Input placeholder="Asunto" className="mb-4" />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md mb-4 min-h-[120px]"
              placeholder="Tu pregunta o consulta"
            ></textarea>
            <div className="text-center">
              <Button className="bg-[#F7931E] hover:bg-[#F7931E]/90 px-8">Enviar consulta</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question.replace(/\s+/g, "-").toLowerCase()}>
      <AccordionTrigger className="text-left font-medium text-lg hover:text-[#00AEEF]">{question}</AccordionTrigger>
      <AccordionContent className="text-gray-700">
        <p className="pt-2 pb-4">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
