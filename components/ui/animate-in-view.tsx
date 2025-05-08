"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimateInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number // delay in ms
  duration?: number // duration in ms
  once?: boolean // animate only once
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"
}

export function AnimateInView({
  children,
  className,
  delay = 0,
  duration = 500,
  once = true,
  animation = "fade-up",
}: AnimateInViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, hasAnimated])

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "translate-y-[-10px] opacity-0",
    "fade-left": "translate-x-[-10px] opacity-0",
    "fade-right": "translate-x-10 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "zoom-out": "scale-105 opacity-0",
  }

  const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100"

  return (
    <div
      ref={ref}
      className={cn("transition-all", isVisible ? visibleClass : animationClasses[animation], className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
