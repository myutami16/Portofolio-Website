import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectProps) {
  return (
    <Card
      className={`overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg ${
        featured ? "border-emerald-500 dark:border-emerald-400 border-2" : ""
      }`}
    >
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-emerald-500 hover:bg-emerald-600">Featured</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
        )}
        {!githubUrl && !liveUrl && <span className="text-sm text-slate-500">Coming soon</span>}
      </CardFooter>
    </Card>
  )
}
