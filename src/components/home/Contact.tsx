"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Input } from "@/components/ui/Input"
import { TextArea } from "@/components/ui/TextArea"
import { Button } from "@/components/ui/Button"

interface FormState {
  name: string
  email: string
  message: string
  subject: string
}

interface FormStatus {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    subject: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus({ isSubmitting: false, isSuccess: true, error: null })
      setFormData({ name: "", email: "", message: "", subject: "" }) // Reset form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, isSuccess: false }))
      }, 5000)
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <section id="contact" className="py-32">
      <div className="container px-4">
        <SectionHeader title="Contact" />
        <div className="max-w-6xl mx-auto">
          <Card className="p-8" hover>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  id="name"
                  type="text"
                  label="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  aria-required="true"
                  disabled={status.isSubmitting}
                />

                <Input
                  id="email"
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  disabled={status.isSubmitting}
                />

                <Input
                  id="subject"
                  type="text"
                  label="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  required
                  aria-required="true"
                  disabled={status.isSubmitting}
                />
              </div>

              <TextArea
                id="message"
                label="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                required
                aria-required="true"
                disabled={status.isSubmitting}
              />

              {status.error && (
                <div className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-lg" role="alert">
                  {status.error}
                </div>
              )}

              {status.isSuccess && (
                <div className="text-sm text-green-500 bg-green-500/10 px-4 py-2 rounded-lg" role="alert">
                  Message sent successfully!
                </div>
              )}

              <Button
                type="submit"
                disabled={status.isSubmitting}
                loading={status.isSubmitting}
                icon={!status.isSubmitting && <Send className="w-4 h-4" />}
              >
                {status.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
} 