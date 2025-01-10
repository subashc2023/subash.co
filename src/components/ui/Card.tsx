import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ 
  children, 
  className, 
  hover = true,
  onClick 
}: CardProps) {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-lg",
        hover && "hover:shadow-xl transition-all hover:-translate-y-0.5",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
} 