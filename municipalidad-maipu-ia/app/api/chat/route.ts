import { OpenAIStream, StreamingTextResponse } from "ai"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

// Información de contexto sobre la municipalidad
const SYSTEM_PROMPT = `Eres el asistente virtual oficial de la Municipalidad de Maipú, Mendoza, Argentina.

INFORMACIÓN IMPORTANTE:
- Dirección: Pablo Pescara 500, Maipú, Mendoza
- Teléfono: +54 261 497-2600
- Horario de atención: Lunes a Viernes de 8:00 a 14:00 hs
- Email: contacto@maipu.gob.ar

TRÁMITES PRINCIPALES:
- Licencias de conducir: Se tramitan con turno previo en el edificio municipal
- Habilitaciones comerciales: Requieren formulario F-01 y certificado de zonificación
- Tasas municipales: Se pueden pagar online en www.maipu.gob.ar/pagos o presencialmente
- Reclamos: Se pueden realizar por la app "Maipú Digital" o llamando al 0800-222-6284

Tu objetivo es ser amable, eficiente y preciso. Si no conoces la respuesta a algo específico, ofrece dirigir al ciudadano al departamento correspondiente o sugerir que se comunique por teléfono o email para información más detallada.

Mantén tus respuestas concisas y directas, idealmente no más de 3-4 oraciones, a menos que se requiera una explicación detallada de un procedimiento.
`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Obtener solo los mensajes recientes para mantener el contexto manejable
    const recentMessages = messages.slice(-10)

    // Generar la respuesta usando AI SDK
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: SYSTEM_PROMPT,
      prompt: recentMessages
        .map((m: any) => `${m.role === "user" ? "Ciudadano" : "Asistente"}: ${m.content}`)
        .join("\n\n"),
      temperature: 0.7,
      maxTokens: 500,
    })

    // Crear un stream para enviar la respuesta de forma progresiva
    const stream = OpenAIStream({
      model: "gpt-4o",
      messages: [{ role: "assistant", content: text }],
    })

    // Devolver la respuesta como un stream
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Error en la API de chat:", error)
    return new Response(JSON.stringify({ error: "Error procesando la solicitud" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
