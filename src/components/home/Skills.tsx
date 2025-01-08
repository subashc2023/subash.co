interface Skill {
  name: string;
  progress: number; // 0 to 100
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", progress: 95 },
      { name: "Go", progress: 85 },
      { name: "Java", progress: 75 },
      { name: "C++", progress: 70 },
      { name: "JavaScript", progress: 80 },
      { name: "TypeScript", progress: 80 },
      { name: "SQL", progress: 85 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git", progress: 95 },
      { name: "AWS", progress: 90 },
      { name: "Docker", progress: 85 },
      { name: "Ansible", progress: 70 },
      { name: "Jenkins", progress: 70 },
      { name: "Grafana", progress: 80 },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Linux", progress: 95 },
      { name: "Networking", progress: 90 },
      { name: "Terraform", progress: 85 },
      { name: "Kubernetes", progress: 80 },
      { name: "Cloudflare", progress: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="space-y-6 min-w-[250px] p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 group hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ease-out group-hover:shadow-lg"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 