import { cn } from "@/lib/utils"
import { ExternalLink as ExternalLinkIcon } from "lucide-react"

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  iconClassName?: string
}

export function ExternalLink({ href, children, className, iconClassName }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 group/link",
        className
      )}
    >
      {children}
      <ExternalLinkIcon className={cn(
        "w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5",
        iconClassName
      )} />
    </a>
  )
}

// Icon component for standalone use
ExternalLink.Icon = ExternalLinkIcon 