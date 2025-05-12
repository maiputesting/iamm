import { OptimizedImage } from "@/components/image-optimized"
import Link from "next/link"

interface CardWithImageProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

export function CardWithImage({ title, description, imageSrc, imageAlt, href }: CardWithImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          fill
          mobileSize="(max-width: 640px) 100vw"
          tabletSize="(max-width: 1024px) 50vw"
          desktopSize="33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-maipu-blue hover:text-maipu-green transition-colors"
        >
          Leer más
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}
