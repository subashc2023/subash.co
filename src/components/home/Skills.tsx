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
        <h2 className="text-3xl font-bold mb-16 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6 min-w-[250px]">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500 ease-out"
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