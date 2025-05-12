import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AtSign, Building, Mail, MapPin, Phone, Users } from "lucide-react"
import Image from "next/image"

export default function Contacto() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-maipu-green/5 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
            <p className="text-gray-500 md:text-xl/relaxed">Conecta con nuestro equipo de Inteligencia Artificial</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Equipo de IA</h2>
                <p className="text-gray-500">
                  Nuestro equipo multidisciplinario está formado por profesionales especializados en inteligencia
                  artificial, desarrollo de software, análisis de datos y gestión pública. Estamos comprometidos con la
                  transformación digital de nuestra municipalidad para brindar mejores servicios a los ciudadanos.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Building className="h-6 w-6 text-maipu-green" />
                      <div>
                        <h3 className="font-medium">Dirección</h3>
                        <p className="text-sm text-gray-500">
                          Municipalidad de Maipú
                          <br />
                          Pablo Pescara 500
                          <br />
                          Maipú, Mendoza, Argentina
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-maipu-blue" />
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <p className="text-sm text-gray-500">
                          +54 261 497-2600
                          <br />
                          Lunes a Viernes
                          <br />
                          8:00 - 14:00 hs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-maipu-orange" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-gray-500">
                          ia@maipu.gob.ar
                          <br />
                          informatica@maipu.gob.ar
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <AtSign className="h-6 w-6 text-maipu-green" />
                      <div>
                        <h3 className="font-medium">Redes Sociales</h3>
                        <p className="text-sm text-gray-500">
                          @MaipuMendoza
                          <br />
                          @MunicipalidadMaipu
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Nuestro Equipo</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Foto de perfil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Ing. Laura Martínez</h4>
                      <p className="text-sm text-gray-500">Directora de Informática</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Foto de perfil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Dr. Carlos Rodríguez</h4>
                      <p className="text-sm text-gray-500">Especialista en IA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Foto de perfil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Lic. Ana Gómez</h4>
                      <p className="text-sm text-gray-500">Data Scientist</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Foto de perfil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Ing. Pablo Sánchez</h4>
                      <p className="text-sm text-gray-500">Desarrollador Full Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Envíanos un mensaje</h2>
                <p className="text-gray-500">
                  ¿Tienes preguntas sobre nuestras iniciativas de IA? ¿Quieres proponer una colaboración o sugerir
                  mejoras? Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input id="apellido" placeholder="Tu apellido" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="asunto">Asunto</Label>
                  <Input id="asunto" placeholder="Asunto de tu mensaje" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-maipu-green hover:bg-maipu-green/80 text-white">Enviar mensaje</Button>
              </form>

              <div className="rounded-lg border bg-gray-50 p-4">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-maipu-green" />
                  <div>
                    <h3 className="font-medium">¿Interesado en colaborar?</h3>
                    <p className="text-sm text-gray-500">
                      Buscamos constantemente colaboradores para nuestros proyectos de IA. Si eres desarrollador,
                      científico de datos o especialista en IA y quieres contribuir al desarrollo de tu comunidad,
                      contáctanos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ubicación</h2>
            <p className="text-gray-500">Visítanos en la Municipalidad de Maipú</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="h-8 w-8 text-maipu-green" />
                  <p className="text-center text-gray-600">
                    Municipalidad de Maipú
                    <br />
                    Pablo Pescara 500, Maipú, Mendoza, Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
