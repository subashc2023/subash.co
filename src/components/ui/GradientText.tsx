import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "text-primary dark:text-white drop-shadow-sm hover:drop-shadow transition-all",
      className
    )}>
      {children}
    </span>
  )
} 