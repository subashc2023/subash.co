import { NavItem } from "@/types/nav"

export const siteConfig = {
  // Basic Info
  name: "Subash Chandra",
  title: "Technical Product Associate & Data Domain Architect",
  company: "J.P. Morgan Chase",
  location: "Plano, Texas · Hybrid",
  email: "subashc2023@gmail.com",

  // Site Info for google indexing
  url: "https://subash.co",
  description: "Technical Product Associate & Data Domain Architect at J.P. Morgan Chase",
  longDescription: "Personal website of Subash Chandra, a Technical Product Associate and Data Domain Architect at J.P. Morgan Chase. Experienced in Cloud Engineering, AWS, Python, and Data Architecture.",
  
  // Biography
  biography: `A dedicated and analytical engineering professional specializing in Cloud Engineering and Data Architecture. 
  With expertise in AWS, Python, and modern DevOps practices, I focus on implementing technical solutions that 
  enhance data management and system effectiveness. Certified in AWS and Apache Kafka, I excel in automating 
  complex tasks and optimizing data workflows while maintaining high standards of reliability and security. 
  Always seeking ways to transform technical challenges into streamlined, efficient processes that drive 
  business value. I enjoy collaborative development, where diverse perspectives lead to more robust and 
  innovative solutions.`,

  // Social Links
  github: "https://github.com/subashc2023",
  linkedin: "https://www.linkedin.com/in/subashchandra2023/",
  
  // SEO
  keywords: [
    "Subash Chandra",
    "Technical Product Associate",
    "Data Domain Architect",
    "J.P. Morgan Chase",
    "Cloud Engineering",
    "AWS",
    "Python",
    "Data Architecture",
    "DevOps",
    "Software Engineer",
    "Dallas",
    "Texas"
  ] as string[],

  // Theme
  theme: {
    default: "dark",
    light: {
      background: "white",
    },
    dark: {
      background: "#0A0A0A",
    }
  }
} as const;

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Resume", href: "#skills", sections: ["skills", "experience", "certifications"] },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const interests = [
  "Python",
  "Go",
  "Java",
  "C++",
  "AWS",
  "Automation",
] as const; 