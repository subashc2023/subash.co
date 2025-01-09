"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { SocialLinks } from "./SocialLinks"
import { interests, siteConfig } from "@/config/site"

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
        <div className="p-8 rounded-xl border bg-card/50 backdrop-blur-sm shadow-lg transition-all duration-300 relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-[1px] bg-border hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Profile */}
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {/* Profile Picture */}
              <div className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-full border-2 border-border overflow-hidden shadow-2xl ring-2 ring-primary/10">
                <Image
                  src="/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {siteConfig.name}
                </h1>
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl text-muted-foreground">Technical Product Associate</p>
                  <p className="text-lg sm:text-xl text-muted-foreground">Data Domain Architect</p>
                  <p className="text-base sm:text-lg text-muted-foreground">J.P. Morgan Chase</p>
                </div>
              </div>

              <SocialLinks />
            </div>

            {/* Right Column - Biography */}
            <div className="flex flex-col gap-6 sm:gap-8 md:pl-16">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Biography</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A dedicated and analytical engineering professional specializing in Cloud Engineering and Data Architecture. 
                  With expertise in AWS, Python, and modern DevOps practices, I focus on implementing technical solutions that 
                  enhance data management and system effectiveness. Certified in AWS and Apache Kafka, I excel in automating 
                  complex tasks and optimizing data workflows while maintaining high standards of reliability and security. 
                  Always seeking ways to transform technical challenges into streamlined, efficient processes that drive 
                  business value. I enjoy collaborative development, where diverse perspectives lead to more robust and 
                  innovative solutions.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Education</h2>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">BSc in Computer Science</p>
                  <p className="text-muted-foreground">University of Texas at Dallas (Aug 2023)</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center rounded-md border px-3 py-1 text-sm shadow-sm hover:shadow transition-shadow duration-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-8"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-12 h-12 animate-[bounce_2s_ease-in-out_infinite]" />
      </button>
    </section>
  )
} 