import { cn } from "@/lib/utils"
import { GradientText } from "./GradientText"

interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <h2 className={cn("text-3xl font-bold mb-16 text-center", className)}>
      <GradientText>{title}</GradientText>
    </h2>
  )
} 