"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, X, ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./chat-message"
import { useChat } from "ai/react"
import { Brain } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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

  const quickReplies = [
    { id: "1", text: "Trámites municipales" },
    { id: "2", text: "Horarios de atención" },
    { id: "3", text: "Pago de impuestos" },
    { id: "4", text: "Hablar con un agente" },
  ]

  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

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

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (isMinimized) setIsMinimized(false)
  }

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          className={cn(
            "bg-white rounded-2xl shadow-lg border border-maipu-blue/20 w-[350px] sm:w-[400px] transition-all duration-300 mb-4 overflow-hidden",
            isMinimized ? "h-16" : "h-[500px]",
          )}
        >
          <div className="bg-maipu-blue p-3 flex justify-between items-center cursor-pointer" onClick={toggleMinimize}>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <Brain className="h-4 w-4 text-maipu-green" />
              </div>
              <h3 className="text-white font-medium">Asistente Municipal</h3>
            </div>
            <div className="flex items-center">
              {isMinimized ? (
                <ChevronUp className="h-5 w-5 text-white hover:bg-maipu-blue/90 rounded-full p-1" />
              ) : (
                <ChevronDown className="h-5 w-5 text-white hover:bg-maipu-blue/90 rounded-full p-1" />
              )}
              <X
                className="h-5 w-5 text-white ml-1 hover:bg-maipu-blue/90 rounded-full p-1"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
              />
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 h-[calc(100%-120px)]">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message.content} isUser={message.role === "user"} />
                ))}
                {isLoading && (
                  <div className="flex items-start mb-4">
                    <Avatar className="h-8 w-8 mr-2 bg-maipu-blue/10">
                      <Bot className="h-4 w-4 text-maipu-blue" />
                    </Avatar>
                    <div className="bg-maipu-blue/5 rounded-lg rounded-tl-none p-3 max-w-[80%] flex items-center">
                      <Loader2 className="h-4 w-4 text-maipu-blue animate-spin" />
                      <span className="ml-2 text-sm text-gray-600">Escribiendo...</span>
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
                  className="flex-1 border border-maipu-blue/20 rounded-full py-2 px-4 focus:outline-none focus:ring-maipu-blue text-sm"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="ml-2 bg-maipu-green hover:bg-maipu-green/80 rounded-full h-9 w-9"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      )}

      <Button
        onClick={toggleChat}
        className={cn(
          "rounded-full h-14 w-14 shadow-lg transition-all duration-300",
          isOpen ? "bg-maipu-green hover:bg-maipu-green/80" : "bg-maipu-blue hover:bg-maipu-blue/80",
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>
    </div>
  )
}
