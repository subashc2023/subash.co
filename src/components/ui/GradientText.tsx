import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent",
      className
    )}>
      {children}
    </span>
  )
} 