import { Award, ExternalLink } from 'lucide-react'
import Image from 'next/image'

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
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  {cert.badgeLogo ? (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                      <Image 
                        src={cert.badgeLogo} 
                        alt={`${cert.name} badge`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ) : cert.logo ? (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                      <Image 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
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
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 