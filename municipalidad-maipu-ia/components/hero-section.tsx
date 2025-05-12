import { OptimizedImage } from "@/components/image-optimized"

interface HeroSectionProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ title, subtitle, imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          fill
          mobileSize="100vw"
          tabletSize="100vw"
          desktopSize="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maipu-blue/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container h-full flex flex-col justify-center px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-xl">{subtitle}</p>
      </div>
    </section>
  )
}
