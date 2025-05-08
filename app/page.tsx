"use client"

import { Moon, Sun, Mail, Github, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"
import CVSection from "@/components/cv-section"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "education", "projects", "certifications", "cv"]

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eeeeee] dark:from-[#1e1e1e] dark:to-[#2c3e50] text-[#212121] dark:text-[#f5f5f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f9fa]/80 dark:bg-[#1e1e1e]/80 backdrop-blur-sm border-b border-[#eeeeee] dark:border-[#2c3e50]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("skills")}
              className={`text-sm font-medium hover:text-[#3498db] transition-colors ${activeSection === "skills" ? "text-[#3498db]" : ""}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`text-sm font-medium hover:text-[#3498db] transition-colors ${activeSection === "education" ? "text-[#3498db]" : ""}`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-medium hover:text-[#3498db] transition-colors ${activeSection === "projects" ? "text-[#3498db]" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className={`text-sm font-medium hover:text-[#3498db] transition-colors ${activeSection === "certifications" ? "text-[#3498db]" : ""}`}
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className={`text-sm font-medium hover:text-[#3498db] transition-colors ${activeSection === "cv" ? "text-[#3498db]" : ""}`}
            >
              CV
            </button>
          </nav>
          <div className="flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="transition-transform duration-300 hover:rotate-12"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            )}
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-[#eeeeee] dark:border-[#2c3e50]">
          <div className="container mx-auto px-4 py-2 flex justify-between">
            <button
              onClick={() => scrollToSection("skills")}
              className={`text-xs font-medium hover:text-[#3498db] transition-colors ${activeSection === "skills" ? "text-[#3498db]" : ""}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`text-xs font-medium hover:text-[#3498db] transition-colors ${activeSection === "education" ? "text-[#3498db]" : ""}`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-xs font-medium hover:text-[#3498db] transition-colors ${activeSection === "projects" ? "text-[#3498db]" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className={`text-xs font-medium hover:text-[#3498db] transition-colors ${activeSection === "certifications" ? "text-[#3498db]" : ""}`}
            >
              Certs
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className={`text-xs font-medium hover:text-[#3498db] transition-colors ${activeSection === "cv" ? "text-[#3498db]" : ""}`}
            >
              CV
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Education Section */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <CertificationsSection />
      </section>

      {/* CV Section */}
      <section id="cv">
        <CVSection />
      </section>

      {/* Footer */}
      <footer className="bg-[#212121] dark:bg-[#1e1e1e] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#cccccc]">© {new Date().getFullYear()} Mardhiyatul Utami. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/myutami16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mardhiyatul-utami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mardhiyatul.utami@gmail.com"
              className="text-[#cccccc] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
