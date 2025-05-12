import gradio as gr
import requests
from typing import List, Tuple

def chat_interface():
    # Configuración del chatbot
    def responder(mensaje: str, history: List[Tuple[str, str]]) -> str:
        # Hacer la petición al backend
        response = requests.post(
            "http://localhost:8000/chat",
            json={"mensaje": mensaje}
        )
        return response.json()["respuesta"]
    
    # Crear la interfaz
    demo = gr.ChatInterface(
        fn=responder,
        title="Asistente Virtual Municipal",
        description="Consulta información sobre servicios y trámites municipales",
        theme=gr.themes.Soft(
            primary_hue="blue",
            secondary_hue="green",
        ),
        examples=[
            ["¿Cuál es el horario de atención?"],
            ["¿Cómo puedo pagar mis impuestos?"],
            ["¿Dónde puedo hacer un reclamo?"],
        ],
        retry_btn=None,
        undo_btn=None,
        clear_btn="Limpiar conversación",
    )
    
    return demo

if __name__ == "__main__":
    demo = chat_interface()
    demo.launch(share=True, server_port=7860)