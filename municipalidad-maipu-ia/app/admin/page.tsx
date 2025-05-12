import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, FileText, Lock, Settings, Users, LineChart, PieChart, Activity, MessageSquare } from "lucide-react"

export default function AdminPanel() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-maipu-blue/5 to-white py-16 md:py-20 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-maipu-blue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-maipu-green/20 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-maipu-blue/10 rounded-full mb-4">
              <div className="rounded-full bg-maipu-blue/20 p-2">
                <Settings className="h-6 w-6 text-maipu-blue" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
              Panel de Administración Interna
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed">
              Gestión centralizada de contenidos, usuarios y análisis de datos
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="sso" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 p-1 bg-maipu-blue/5">
                <TabsTrigger
                  value="sso"
                  className="data-[state=active]:bg-maipu-blue data-[state=active]:text-white rounded-lg py-3 px-4"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  SSO Municipal
                </TabsTrigger>
                <TabsTrigger
                  value="cms"
                  className="data-[state=active]:bg-maipu-orange data-[state=active]:text-white rounded-lg py-3 px-4"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  CMS Headless
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-maipu-green data-[state=active]:text-white rounded-lg py-3 px-4"
                >
                  <BarChart className="mr-2 h-5 w-5" />
                  Métricas y Analytics
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sso" className="space-y-8">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-maipu-blue/10 px-3 py-1 text-sm text-maipu-black shadow-sm">
                    Autenticación Segura
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">SSO Municipal</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Inicio de sesión único con OAuth2/OIDC que permite a los funcionarios municipales acceder a todas
                    las plataformas con una sola autenticación, mejorando la seguridad y experiencia de usuario.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Autenticación multifactor</span>
                        <p className="text-gray-600 mt-1">
                          Seguridad adicional con verificación en dos pasos para proteger cuentas sensibles.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Control de acceso basado en roles</span>
                        <p className="text-gray-600 mt-1">
                          Permisos granulares según el departamento y función del empleado municipal.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Auditoría de accesos</span>
                        <p className="text-gray-600 mt-1">
                          Registro detallado de todas las sesiones y acciones para cumplimiento normativo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[400px] w-full max-w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
                  <div className="relative h-full w-full rounded-2xl border border-blue-100 bg-white shadow-soft overflow-hidden z-10 p-6">
                    <div className="h-14 bg-maipu-blue rounded-lg flex items-center px-4 mb-6">
                      <Lock className="h-6 w-6 text-white mr-2" />
                      <h3 className="text-white font-medium">Portal de Autenticación Municipal</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
                        <div className="relative">
                          <input
                            type="email"
                            className="w-full border border-blue-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="usuario@maipu.gob.ar"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Contraseña</label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full border border-blue-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 text-maipu-blue focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                            Recordarme
                          </label>
                        </div>
                        <a href="#" className="text-sm font-medium text-maipu-blue hover:text-blue-500">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <Button className="w-full bg-maipu-blue hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
                        Iniciar sesión
                      </Button>
                      <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative px-4 bg-white">
                          <span className="text-sm text-gray-500">O continuar con</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="border-blue-200">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </Button>
                        <Button variant="outline" className="border-blue-200">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <path
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              fill="#4285F4"
                            />
                            <path
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              fill="#34A853"
                            />
                            <path
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              fill="#EA4335"
                            />
                          </svg>
                          Google
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cms" className="space-y-8">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-maipu-blue/10 px-3 py-1 text-sm text-maipu-black shadow-sm">
                    Gestión de Contenidos
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">CMS Headless</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Creación y edición de contenidos con Markdown + WYSIWYG, permitiendo a los administradores
                    actualizar la información del portal sin necesidad de conocimientos técnicos.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Editor visual intuitivo</span>
                        <p className="text-gray-600 mt-1">
                          Interfaz amigable tipo Word con todas las herramientas de formato necesarias.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Gestión de medios centralizada</span>
                        <p className="text-gray-600 mt-1">
                          Biblioteca de imágenes, documentos y videos con búsqueda avanzada.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Flujos de aprobación</span>
                        <p className="text-gray-600 mt-1">
                          Sistema de revisión y publicación con roles de editor y aprobador.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[400px] w-full max-w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
                  <div className="relative h-full w-full rounded-2xl border border-blue-100 bg-white shadow-soft overflow-hidden z-10 p-6">
                    <div className="h-14 bg-maipu-blue rounded-lg flex items-center px-4 mb-6">
                      <FileText className="h-6 w-6 text-white mr-2" />
                      <h3 className="text-white font-medium">Editor de Contenidos</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Título</label>
                        <input
                          type="text"
                          className="w-full border border-blue-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Ingrese el título del artículo"
                          value="Nuevos servicios digitales en la Municipalidad"
                        />
                      </div>
                      <div className="border border-blue-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 border-b border-blue-200 p-2 flex items-center space-x-1">
                          <button className="p-1.5 rounded hover:bg-blue-100">
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 12h12M6 18h12M6 6h12"
                              ></path>
                            </svg>
                          </button>
                          <button className="p-1.5 rounded hover:bg-blue-100">
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                              ></path>
                            </svg>
                          </button>
                          <span className="h-4 w-px bg-gray-300 mx-1"></span>
                          <button className="p-1.5 rounded hover:bg-blue-100 font-bold">B</button>
                          <button className="p-1.5 rounded hover:bg-blue-100 italic">I</button>
                          <button className="p-1.5 rounded hover:bg-blue-100 underline">U</button>
                          <span className="h-4 w-px bg-gray-300 mx-1"></span>
                          <button className="p-1.5 rounded hover:bg-blue-100">
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101"
                              ></path>
                            </svg>
                          </button>
                          <button className="p-1.5 rounded hover:bg-blue-100">
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 16l6-6M4 8h16"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <textarea
                          className="w-full p-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Escriba el contenido aquí..."
                        >
                          La Municipalidad de Maipú se complace en anunciar el lanzamiento de nuevos servicios digitales
                          para mejorar la experiencia ciudadana. Estos servicios incluyen trámites en línea, consultas
                          automatizadas y un sistema de seguimiento de solicitudes.
                        </textarea>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" className="border-blue-200">
                          Guardar borrador
                        </Button>
                        <Button className="bg-maipu-blue hover:bg-blue-700 text-white">Publicar</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-maipu-blue/10 px-3 py-1 text-sm text-maipu-black shadow-sm">
                    Análisis de Datos
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                    Métricas y Analytics
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Dashboards con Recharts para visitas y uso del chatbot, proporcionando insights valiosos sobre el
                    comportamiento de los usuarios y la efectividad de los servicios municipales.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Análisis en tiempo real</span>
                        <p className="text-gray-600 mt-1">
                          Monitoreo instantáneo de interacciones y rendimiento del sistema.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Informes personalizables</span>
                        <p className="text-gray-600 mt-1">
                          Creación de reportes específicos según las necesidades de cada departamento.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-maipu-blue/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-maipu-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Exportación de datos</span>
                        <p className="text-gray-600 mt-1">
                          Descarga de información en múltiples formatos para análisis externos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto lg:mx-0 relative h-[400px] w-full max-w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
                  <div className="relative h-full w-full rounded-2xl border border-blue-100 bg-white shadow-soft overflow-hidden z-10 p-6">
                    <div className="h-14 bg-maipu-blue rounded-lg flex items-center px-4 mb-6">
                      <BarChart className="h-6 w-6 text-white mr-2" />
                      <h3 className="text-white font-medium">Dashboard de Análisis</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-maipu-blue/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Visitas Totales</span>
                          <Users className="h-4 w-4 text-maipu-blue" />
                        </div>
                        <p className="text-2xl font-bold text-maipu-black">24,521</p>
                        <span className="text-xs text-green-600 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            ></path>
                          </svg>
                          12.5% vs mes anterior
                        </span>
                      </div>
                      <div className="bg-maipu-blue/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Consultas Chatbot</span>
                          <MessageSquare className="h-4 w-4 text-maipu-blue" />
                        </div>
                        <p className="text-2xl font-bold text-maipu-black">8,342</p>
                        <span className="text-xs text-green-600 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            ></path>
                          </svg>
                          18.3% vs mes anterior
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Visitas por Página</span>
                          <LineChart className="h-4 w-4 text-maipu-blue" />
                        </div>
                        <div className="h-32 w-full bg-white rounded border border-gray-200 p-2">
                          <div className="flex h-full items-end space-x-2">
                            <div className="w-1/6 h-[30%] bg-maipu-blue rounded-t"></div>
                            <div className="w-1/6 h-[60%] bg-maipu-blue rounded-t"></div>
                            <div className="w-1/6 h-[45%] bg-maipu-blue rounded-t"></div>
                            <div className="w-1/6 h-[80%] bg-maipu-blue rounded-t"></div>
                            <div className="w-1/6 h-[65%] bg-maipu-blue rounded-t"></div>
                            <div className="w-1/6 h-[90%] bg-maipu-blue rounded-t"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Temas de Consulta</span>
                          <PieChart className="h-4 w-4 text-maipu-blue" />
                        </div>
                        <div className="flex items-center justify-center h-32">
                          <div className="relative w-24 h-24">
                            <div
                              className="absolute inset-0 rounded-full border-8 border-maipu-blue"
                              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-8 border-cyan-400"
                              style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)" }}
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-8 border-blue-300"
                              style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 50%)" }}
                            ></div>
                          </div>
                          <div className="ml-4 space-y-2">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-maipu-blue mr-2"></div>
                              <span className="text-xs">Trámites</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-cyan-400 mr-2"></div>
                              <span className="text-xs">Servicios</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-blue-300 mr-2"></div>
                              <span className="text-xs">Pagos</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-maipu-green to-maipu-green/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
              <div className="rounded-full bg-white/20 p-2">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Potencia tu gestión con datos
            </h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestro panel de administración te brinda todas las herramientas necesarias para gestionar contenidos,
              usuarios y analizar el rendimiento de tus servicios digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-white text-maipu-green hover:bg-white/90 shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                Solicitar acceso
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all w-full sm:w-auto"
              >
                Ver demostración
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
