import Link from "next/link"
import { Github } from "lucide-react"

const projects = [
  {
    title: "subash.us",
    url: "subash.us",
    description: "(This website)",
    link: "https://subash.us",
    github: "https://github.com/subashc2023/subash.us",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"]
  },
  {
    title: "Tides of Change",
    url: "cleanup.subash.us",
    description: "An interactive visualization tool for exploring scenarios around ocean plastic waste cleanup efforts. Simulates cleanup budgets, costs, and timelines to understand potential trajectories for addressing global plastic pollution.",
    link: "https://ocean-cleanup-simulator.vercel.app",
    github: "https://github.com/subashc2023/ocean-cleanup-simulator",
    tech: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Shadcn UI"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-16 text-center">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="p-6 rounded-lg border bg-card hover:bg-accent/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    <Link 
                      href={project.link}
                      target="_blank"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 block"
                  >
                    {project.url}
                  </Link>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 