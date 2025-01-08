import { Award, ExternalLink } from 'lucide-react'

interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  logo?: string;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issued: "Dec 2022",
    expires: "Dec 2025",
    logo: "/Certifications/amazon_web_services_logo.jpeg",
    verifyUrl: "https://www.credly.com/badges/e25ebf71-dc60-4db3-adeb-4fdfa6255f6e/linked_in_profile"
  },
  {
    name: "Apache Kafka Confluent Fundamentals",
    issuer: "Confluent",
    issued: "Jan 2023",
    expires: "Jan 2026",
    logo: "/Certifications/confluent_logo.jpeg",
    verifyUrl: "https://www.credential.net/f2165cbe-8345-4feb-b66a-40120c5f2d7f#acc.z684oRey"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.name}
              className="p-6 rounded-lg border bg-card hover:bg-accent/10 transition-colors group"
            >
              <div className="flex items-start gap-4">
                {cert.logo ? (
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} logo`}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <Award className="w-12 h-12 text-primary" />
                )}
                <div className="space-y-2 flex-grow">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium leading-tight">{cert.name}</h3>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="Verify certification"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="text-sm text-muted-foreground">
                    <p>Issued: {cert.issued}</p>
                    <p>Expires: {cert.expires}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 