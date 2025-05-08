"use client"

import type React from "react"

import { useState } from "react"
import { ExternalLink, Github, Film, ListTodo, Car, Database, Server, Code, X } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateInView } from "@/components/ui/animate-in-view"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
  icon?: React.ReactNode
  longDescription?: string
  timeline?: string
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
  icon,
  longDescription,
  timeline,
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card
        className={`overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
          featured ? "border-[#3498db] dark:border-[#3498db] border-2" : ""
        }`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full overflow-hidden group">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-[#3498db] hover:bg-[#2980b9]">Featured</Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs transition-all duration-300 hover:bg-[#3498db]/20 hover:text-[#3498db]"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          {timeline && <p className="text-xs text-[#616161] dark:text-[#cccccc] mt-3 italic">{timeline}</p>}
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              {icon}
              {title}
            </DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <div className="relative h-64 w-full overflow-hidden rounded-md my-4">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[#616161] dark:text-[#cccccc]">{longDescription || description}</p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            {timeline && <p className="text-xs text-[#616161] dark:text-[#cccccc] italic">Timeline: {timeline}</p>}

            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                <X className="mr-2 h-4 w-4" />
                Close
              </Button>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#212121] hover:bg-[#424242] text-white transition-all duration-300 hover:shadow-md"
              >
                <Github className="mr-2 h-4 w-4" />
                View Project
              </a>

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#3498db] hover:bg-[#2980b9] text-white transition-all duration-300 hover:shadow-md"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const projects: ProjectProps[] = [
  {
    title: "Movie Chill Website",
    description:
      "A web application for browsing and discovering movies, built as part of Harisenin.com's mission-based learning program.",
    longDescription:
      "Independently developed a static film website using HTML and CSS as part of the Harisenin.com Full-Stack Developer bootcamp. The application features responsive layouts to ensure optimal user experience across devices, allowing users to browse and discover movies with an intuitive interface.",
    image: "/images/movie-chill-website.png",
    technologies: ["HTML", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/myutami16/harisenin_mission3b/tree/mission-3b",
    featured: false,
    icon: <Film className="h-5 w-5 text-[#3498db]" />,
    timeline: "Jan 2025 - Feb 2025",
  },
  {
    title: "To Do List App",
    description:
      "A task management application that allows users to create, update, and delete tasks, built for Harisenin.com's mission-based learning.",
    longDescription:
      "Independently developed a to-do list website using HTML, CSS, and JavaScript as part of the Harisenin.com Full-Stack Developer bootcamp. The application implements interactive features such as task addition, deletion, and status updates using JavaScript, providing users with a seamless task management experience.",
    image: "/images/todo-list-app.png",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    githubUrl: "https://github.com/myutami16/harisenin_mission4/tree/master",
    icon: <ListTodo className="h-5 w-5 text-[#3498db]" />,
    timeline: "Feb 2025 - Mar 2025",
  },
  {
    title: "Parking System",
    description:
      "A parking management system developed for Myskill.id that handles vehicle entry, exit, and payment calculations.",
    longDescription:
      "Built a functional parking management API using Node.js and Express with MySQL database. Implemented user authentication, middleware access control, and full CRUD for parking data. Covered project from setup to deployment with modular structure and clear route management.",
    image: "/images/parking-system.png",
    technologies: ["MySQL", "Node.js", "Express.js", "API", "Authentication"],
    githubUrl: "https://github.com/myutami16/sparking_myskill/tree/mysql-learn",
    icon: <Car className="h-5 w-5 text-[#3498db]" />,
    timeline: "Mar 2025 - Apr 2025",
  },
  {
    title: "Movie App Database",
    description:
      "Database implementation for a movie application with optimized schema design and queries, created for Harisenin.com.",
    longDescription:
      "Designed and built a structured PostgreSQL database schema for a movie website, including tables for movies, genres, users, and reviews. Applied relational database principles and normalization to ensure data integrity and performance, creating a robust foundation for the movie application backend.",
    image: "/images/movie-app-database.png",
    technologies: ["Database Design", "SQL", "Data Modeling", "PostgreSQL"],
    githubUrl: "https://github.com/myutami16/harisenin_backend1/tree/mission1_backend",
    icon: <Database className="h-5 w-5 text-[#3498db]" />,
    timeline: "Mar 2025 - Apr 2025",
  },
  {
    title: "Movie App API",
    description:
      "RESTful API for a movie application that provides endpoints for movie data, user authentication, and reviews.",
    longDescription:
      "Developed a RESTful API using Express.js and Node.js to interact with the movie database. Implemented full CRUD functionality for movies, users, and reviews endpoints, with comprehensive input validation and robust error handling for stability and reliability. The API was thoroughly tested using Postman to ensure all endpoints function correctly.",
    image: "/images/movie-app-api.png",
    technologies: ["Node.js", "Express.js", "REST API", "Backend"],
    githubUrl: "https://github.com/myutami16/harisenin_backend2/tree/mission2_backend",
    icon: <Server className="h-5 w-5 text-[#3498db]" />,
    timeline: "Apr 2025 - Apr 2025",
  },
  {
    title: "Advanced Movie API",
    description:
      "Advanced implementation of a movie application backend with enhanced features using Node.js and Express.js.",
    longDescription:
      "Developed secure RESTful API with Express.js, PostgreSQL, and JWT-based authentication. Implemented user registration, login, email verification, and file upload with Multer. Integrated filtering, sorting, and searching on movie endpoints with Postman-tested validations.",
    image: "/images/movie-app-backend-advanced.png",
    technologies: ["Node.js", "Express.js", "JWT", "Authentication", "PostgreSQL"],
    githubUrl: "https://github.com/myutami16/missionbe_advanced/tree/backend_advanced",
    icon: <Code className="h-5 w-5 text-[#3498db]" />,
    timeline: "Apr 2025 - May 2025",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimateInView animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-[#616161] dark:text-[#cccccc] max-w-2xl mx-auto">
              A collection of backend development projects showcasing my technical skills and problem-solving abilities.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimateInView key={index} animation="fade-up" delay={index * 100}>
              <ProjectCard {...project} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
