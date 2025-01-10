import { Award } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ImageContainer } from "@/components/ui/ImageContainer"
import { ExternalLink } from "@/components/ui/ExternalLink"

interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  logo?: string;
  badgeLogo?: string;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issued: "Dec 2022",
    expires: "Dec 2025",
    logo: "/Certifications/amazon_web_services_logo.jpeg",
    badgeLogo: "/Certifications/AWS SAA cert.png",
    verifyUrl: "https://www.credly.com/badges/e25ebf71-dc60-4db3-adeb-4fdfa6255f6e/linked_in_profile"
  },
  {
    name: "Apache Kafka Confluent Fundamentals",
    issuer: "Confluent",
    issued: "Jan 2023",
    expires: "Jan 2026",
    logo: "/Certifications/confluent_logo.jpeg",
    badgeLogo: "/Certifications/Confluent Fundamentals Accreditation • Subash Chandra • Confluent.png",
    verifyUrl: "https://www.credential.net/f2165cbe-8345-4feb-b66a-40120c5f2d7f#acc.z684oRey"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container px-4">
        <SectionHeader title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card hover>
                <div className="flex items-start gap-4">
                  {cert.badgeLogo ? (
                    <ImageContainer
                      src={cert.badgeLogo}
                      alt={`${cert.name} badge`}
                      size="lg"
                      className="shadow-md group-hover:shadow-lg"
                    />
                  ) : cert.logo ? (
                    <ImageContainer
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      size="md"
                      className="shadow-md group-hover:shadow-lg"
                    />
                  ) : (
                    <div className="p-2 rounded-lg bg-primary/10 shadow-md group-hover:shadow-lg transition-all">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                  )}
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium leading-tight group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <ExternalLink.Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                      {cert.issuer}
                    </p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="flex items-center gap-2">
                        <span className="text-xs font-medium uppercase tracking-wider opacity-70">Issued</span>
                        <span className="group-hover:text-foreground transition-colors">{cert.issued}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-xs font-medium uppercase tracking-wider opacity-70">Expires</span>
                        <span className="group-hover:text-foreground transition-colors">{cert.expires}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 