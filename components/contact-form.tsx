"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, AlertCircle, CheckCircle, Send } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // In a real implementation, you would send this data to a server
      // that would forward it to mardhiyatul.utami@gmail.com
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "mardhiyatul.utami@gmail.com",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Reset form and show success message
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setOpen(false)
      }, 5000)
    } catch (err) {
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          id="contact-form-button"
          className="bg-[#3498db] hover:bg-[#2980b9] text-white transition-all duration-300 hover:shadow-md hover:scale-105"
        >
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Mardhiyatul Utami</DialogTitle>
          <DialogDescription>
            Fill out the form below to get in touch with me. I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive" className="animate-in fade-in-50 duration-300">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {isSubmitted ? (
          <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300 animate-in fade-in-50 duration-300">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your message has been sent to mardhiyatul.utami@gmail.com. Thank you for reaching out!
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-[#3498db] focus:border-[#3498db]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-[#3498db] focus:border-[#3498db]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={4}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-[#3498db] focus:border-[#3498db]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#3498db] hover:bg-[#2980b9] transition-all duration-300 hover:shadow-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
