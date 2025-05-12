# Municipalidad de Maipú - Plataforma de IA

Este proyecto implementa una plataforma web moderna para la iniciativa de IA de la Municipalidad de Maipú.

## Características

- Diseño moderno y responsive
- Chatbot integrado con IA
- Secciones informativas sobre IA y casos de uso
- Panel de administración
- Optimización SEO y de rendimiento

## Requisitos

- Node.js 18 o superior
- npm o yarn

## Instalación

1. Clona este repositorio:
\`\`\`bash
git clone https://github.com/tu-usuario/municipalidad-maipu-ia.git
cd municipalidad-maipu-ia
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Verifica la configuración:
\`\`\`bash
npm run verify
\`\`\`

## Desarrollo

Para iniciar el servidor de desarrollo:

\`\`\`bash
npm run dev
\`\`\`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Compilación para producción

Para compilar la aplicación para producción:

\`\`\`bash
npm run build
\`\`\`

Para iniciar la aplicación compilada:

\`\`\`bash
npm run start
\`\`\`

## Estructura del proyecto

\`\`\`
municipalidad-maipu-ia/
├── app/                  # Rutas y páginas (Next.js App Router)
│   ├── api/              # API endpoints
│   ├── admin/            # Panel de administración
│   ├── casos-uso/        # Página de casos de uso
│   ├── chatbot/          # Página del chatbot
│   ├── contacto/         # Página de contacto
│   ├── que-es-ia/        # Página informativa sobre IA
│   └── ...
├── components/           # Componentes reutilizables
│   ├── chatbot/          # Componentes del chatbot
│   ├── ui/               # Componentes de interfaz
│   └── ...
├── lib/                  # Utilidades y funciones
├── public/               # Archivos estáticos
│   ├── images/           # Imágenes
│   └── ...
├── scripts/              # Scripts de utilidad
└── ...
\`\`\`

## Solución de problemas

Si encuentras algún problema, ejecuta el script de verificación:

\`\`\`bash
npm run verify
\`\`\`

Para verificar el estado del servidor:

\`\`\`
http://localhost:3000/api/health
\`\`\`

Para verificar las imágenes:

\`\`\`
http://localhost:3000/api/check-images
\`\`\`

## Licencia

Este proyecto es propiedad de la Municipalidad de Maipú.
