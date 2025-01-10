import { Github } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink } from "@/components/ui/ExternalLink"

const projects = [
  {
    title: "subash.co",
    url: "subash.co",
    description: "Personal website built with Next.js and Tailwind CSS",
    link: "https://subash.co",
    github: "https://github.com/subashc2023/subash.co",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"]
  },
  {
    title: "Tides of Change",
    url: "cleanup.subash.co",
    description: "An interactive visualization tool for exploring scenarios around ocean plastic waste cleanup efforts. Simulates cleanup budgets, costs, and timelines to understand potential trajectories for addressing global plastic pollution.",
    link: "https://ocean-cleanup-simulator.vercel.app",
    github: "https://github.com/subashc2023/ocean-cleanup-simulator",
    tech: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Shadcn UI"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeader title="Projects" />
        <div className="space-y-8">
          {projects.map((project) => (
            <Card 
              key={project.title}
              className="p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    <ExternalLink href={project.link}>
                      {project.title}
                    </ExternalLink>
                  </h3>
                  <ExternalLink 
                    href={project.link}
                    className="text-sm text-muted-foreground mb-4 block"
                  >
                    {project.url}
                  </ExternalLink>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                <ExternalLink
                  href={project.github}
                  className="text-muted-foreground hover:text-foreground p-2 hover:bg-secondary/50 rounded-full transform hover:scale-110 transition-all"
                >
                  <Github className="h-6 w-6" />
                </ExternalLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 