import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium bg-secondary/50 shadow-sm hover:shadow hover:bg-secondary/70 transition-all duration-200",
        className
      )}
    >
      {children}
    </span>
  )
} 