import { NavItem } from "@/types/nav"

export const siteConfig = {
  name: "Subash Chandra",
  description: "Technical Product Associate & Data Domain Architect at J.P. Morgan Chase",
  email: "subashc2023@gmail.com",
  github: "https://github.com/subashc2023",
  linkedin: "https://www.linkedin.com/in/subashchandra2023/",
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const interests = [
  "Python",
  "Go",
  "Java",
  "C++",
  "AWS",
  "Automation",
] as const 