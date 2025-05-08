import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimateInView } from "@/components/ui/animate-in-view"

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  skills: string[]
}

const certifications: Certification[] = [
  {
    name: "Python Intermediate",
    issuer: "Sololearn",
    date: "March 2025",
    credentialId: "CC-BOFWW3KW",
    credentialUrl: "https://www.sololearn.com/en/certificates/CC-BOFWW3KW",
    skills: ["Python", "OOP", "Data Structures", "Algorithms"],
  },
  {
    name: "Backend (Node.js)",
    issuer: "MySkill.id",
    date: "February 2025",
    credentialId: "MS-12/2/2025-HiLkioRZJunwhfnK1oVvv",
    credentialUrl: "https://drive.google.com/file/d/1asUwqYMtn6lkB9EcRi1OImD7U9LD0Mci/view",
    skills: ["Node.js", "Express.js", "REST API", "Backend Development"],
  },
  {
    name: "Intermediate SQL",
    issuer: "Sololearn",
    date: "February 2025",
    credentialId: "CC-PS1ZOHFR",
    credentialUrl: "https://www.sololearn.com/en/certificates/CC-PS1ZOHFR",
    skills: ["SQL", "Database", "Query Optimization"],
  },
  {
    name: "Prompt Engineering",
    issuer: "Sololearn",
    date: "February 2025",
    credentialId: "CC-OECBMSQW",
    credentialUrl: "https://www.sololearn.com/en/certificates/CC-OECBMSQW",
    skills: ["Prompt Engineering", "AI", "Natural Language Processing"],
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-[#616161] dark:text-[#cccccc] max-w-2xl mx-auto">
              Professional certifications and courses I've completed to enhance my skills.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimateInView key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-[#3498db] mt-1" />
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <p className="text-sm text-[#616161] dark:text-[#cccccc]">{cert.issuer}</p>
                      <div className="flex items-center text-xs text-[#616161] dark:text-[#cccccc] mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs transition-all duration-300 hover:bg-[#3498db]/20 hover:text-[#3498db]"
                        style={{
                          transitionDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {cert.credentialUrl && (
                  <CardFooter className="pt-2 border-t">
                    <div className="w-full flex justify-between items-center">
                      <span className="text-xs text-[#616161] dark:text-[#cccccc]">
                        Credential ID: {cert.credentialId}
                      </span>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[#3498db] hover:text-[#2980b9] transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="mr-1">Verify</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
