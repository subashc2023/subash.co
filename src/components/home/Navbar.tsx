"use client"

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeToggle } from '@/components/theme'
import { navItems } from '@/config/site'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string;
  href: string;
  sections?: string[];
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handle intersection observer setup
  useEffect(() => {
    const sectionRatios = new Map<string, number>()
    let debounceTimeout: NodeJS.Timeout

    // Function to check if we're at the bottom of the page
    const isAtBottom = () => {
      const threshold = 50; // pixels from bottom
      return (window.innerHeight + window.pageYOffset) >= 
        document.documentElement.scrollHeight - threshold;
    }

    // Function to handle scroll events
    const handleScroll = () => {
      if (isAtBottom()) {
        setActiveSection('contact')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Clear any pending timeout
        if (debounceTimeout) {
          clearTimeout(debounceTimeout)
        }

        // Update ratios for each section
        entries.forEach((entry) => {
          sectionRatios.set(entry.target.id, entry.intersectionRatio)
        })

        // Debounce the section update to avoid rapid changes
        debounceTimeout = setTimeout(() => {
          // Don't update if we're at the bottom of the page
          if (isAtBottom()) {
            setActiveSection('contact')
            return
          }

          // Special case for top of page
          if (window.scrollY < 100) {
            setActiveSection('hero')
            return
          }

          // Find all sections with significant visibility
          const visibleSections: { id: string; ratio: number }[] = []
          sectionRatios.forEach((ratio, id) => {
            if (ratio > 0.15) { // Increased threshold for better accuracy
              visibleSections.push({ id, ratio })
            }
          })

          if (visibleSections.length === 0) return

          // Sort sections by their position in the document
          visibleSections.sort((a, b) => {
            const elA = document.getElementById(a.id)
            const elB = document.getElementById(b.id)
            if (!elA || !elB) return 0
            return elA.getBoundingClientRect().top - elB.getBoundingClientRect().top
          })

          // Select the first visible section with significant visibility
          const topSection = visibleSections[0]
          if (topSection && topSection.ratio >= 0.15) {
            setActiveSection(topSection.id)
          }
        }, 100) // Debounce time
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.15, 0.5, 0.8, 1]
      }
    )

    try {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        observer.observe(section)
        sectionRatios.set(section.id, 0)
      })

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        if (debounceTimeout) {
          clearTimeout(debounceTimeout)
        }
        sections.forEach((section) => observer.unobserve(section))
        window.removeEventListener('scroll', handleScroll)
      }
    } catch (error) {
      console.error('Error setting up intersection observer:', error)
    }
  }, [])

  // Handle scroll functionality
  const handleScrollTo = useCallback(async (
    e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    try {
      // Close mobile menu if open
      setIsMobileMenuOpen(false)

      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        await router.push('/')
      }

      // Handle hash navigation
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          setActiveSection(href.substring(1))
        }
      }
    } catch (error) {
      console.error('Error during scroll navigation:', error)
    }
  }, [pathname, router])

  // Handle keyboard navigation
  const handleKeyPress = (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleScrollTo(e, href)
    }
  }

  const isNavItemActive = (item: NavItem) => {
    if (item.sections) {
      return item.sections.includes(activeSection);
    }
    return activeSection === item.href.substring(1);
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <ul className={`flex ${mobile ? 'flex-col items-center gap-6' : 'items-center justify-center gap-8'}`}>
      {navItems.map((item: NavItem) => {
        const isActive = isNavItemActive(item);
        return (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              onKeyDown={(e) => handleKeyPress(e, item.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                isActive ? 'text-foreground' : 'text-foreground/60'
              }`}
              role="menuitem"
              tabIndex={0}
            >
              {item.name}
            </a>
            {isActive && !mobile && (
              <div className="absolute -bottom-[19px] left-0 right-0 h-[2px] bg-primary rounded-full" />
            )}
          </li>
        )
      })}
    </ul>
  )

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-base font-bold tracking-wide hover:text-foreground/80 transition-all duration-200"
            aria-label="Home"
          >
            SC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block mx-4 flex-1" aria-label="Main navigation" role="navigation">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4"
            aria-label="Mobile navigation"
            role="navigation"
          >
            <NavLinks mobile />
          </nav>
        )}
      </div>
    </header>
  )
} 