"use client"

import { ChevronDown } from "lucide-react"
import { SocialLinks } from "./SocialLinks"
import { interests, siteConfig } from "@/config/site"
import { Card } from "@/components/ui/Card"
import { GradientText } from "@/components/ui/GradientText"
import { Badge } from "@/components/ui/Badge"
import { ImageContainer } from "@/components/ui/ImageContainer"

export default function Hero() {
  const scrollToSkills = () => {
    const element = document.querySelector('#skills')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
      <div className="container px-4 sm:px-6 md:px-8">
        <Card className="p-8" hover={false}>
          {/* Center Line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-[1px] bg-border hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Profile */}
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {/* Profile Picture */}
              <div className="relative w-48 sm:w-56 h-48 sm:h-56">
                <ImageContainer
                  src="/profile.jpg"
                  alt="Profile picture"
                  size="xl"
                  className="absolute inset-0 rounded-full border-2 border-border ring-2 ring-primary/10 shadow-2xl"
                  objectFit="cover"
                  priority
                />
              </div>
              
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  <GradientText>{siteConfig.name}</GradientText>
                </h1>
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl text-muted-foreground">Technical Product Associate</p>
                  <p className="text-lg sm:text-xl text-muted-foreground">Data Domain Architect</p>
                  <p className="text-base sm:text-lg text-muted-foreground">J.P. Morgan Chase</p>
                </div>
              </div>

              <SocialLinks />
            </div>

            {/* Right Column - About */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  <GradientText className="from-foreground to-foreground/70">About Me</GradientText>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.biography}
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  <GradientText className="from-foreground to-foreground/70">Interests</GradientText>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest}>{interest}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors p-8 group"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-10 h-10 animate-[bounce_2s_ease-in-out_infinite] group-hover:scale-110 transition-transform" />
      </button>
    </section>
  )
} 