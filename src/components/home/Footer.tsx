import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 