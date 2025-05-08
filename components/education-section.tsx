import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Building } from "lucide-react"
import { AnimateInView } from "@/components/ui/animate-in-view"
import { Badge } from "@/components/ui/badge"

interface Education {
  institution: string
  location: string
  degree?: string
  field?: string
  startDate: string
  endDate: string
  description?: string
  skills?: string[]
}

const educationData: Education[] = [
  {
    institution: "Harisenin.com",
    location: "Jakarta, Indonesia",
    degree: "Full Stack Developer Bootcamp",
    startDate: "Dec 2024",
    endDate: "Present",
    skills: ["MySQL", "JavaScript", "HTML", "Node.js", "PostgreSQL", "Next.js", "CSS"],
    description: "Relevant coursework: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL, API Integration",
  },
  {
    institution: "Universitas Terbuka",
    location: "Jakarta, Indonesia",
    degree: "Diploma IV (D-IV)",
    field: "Archival Science",
    startDate: "Apr 2023",
    endDate: "Present",
    description: "Relevant Coursework: Records Management, Database Systems, Digital Archiving.",
  },
  {
    institution: "SMKS THORIQUL ULUM PACET",
    location: "Mojokerto, Indonesia",
    field: "Computer and Network Engineering",
    startDate: "2017",
    endDate: "2020",
    skills: [
      "Communication",
      "Problem Solving",
      "Computer Networking",
      "Hardware Troubleshooting",
      "Basic Programming",
    ],
    description: "Focused on computer networks (LAN, WAN, TCP/IP) and hardware/software troubleshooting",
  },
]

export default function EducationSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] dark:bg-[#1e1e1e]/50">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-[#616161] dark:text-[#cccccc] max-w-2xl mx-auto">
              My academic background and educational journey.
            </p>
          </div>
        </AnimateInView>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((education, index) => (
            <AnimateInView key={index} animation="fade-left" delay={index * 200}>
              <Card className="border-l-4 border-l-[#3498db] transition-all duration-300 hover:shadow-lg hover:translate-x-1">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {education.institution === "Harisenin.com" ? (
                          <Building className="h-5 w-5 text-[#3498db]" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-[#3498db]" />
                        )}
                        {education.institution}
                      </CardTitle>
                      <p className="text-sm text-[#616161] dark:text-[#cccccc]">{education.location}</p>
                      {education.degree && (
                        <p className="text-lg font-medium mt-1">
                          {education.degree} {education.field && `in ${education.field}`}
                        </p>
                      )}
                      {!education.degree && education.field && (
                        <p className="text-lg font-medium mt-1">{education.field}</p>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-[#616161] dark:text-[#cccccc]">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {education.startDate} - {education.endDate}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {education.description && (
                    <p className="text-[#616161] dark:text-[#cccccc] mb-3">{education.description}</p>
                  )}

                  {education.skills && education.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {education.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs transition-all duration-300 hover:bg-[#3498db]/20 hover:text-[#3498db]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
