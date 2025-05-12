import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "sizes"> {
  mobileSize?: string
  tabletSize?: string
  desktopSize?: string
  className?: string
}

export function OptimizedImage({
  mobileSize = "100vw",
  tabletSize = "100vw",
  desktopSize = "100vw",
  className,
  ...props
}: OptimizedImageProps) {
  // Construir el string de sizes basado en los breakpoints
  const sizes = `(max-width: 640px) ${mobileSize}, (max-width: 1024px) ${tabletSize}, ${desktopSize}`

  return (
    <Image
      {...props}
      sizes={sizes}
      className={cn("transition-opacity duration-300", className)}
      quality={props.quality || 85}
    />
  )
}
