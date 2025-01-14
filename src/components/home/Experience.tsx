import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { GradientText } from "@/components/ui/GradientText"
import { Badge } from "@/components/ui/Badge"
import { ImageContainer } from "@/components/ui/ImageContainer"
import { ExternalLink } from "@/components/ui/ExternalLink"

interface Experience {
  title: string;
  company: string;
  companyInfo?: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string;
  website?: string;
}

// Helper function to calculate duration
function calculateDuration(period: string): string {
  const [start, end] = period.split(" - ");
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 
    + (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  return years === 0 ? `${remainingMonths}mo` 
    : remainingMonths === 0 ? `${years}yr` 
    : `${years}yr ${remainingMonths}mo`;
}

// Helper function to extract status from title
function extractStatus(title: string): string {
  const match = title.match(/\((.*?)\)/);
  return match ? match[1] : 'Full-time';
}

// Helper function to get status color
function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'intern':
      return 'bg-blue-500/10 text-blue-500';
    case 'contract':
      return 'bg-purple-500/10 text-purple-500';
    case 'freelance':
      return 'bg-green-500/10 text-green-500';
    case 'full-time':
    default:
      return 'bg-primary/10 text-primary';
  }
}

const experiences: Experience[] = [
  {
    company: "JPMorgan Chase",
    website: "https://www.jpmorganchase.com",
    title: "Data Domain Architect - Data Delivery",
    companyInfo: "JPMorgan Chase is the largest bank in the United States and the 5th largest bank in the world. The Consumer & Community Banking (CCB) business has been one of the most aggressive financial institutions in its commitment to leveraging data and analytics to deliver value to its customers and the business.",
    period: "Aug 2023 - Present",
    location: "Plano, Texas · Hybrid",
    description: [
      "Technical Product Associate on the Data Delivery team, working on Data Lens (formerly COBRA) our Data Publishing and Scoring initiative - the enterprise metadata management and data quality scoring application responsible for all JPMC data",
      "Drive continuous data modernization efforts to make the firm's data more Findable, Accessible, Interoperable, and Reusable (FAIR principles)",
      "Design and implement solutions for metadata management across relational and graph databases to enhance data discovery and quality assessment. Leveraged knowledge graphs to create recommendation engines to increase user efficiency",
      "Develop and maintain automated workflows for data quality scoring and reporting using Alteryx, Python, SQL, and Tableau",
    ],
    technologies: ["AWS", "Python", "RDF - Resource Description Framework", "Alteryx", "Tableau", "SQL"],
    logo: "/companies/jpmorganchase_logo.jpeg"
  },
  {
    title: "DevOps Engineer (Freelance)",
    company: "Upwork",
    website: "https://www.upwork.com",
    companyInfo: "Started freelancing after successfully building a serverless application for a relative. Continued taking on projects for fun while completing my final semester of college, helping clients modernize their infrastructure and reduce costs.",
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
    website: "https://www.capitalone.com",
    companyInfo: "Capital One is a Fortune 100 company and one of the largest banks in the United States. As a technology-first financial institution, they are known for their innovative approach to banking and strong emphasis on cloud-native solutions and cybersecurity.",
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
    website: "https://www.cisco.com",
    companyInfo: "Cisco Systems is the global leader in networking technology, powering the internet and enterprise networks worldwide. Their Richardson campus is one of their largest engineering sites, responsible for developing and maintaining critical networking infrastructure used by organizations around the world.",
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
    website: "https://www.ezops.com",
    companyInfo: "EZOPS is a pioneering fintech company that harnesses machine learning and intelligent process automation to revolutionize data control in financial services. As one of the first FinTech firms to offer AI-enabled reconciliation and automation solutions, they serve some of the world's largest financial institutions with their comprehensive data control platform covering reconciliation, research, remediation, and reporting.",
    period: "Dec 2019 - Jan 2020",
    location: "San Francisco, California · On-site",
    description: [
      "Developed a full-stack log aggregation application for monitoring Docker containers",
      "Implemented unified log viewing across microservices on AWS infrastructure",
      "Utilized ELK stack for centralized logging and monitoring solutions",
    ],
    technologies: ["AWS", "Docker", "ELK Stack", "Kibana", "Logstash", "Git", "SQL"],
    logo: "/companies/ezopsinc_logo.jpeg"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <SectionHeader title="Experience" />
        <div className="space-y-12 max-w-6xl mx-auto relative">
          {/* Single Vertical Line */}
          <div className="absolute left-[200px] top-0 bottom-0 w-[1px] bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-[200px_1fr] gap-8 group">
              {/* Left Column - Time, Location, and Logo */}
              <div>
                <div className="space-y-1 relative mb-4">
                  {/* Circle with pulse effect for current position */}
                  <div className="absolute right-[-8px] top-[6px] w-[16px] h-[16px] rounded-full border-2 border-primary/50 bg-background shadow-lg">
                    {index === 0 && (
                      <>
                        <div className="absolute inset-[3px] rounded-full bg-primary animate-pulse" />
                        <div className="absolute -inset-2 rounded-full border border-primary/20 animate-ping" />
                      </>
                    )}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{exp.period}</p>
                  <div className="flex items-center gap-1.5">
                    <Badge className={getStatusColor(extractStatus(exp.title))}>
                      {extractStatus(exp.title)}
                    </Badge>
                    <span className="text-xs text-muted-foreground/80 italic">
                      {calculateDuration(exp.period)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>

                {exp.logo && (
                  <ImageContainer
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    href={exp.website}
                    size="md"
                    priority={index < 2}
                    className="mt-4"
                  />
                )}
              </div>

              {/* Right Column - Experience Details Card */}
              <div className="relative pl-8 group-hover:-translate-y-1 transition-transform duration-300">
                <Card className="p-6 -mt-[22px]" hover={false}>
                  {/* Company and Role */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {exp.website ? (
                        <ExternalLink href={exp.website}>
                          {exp.company}
                        </ExternalLink>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <p className="text-lg font-medium">
                      <GradientText className="from-foreground to-foreground/70">
                        {exp.title.replace(/\s*\(.*?\)\s*/, '')}
                      </GradientText>
                    </p>
                    {exp.companyInfo && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.companyInfo}
                      </p>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3 mt-6">
                    <h4 className="text-base font-medium">Responsibilities</h4>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed hover:text-foreground transition-colors">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 mt-6">
                    <h4 className="text-base font-medium">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 