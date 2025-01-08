import type { ReactElement } from 'react'

export interface NavItem {
  name: string;
  href: string;
  sections?: string[];
}

export interface SocialLink {
  href: string;
  icon: ReactElement;
  label: string;
} 