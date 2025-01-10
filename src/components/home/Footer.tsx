import { siteConfig } from '@/config/site'
import { ExternalLink } from '@/components/ui/ExternalLink'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-auto md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              This website is{" "}
              <ExternalLink
                href="https://github.com/subashc2023/subash.co"
                className="text-primary hover:underline"
              >
                open source
              </ExternalLink>
              {" "}— feel free to use it as a template for your own portfolio!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ExternalLink
              href={siteConfig.github}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={siteConfig.linkedin}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </ExternalLink>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 