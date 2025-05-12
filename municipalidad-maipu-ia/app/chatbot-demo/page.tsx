"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { Bot, User, Send, Brain, Code, MessageSquare, Settings } from "lucide-react"
import { useChat } from "ai/react"

export default function ChatbotDemo() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("chat")

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome-message",
        role: "assistant",
        content: "¡Hola! Soy el asistente virtual de la Municipalidad de Maipú. ¿En qué puedo ayudarte hoy?",
      },
    ],
  })

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const quickReplies = [
    { id: "1", text: "Trámites municipales" },
    { id: "2", text: "Horarios de atención" },
    { id: "3", text: "Pago de impuestos" },
    { id: "4", text: "Hablar con un agente" },
  ]

  const handleQuickReply = (text: string) => {
    const fakeEvent = {
      preventDefault: () => {},
      currentTarget: {
        elements: {
          message: { value: text },
        },
      },
    } as unknown as React.FormEvent<HTMLFormElement>

    handleInputChange({ target: { value: text } } as React.ChangeEvent<HTMLInputElement>)
    setTimeout(() => handleSubmit(fakeEvent), 100)
  }

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
            <p className="text-gray-600 md:text-xl/relaxed">Prueba nuestro asistente virtual con IA en tiempo real</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Asistente Virtual Inteligente
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestro chatbot utiliza modelos avanzados de IA para comprender el lenguaje natural y proporcionar
                respuestas precisas y contextuales a las consultas de los ciudadanos.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Prueba la demo interactiva para experimentar cómo el asistente puede responder a tus preguntas sobre
                trámites, servicios y gestiones municipales en tiempo real.
              </p>

              <Tabs defaultValue="features" className="w-full mt-6">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="features">Características</TabsTrigger>
                  <TabsTrigger value="benefits">Beneficios</TabsTrigger>
                  <TabsTrigger value="tech">Tecnología</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Disponibilidad 24/7</span>
                      <p className="text-gray-600 mt-1">Atención continua sin importar el día u horario.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Respuestas contextuales</span>
                      <p className="text-gray-600 mt-1">
                        Comprende el contexto de la conversación para respuestas más precisas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Escalado inteligente</span>
                      <p className="text-gray-600 mt-1">Deriva a un agente humano cuando es necesario.</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="benefits" className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Reducción de tiempos de espera</span>
                      <p className="text-gray-600 mt-1">Respuestas inmediatas sin necesidad de esperar en línea.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Mayor satisfacción ciudadana</span>
                      <p className="text-gray-600 mt-1">
                        Experiencia más fluida y eficiente en la interacción con el municipio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Optimización de recursos</span>
                      <p className="text-gray-600 mt-1">
                        Personal municipal enfocado en tareas de mayor valor agregado.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="tech" className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Modelos de lenguaje avanzados</span>
                      <p className="text-gray-600 mt-1">
                        Utiliza GPT-4o para comprensión y generación de texto natural.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Streaming en tiempo real</span>
                      <p className="text-gray-600 mt-1">Respuestas progresivas para una experiencia más natural.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-maipu-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Base de conocimiento municipal</span>
                      <p className="text-gray-600 mt-1">
                        Entrenado con información específica de la Municipalidad de Maipú.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mx-auto lg:mx-0 w-full max-w-[450px] order-1 lg:order-2">
              <Card className="border-maipu-blue/20 shadow-lg overflow-hidden h-[600px] flex flex-col">
                <CardHeader className="bg-gradient-to-r from-maipu-blue to-maipu-blue/80 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-white">Asistente Municipal</CardTitle>
                    </div>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                      <TabsList className="bg-white/10 p-1">
                        <TabsTrigger
                          value="chat"
                          className="text-xs py-1 px-2 data-[state=active]:bg-white data-[state=active]:text-maipu-blue"
                        >
                          Chat
                        </TabsTrigger>
                        <TabsTrigger
                          value="info"
                          className="text-xs py-1 px-2 data-[state=active]:bg-white data-[state=active]:text-maipu-blue"
                        >
                          Info
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <TabsContent value="chat" className="flex-1 flex flex-col h-full m-0 data-[state=inactive]:hidden">
                    <div className="flex-1 overflow-y-auto p-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start mb-4 ${message.role === "user" ? "justify-end" : ""}`}
                        >
                          {message.role !== "user" && (
                            <Avatar className="h-8 w-8 mr-2 bg-maipu-blue/10">
                              <Bot className="h-4 w-4 text-maipu-blue" />
                            </Avatar>
                          )}
                          <div
                            className={`rounded-lg p-3 max-w-[80%] ${
                              message.role === "user"
                                ? "bg-maipu-blue text-white rounded-tr-none"
                                : "bg-maipu-blue/10 text-gray-700 rounded-tl-none"
                            }`}
                          >
                            <p className={message.role === "user" ? "text-white" : "text-gray-700"}>
                              {message.content}
                            </p>
                          </div>
                          {message.role === "user" && (
                            <Avatar className="h-8 w-8 ml-2 bg-maipu-blue">
                              <User className="h-4 w-4 text-white" />
                            </Avatar>
                          )}
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex items-start mb-4">
                          <Avatar className="h-8 w-8 mr-2 bg-maipu-blue/10">
                            <Bot className="h-4 w-4 text-maipu-blue" />
                          </Avatar>
                          <div className="bg-maipu-blue/10 rounded-lg rounded-tl-none p-3 max-w-[80%] flex items-center">
                            <div className="h-2 w-2 bg-maipu-blue rounded-full animate-bounce"></div>
                            <div
                              className="h-2 w-2 bg-maipu-blue rounded-full animate-bounce mx-1"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="h-2 w-2 bg-maipu-blue rounded-full animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {error && (
                        <div className="bg-red-50 text-red-800 p-3 rounded-lg text-sm mb-4">
                          Error: No pude procesar tu mensaje. Por favor, intenta de nuevo.
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {messages.length <= 2 && (
                      <div className="px-4 pb-2">
                        <p className="text-xs text-gray-500 mb-2">Sugerencias rápidas:</p>
                        <div className="flex flex-wrap gap-2">
                          {quickReplies.map((reply) => (
                            <button
                              key={reply.id}
                              onClick={() => handleQuickReply(reply.text)}
                              className="bg-maipu-green/10 hover:bg-maipu-green/20 text-maipu-green text-xs py-1 px-3 rounded-full transition-colors"
                            >
                              {reply.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="border-t border-maipu-blue/20 p-3 flex items-center">
                      <input
                        name="message"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Escribe tu mensaje aquí..."
                        className="flex-1 border border-maipu-blue/20 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        disabled={isLoading}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="ml-2 bg-maipu-blue hover:bg-maipu-blue/80 rounded-full h-9 w-9"
                        disabled={isLoading || !input.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="info" className="flex-1 p-4 overflow-y-auto data-[state=inactive]:hidden">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-maipu-blue mb-2">Sobre este chatbot</h3>
                        <p className="text-gray-600 text-sm">
                          Este asistente virtual utiliza inteligencia artificial avanzada para responder consultas sobre
                          servicios, trámites y gestiones de la Municipalidad de Maipú.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-maipu-blue mb-2">Capacidades</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              <span className="text-maipu-blue text-xs font-bold">✓</span>
                            </div>
                            Información sobre trámites municipales
                          </li>
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              <span className="text-maipu-blue text-xs font-bold">✓</span>
                            </div>
                            Consulta de horarios y ubicaciones
                          </li>
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              <span className="text-maipu-blue text-xs font-bold">✓</span>
                            </div>
                            Información sobre pagos y vencimientos
                          </li>
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              <span className="text-maipu-blue text-xs font-bold">✓</span>
                            </div>
                            Derivación a áreas específicas
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-maipu-blue mb-2">Tecnología</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-maipu-blue/10 p-3 rounded-lg flex items-center">
                            <Brain className="h-5 w-5 text-maipu-blue mr-2" />
                            <span className="text-sm text-gray-700">GPT-4o</span>
                          </div>
                          <div className="bg-maipu-blue/10 p-3 rounded-lg flex items-center">
                            <Code className="h-5 w-5 text-maipu-blue mr-2" />
                            <span className="text-sm text-gray-700">AI SDK</span>
                          </div>
                          <div className="bg-maipu-blue/10 p-3 rounded-lg flex items-center">
                            <MessageSquare className="h-5 w-5 text-maipu-blue mr-2" />
                            <span className="text-sm text-gray-700">Streaming</span>
                          </div>
                          <div className="bg-maipu-blue/10 p-3 rounded-lg flex items-center">
                            <Settings className="h-5 w-5 text-maipu-blue mr-2" />
                            <span className="text-sm text-gray-700">Next.js</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-maipu-blue/10 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-maipu-blue mb-2">Privacidad</h3>
                        <p className="text-gray-600 text-sm">
                          Este chatbot no almacena información personal. Las conversaciones se utilizan únicamente para
                          mejorar el servicio y se eliminan periódicamente.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Card>
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
              Implementa el chatbot en tu departamento
            </h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mejora la atención ciudadana con nuestro asistente virtual inteligente. Personalizable para las
              necesidades específicas de cada área municipal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-white text-maipu-green hover:bg-white/90 shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                Solicitar implementación
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all w-full sm:w-auto"
              >
                Ver documentación técnica
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
