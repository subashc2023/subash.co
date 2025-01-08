import { NavItem } from "@/types/nav"

export const siteConfig = {
  // Basic Info
  name: "Subash Chandra",
  title: "Technical Product Associate & Data Domain Architect",
  company: "J.P. Morgan Chase",
  location: "Plano, Texas · Hybrid",
  email: "subashc2023@gmail.com",

  // Site Info
  url: "https://subash.co",
  description: "Technical Product Associate & Data Domain Architect at J.P. Morgan Chase",
  longDescription: "Personal website of Subash Chandra, a Technical Product Associate and Data Domain Architect at J.P. Morgan Chase. Experienced in Cloud Engineering, AWS, Python, and Data Architecture.",
  
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