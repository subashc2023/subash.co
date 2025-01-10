import { cn } from "@/lib/utils"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ImageContainerProps {
  src: string
  alt: string
  href?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  objectFit?: "cover" | "contain"
  priority?: boolean
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
  xl: "w-full h-full"
}

const sizesMap = {
  sm: "48px",
  md: "64px",
  lg: "80px",
  xl: "224px"
}

export function ImageContainer({ 
  src, 
  alt, 
  href, 
  size = "md",
  className,
  objectFit = "contain",
  priority = false
}: ImageContainerProps) {
  const Container = href ? "a" : "div"
  const containerProps = href ? {
    href,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <Container
      {...containerProps}
      className={cn(
        "relative rounded-lg border overflow-hidden group/image shadow-md hover:shadow-xl transition-shadow bg-background flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={size === "sm" ? 48 : size === "md" ? 64 : size === "lg" ? 80 : 224}
        height={size === "sm" ? 48 : size === "md" ? 64 : size === "lg" ? 80 : 224}
        priority={priority}
        sizes={sizesMap[size]}
        className={cn(
          "transition-transform group-hover/image:scale-110",
          objectFit === "contain" ? "object-contain p-1" : "object-cover"
        )}
      />
      {href && (
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <ExternalLink className="w-4 h-4 text-primary" />
        </div>
      )}
    </Container>
  )
} 