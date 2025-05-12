import streamlit as st
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import gradio as gr
import sqlite3
from pathlib import Path

# Configuración de la base de datos
DB_PATH = Path("data/municipalidad.db")
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

def init_db():
    conn = sqlite3.connect(str(DB_PATH))
    c = conn.cursor()
    
    # Crear tablas necesarias
    c.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            nombre TEXT,
            rol TEXT
        )
    ''')
    
    c.execute('''
        CREATE TABLE IF NOT EXISTS consultas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER,
            consulta TEXT NOT NULL,
            respuesta TEXT NOT NULL,
            fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
        )
    ''')
    
    conn.commit()
    conn.close()

# Inicializar la base de datos
init_db()

# Crear la aplicación FastAPI
app = FastAPI(title="Municipalidad de Maipú - API")

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuración de Streamlit
st.set_page_config(
    page_title="Municipalidad de Maipú - IA",
    page_icon="🏛️",
    layout="wide"
)

def main():
    st.title("Municipalidad de Maipú - Portal de IA")
    
    # Sidebar para navegación
    menu = st.sidebar.selectbox(
        "Menú",
        ["Inicio", "Chatbot", "Casos de Uso", "Panel Administrativo"]
    )
    
    if menu == "Inicio":
        mostrar_inicio()
    elif menu == "Chatbot":
        mostrar_chatbot()
    elif menu == "Casos de Uso":
        mostrar_casos_uso()
    elif menu == "Panel Administrativo":
        mostrar_admin()

def mostrar_inicio():
    st.header("Bienvenido al Portal de IA")
    st.write("""
    La Municipalidad de Maipú implementa soluciones de Inteligencia Artificial 
    para mejorar la atención y los servicios a los ciudadanos.
    """)
    
    # Estadísticas
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("Consultas Atendidas", "24,521", "+12.5%")
    with col2:
        st.metric("Tiempo Promedio", "5s", "-30%")
    with col3:
        st.metric("Satisfacción", "95%", "+5%")

def mostrar_chatbot():
    st.header("Asistente Virtual")
    
    # Área de chat
    if "mensajes" not in st.session_state:
        st.session_state.mensajes = []
    
    # Mostrar mensajes previos
    for mensaje in st.session_state.mensajes:
        with st.chat_message(mensaje["role"]):
            st.write(mensaje["content"])
    
    # Input del usuario
    if prompt := st.chat_input("¿En qué puedo ayudarte?"):
        # Agregar mensaje del usuario
        st.session_state.mensajes.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.write(prompt)
        
        # Simular respuesta del asistente
        with st.chat_message("assistant"):
            respuesta = "Estoy aquí para ayudarte con cualquier consulta sobre los servicios municipales."
            st.write(respuesta)
            st.session_state.mensajes.append({"role": "assistant", "content": respuesta})

def mostrar_casos_uso():
    st.header("Casos de Uso de IA")
    
    tab1, tab2, tab3 = st.tabs(["Atención Ciudadana", "Gestión Interna", "Servicios Urbanos"])
    
    with tab1:
        st.subheader("Atención Ciudadana")
        st.write("Implementación de chatbots y sistemas automatizados para mejorar la atención al ciudadano.")
        
    with tab2:
        st.subheader("Gestión Interna")
        st.write("Optimización de procesos administrativos mediante IA y automatización.")
        
    with tab3:
        st.subheader("Servicios Urbanos")
        st.write("Aplicación de IA para mejorar la gestión de servicios urbanos y mantenimiento.")

def mostrar_admin():
    st.header("Panel Administrativo")
    
    if not st.session_state.get("autenticado", False):
        with st.form("login"):
            usuario = st.text_input("Usuario")
            password = st.text_input("Contraseña", type="password")
            if st.form_submit_button("Ingresar"):
                # Aquí iría la lógica de autenticación
                st.session_state.autenticado = True
    else:
        st.subheader("Estadísticas")
        # Aquí irían las estadísticas y métricas del sistema

if __name__ == "__main__":
    main()