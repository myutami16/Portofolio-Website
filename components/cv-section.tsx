import { Card, CardContent } from "@/components/ui/card"
import { AnimateInView } from "@/components/ui/animate-in-view"
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Building,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  FileText,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CVSection() {
  return (
    <section id="cv" className="py-16 md:py-24 bg-[#f8f9fa] dark:bg-[#1e1e1e]/50">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Vitae</h2>
            <p className="text-[#616161] dark:text-[#cccccc] max-w-2xl mx-auto">
              My professional background, education, and experience.
            </p>
            <div className="mt-4">
              <a
                href="/files/mardhiyatul_utami_resume.pdf"
                download="mardhiyatul_utami_resume.pdf"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#27ae60] hover:bg-[#219653] text-white transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        </AnimateInView>

        <div className="max-w-4xl mx-auto">
          <AnimateInView animation="fade-up">
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">Mardhiyatul Utami</h3>
                    <p className="text-lg text-[#3498db] font-medium mt-1">Backend Developer</p>
                  </div>
                  <div className="mt-4 md:mt-0 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-[#616161]" />
                      <span>081515417993</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-[#616161]" />
                      <span>mardhiyatul.utami@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="h-4 w-4 mr-2 text-[#616161]" />
                      <span>linkedin.com/in/mardhiyatul-utami/</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#616161]" />
                      <span>Mojokerto, Indonesia</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-[#616161] dark:text-[#cccccc]">
                    An undergraduate student in Archival Science at Universitas Terbuka transitioning from a background
                    in Finance Administration to Web Development. Currently focused on honing backend development skills
                    while attending the Full-Stack Developer bootcamp at Harisenin.com. Proficient in HTML, CSS,
                    JavaScript, MySQL, PostgreSQL, Node.js, Python, and Express.js, with additional skills in project
                    management and database administration. Passionate about backend development and database
                    management, aiming to secure a role as a Backend Developer or Database Administrator while
                    continuously expanding technical expertise.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-5 w-5 text-[#3498db] mr-2" />
                    <h4 className="text-xl font-semibold">Work Experience</h4>
                  </div>
                  <div className="ml-7 border-l-2 border-[#3498db] pl-6 pb-2">
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Finance Administrative Officer</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Building className="h-4 w-4 mr-1" />
                          <span>PT. Permodalan Nasional Madani (Persero)</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-[#616161] mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Nov 2020 - Aug 2024</span>
                        <MapPin className="h-4 w-4 ml-3 mr-1" />
                        <span>Mojokerto, Indonesia</span>
                      </div>
                      <ul className="mt-3 space-y-2 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>
                          Managed and recorded daily financial transactions, handling an average of 800+ transactions
                          per week to ensure accurate cash flow and reconciliations.
                        </li>
                        <li>
                          Utilizing Excel automation to improve data management and enhance unit performance monitoring,
                          improving data accuracy and reducing errors by 30%.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Code className="h-5 w-5 text-[#3498db] mr-2" />
                    <h4 className="text-xl font-semibold">Project Experiences</h4>
                  </div>
                  <div className="ml-7 border-l-2 border-[#3498db] pl-6 pb-2 space-y-6">
                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Movie Web - Harisenin Project</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Jan 2025 - Feb 2025</span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>Independently developing a film website using HTML and CSS.</li>
                        <li>
                          Designing and implementing responsive layouts to ensure optimal user experience across
                          devices.
                        </li>
                        <li>
                          Building the website as part of the final project for the Full-Stack Developer bootcamp.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">To-do List Web - Harisenin Project</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Feb 2025 - Mar 2025</span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>Independently developing a to-do list website using HTML, CSS, and JavaScript.</li>
                        <li>
                          Implementing interactive features such as task addition, deletion, and status updates using
                          JavaScript.
                        </li>
                        <li>
                          Developing this project as a part of the Full-Stack Developer bootcamp final assignment.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Movie Website Database - Harisenin Project</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Mar 2025 - Apr 2025</span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>
                          Designed and built a structured PostgreSQL database schema for a movie website, including
                          tables for movies, genres, users, and reviews.
                        </li>
                        <li>
                          Applied relational database principles and normalization to ensure data integrity and
                          performance.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Parking System - MySkill.id Project</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Mar 2025 - Apr 2025</span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>
                          Built a functional parking management API using Node.js and Express with MySQL database.
                        </li>
                        <li>
                          Implemented user authentication, middleware access control, and full CRUD for parking data.
                        </li>
                        <li>
                          Covered project from setup to deployment with modular structure and clear route management.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Movie API - Harisenin Project</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Apr 2025 - Apr 2025</span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>
                          Developed a RESTful API using Express.js and Node.js to interact with the movie database.
                        </li>
                        <li>Implemented full CRUD functionality for movies, users, and reviews endpoints.</li>
                        <li>
                          Tested endpoints using Postman, with input validation and robust error handling for stability
                          and reliability.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Advanced Movie API - Harisenin Project</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Apr 2025 - May 2025</span>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>Developed secure RESTful API with Express.js, PostgreSQL, and JWT-based authentication.</li>
                        <li>Implemented user registration, login, email verification, and file upload with Multer.</li>
                        <li>
                          Integrated filtering, sorting, and searching on movie endpoints with Postman-tested
                          validations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Building className="h-5 w-5 text-[#3498db] mr-2" />
                    <h4 className="text-xl font-semibold">Organization Experiences</h4>
                  </div>
                  <div className="ml-7 border-l-2 border-[#3498db] pl-6 pb-2">
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Computer Lab Assistant</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Building className="h-4 w-4 mr-1" />
                          <span>SMK Thoriqul Ulum Pacet</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-[#616161] mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Sep 2017 - Nov 2019</span>
                        <MapPin className="h-4 w-4 ml-3 mr-1" />
                        <span>Mojokerto, Indonesia</span>
                      </div>
                      <ul className="mt-3 space-y-2 list-disc list-inside text-[#616161] dark:text-[#cccccc]">
                        <li>
                          Assisting in the maintenance of hardware and software in the computer laboratory, ensuring
                          optimal performance.
                        </li>
                        <li>
                          Guiding fellow students in software usage and basic troubleshooting, improving their technical
                          skills.
                        </li>
                        <li>
                          Supporting students during practical sessions by providing instructions and resolving
                          technical issues.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-[#3498db] mr-2" />
                    <h4 className="text-xl font-semibold">Education</h4>
                  </div>
                  <div className="ml-7 border-l-2 border-[#3498db] pl-6 pb-2">
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Diploma IV (D-IV) degree in Archival Science</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Building className="h-4 w-4 mr-1" />
                          <span>Universitas Terbuka</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-[#616161] mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Apr 2023 - Present</span>
                        <MapPin className="h-4 w-4 ml-3 mr-1" />
                        <span>Jakarta, Indonesia</span>
                      </div>
                      <p className="mt-2 text-[#616161] dark:text-[#cccccc]">
                        Relevant Coursework: Records Management, Database Systems, Digital Archiving.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-[#3498db] mr-2" />
                    <h4 className="text-xl font-semibold">Courses & Training</h4>
                  </div>
                  <div className="ml-7 border-l-2 border-[#3498db] pl-6 pb-2">
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h5 className="text-lg font-medium">Full Stack Developer Bootcamp</h5>
                        <div className="flex items-center text-sm text-[#616161] mt-1 md:mt-0">
                          <Building className="h-4 w-4 mr-1" />
                          <span>Harisenin.com</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-[#616161] mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Dec 2024 - Present</span>
                        <MapPin className="h-4 w-4 ml-3 mr-1" />
                        <span>Jakarta, Indonesia</span>
                      </div>
                      <div className="mt-3 space-y-2 text-[#616161] dark:text-[#cccccc]">
                        <p>
                          <strong>Project:</strong> Built a Movie Website and To-Do List App using HTML, CSS,
                          JavaScript, and developed a secure RESTful API with Node.js, Express.js, and PostgreSQL,
                          featuring authentication, email verification, file upload, and dynamic movie listing with
                          query filters.
                        </p>
                        <p>
                          <strong>Relevant Coursework:</strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js,
                          MySQL, API Integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Code className="h-5 w-5 text-[#3498db] mr-2" />
                    <h4 className="text-xl font-semibold">Skills</h4>
                  </div>
                  <div className="ml-7 pl-6">
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Technical Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "HTML",
                          "CSS",
                          "JavaScript",
                          "Node.js",
                          "Express.js",
                          "Python",
                          "MySQL",
                          "PostgreSQL",
                          "Git",
                          "GitHub",
                          "Postman",
                          "REST API",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-[#f1f5f9] text-[#616161] dark:bg-[#334155] dark:text-[#cccccc] hover:bg-[#3498db]/20 hover:text-[#3498db]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Soft Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Problem-Solving",
                          "Critical Thinking",
                          "Collaboration & Teamwork",
                          "Time Management",
                          "Communication Skills",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-[#f1f5f9] text-[#616161] dark:bg-[#334155] dark:text-[#cccccc] hover:bg-[#3498db]/20 hover:text-[#3498db]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Languages</h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-[#f1f5f9] text-[#616161] dark:bg-[#334155] dark:text-[#cccccc] hover:bg-[#3498db]/20 hover:text-[#3498db]">
                          Indonesian (Native)
                        </Badge>
                        <Badge className="bg-[#f1f5f9] text-[#616161] dark:bg-[#334155] dark:text-[#cccccc] hover:bg-[#3498db]/20 hover:text-[#3498db]">
                          English (Intermediate)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
