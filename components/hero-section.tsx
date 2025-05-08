"use client"

import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { AnimateInView } from "@/components/ui/animate-in-view"

export default function HeroSection() {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <AnimateInView animation="fade-right" className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#2c3e50] shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
          <Image src="/images/profile-new.png" alt="Mardhiyatul Utami" fill className="object-cover" priority />
        </div>
      </AnimateInView>
      <AnimateInView animation="fade-left" className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Mardhiyatul Utami</h1>
        <p className="text-lg md:text-xl text-[#616161] dark:text-[#cccccc] mb-6 max-w-lg">
          Aspiring Backend Developer from Mojokerto, East Java. Currently a student at Universitas Terbuka majoring in
          archival science.
        </p>
        <p className="text-base text-[#616161] dark:text-[#cccccc] mb-8 max-w-lg">
          I'm passionate about backend development and building robust, scalable systems. With a background in archival
          science, I bring a unique perspective to organizing and managing data efficiently.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <a
            href="https://github.com/myutami16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#212121] hover:bg-[#424242] text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mardhiyatul-utami/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#3498db] hover:bg-[#2980b9] text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <ContactForm />
        </div>
      </AnimateInView>
    </section>
  )
}
