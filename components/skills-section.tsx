"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateInView } from "@/components/ui/animate-in-view"

interface Skill {
  name: string
  icon: string
}

// Updated skills array - streamlined
const skills: Skill[] = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "REST API", icon: "api" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Postman", icon: "postman" },
]

// Helper function to get icon URL
const getIconUrl = (iconName: string) => {
  const iconMap: Record<string, string> = {
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    api: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  }

  return iconMap[iconName] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
}

function TechMarquee() {
  // Double the skills for continuous animation effect
  const marqueeSkills = [...skills, ...skills, ...skills]

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#2c3e50] rounded-lg p-6 shadow-md">
      <div className="flex space-x-12 animate-marquee">
        {marqueeSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mx-4 transition-all duration-300 hover:scale-110">
            <img
              src={getIconUrl(skill.icon) || "/placeholder.svg"}
              alt={skill.name}
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <span className="text-xs mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: skills.filter((s) => ["HTML", "CSS", "JavaScript", "Python"].includes(s.name)),
    },
    {
      name: "Backend Technologies",
      skills: skills.filter((s) => ["Node.js", "Express.js", "REST API"].includes(s.name)),
    },
    {
      name: "Databases",
      skills: skills.filter((s) => ["MySQL", "PostgreSQL"].includes(s.name)),
    },
    {
      name: "Tools & Technologies",
      skills: skills.filter((s) => ["Git", "GitHub", "Postman"].includes(s.name)),
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#f8f9fa] dark:bg-[#1e1e1e]/50">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-[#616161] dark:text-[#cccccc] max-w-2xl mx-auto">
              My expertise spans various backend technologies, databases, and programming languages.
            </p>
          </div>
        </AnimateInView>

        <AnimateInView animation="fade-up">
          <TechMarquee />
        </AnimateInView>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimateInView key={category.name} animation="fade-up" delay={index * 100}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center bg-[#f1f5f9] dark:bg-[#334155] rounded-full px-3 py-1 text-sm transition-all duration-300 hover:bg-[#3498db]/20 hover:text-[#3498db]"
                      >
                        <img
                          src={getIconUrl(skill.icon) || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-5 h-5 mr-2"
                        />
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
