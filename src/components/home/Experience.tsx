import Image from "next/image"

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

const experiences: Experience[] = [
  {
    title: "Data Domain Architect (Full-time)",
    company: "JPMorgan Chase & Co. ",
    period: "Aug 2023 - Present",
    location: "Plano, Texas · Hybrid",
    description: [
      "Data Lens, Publishing, and Scoring initiatives as a Technical Product Manager for Data Delivery",
      "Develop and maintain data/reporting automation workflows using Alteryx and Python",
      "Create data visualizations and analytics dashboards using Tableau/Python",
      "Manage production deployments and data pipeline optimization",
    ],
    technologies: ["AWS", "Python", "JavaScript", "Alteryx", "Tableau", "Snowflake", "SQL", "Automation"],
    logo: "/companies/jpmorganchase_logo.jpeg"
  },
  {
    title: "DevOps Engineer (Freelance)",
    company: "Upwork",
    period: "Jan 2023 - Jun 2023",
    location: "Remote",
    description: [
      "AWS Certified Solution Architect specializing in serverless architecture",
      "Designed and optimized serverless applications using AWS Lambda, integrating with S3, DynamoDB, API Gateway, Snowflake, and Teradata",
      "Developed CI/CD pipeline for automated multi-environment deployments with parameterized configurations",
      "Facilitated 'de-kubernetization' to improve user configuration experience",
    ],
    technologies: ["AWS", "Lambda", "S3", "DynamoDB", "API Gateway", "Snowflake", "Teradata", "JavaScript", "SQL"],
    logo: "/companies/upwork_logo.jpeg"
  },
  {
    title: "Solutions Architect (Contract)",
    company: "Capital One",
    period: "Jul 2022 - Dec 2022",
    location: "Dallas, Texas · On-site",
    description: [
      "Designed and implemented centralized event logging infrastructure for corporate security team",
      "Created data warehouse using DynamoDB for security event monitoring and vulnerability detection",
      "Developed serverless solutions using AWS Lambda for event processing and analysis",
    ],
    technologies: ["AWS", "AWS Lambda", "DynamoDB", "Python", "Docker", "REST APIs", "Git", "SQL"],
    logo: "/companies/capital_one_logo.jpeg"
  },
  {
    title: "Network and System Engineer (Full-time)",
    company: "Cisco",
    period: "Jul 2020 - Feb 2021",
    location: "Richardson, Texas · On-site",
    description: [
      "Managed user requests and conducted root cause analysis to isolate faults and implement timely fixes",
      "Managed CISCO routers including OS upgrades, connection management, and new device setup",
      "Isolated hardware and software faults across network fabric for efficient issue resolution",
      "Led physical migration of 100+ servers across multiple buildings",
    ],
    technologies: ["Cisco Routers", "Networking", "Routing", "DevOps", "SQL"],
    logo: "/companies/cisco_logo.jpeg"
  },
  {
    title: "DevOps Engineer (Intern)",
    company: "EZOPS Inc",
    period: "Dec 2019 - Jan 2020",
    location: "San Francisco, California · On-site",
    description: [
      "Developed a full-stack log aggregation application for monitoring Docker containers",
      "Implemented unified log viewing across microservices on AWS infrastructure",
      "Utilized ELK stack for centralized logging and monitoring solutions",
    ],
    technologies: ["AWS", "Docker", "ELK Stack", "Kibana", "Logstash", "Git", "SQL"],
    logo: "/companies/ezopsinc_logo.jpeg"
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>
        <div className="space-y-12 max-w-4xl mx-auto relative">
          {/* Single Vertical Line */}
          <div className="absolute left-[200px] top-0 bottom-0 w-[1px] bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-[200px_1fr] gap-8">
              {/* Left Column - Time, Location, and Logo */}
              <div className="space-y-4">
                <div className="space-y-1 relative">
                  {/* Circle */}
                  <div className="absolute right-[-8px] top-[6px] w-[16px] h-[16px] rounded-full border border-border bg-background">
                    {index === 0 && <div className="absolute inset-[3px] rounded-full bg-border" />}
                  </div>
                  <p className="text-sm font-medium">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                {exp.logo && (
                  <div className="relative w-16 h-16 rounded-md border overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Right Column - Experience Details */}
              <div className="space-y-4 pl-8">
                <div>
                  <h3 className="text-lg font-medium leading-tight">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                </div>
                
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 