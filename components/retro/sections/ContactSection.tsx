"use client"

import React from "react"

import { Window } from "../Window"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Message sent! (Demo only)")
  }

  return (
    <section id="contact" className="py-8 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Window title="New Message - Outlook Express" icon={<MailIcon />} variant="aqua">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* To field */}
                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-[#1a1a1a] w-16">To:</label>
                  <input
                    type="text"
                    value="cajayonedwinjr@email.com"
                    disabled
                    className="xp-input flex-1 bg-[#e8e4d9] text-[#5a5a5a]"
                  />
                </div>

                {/* From field */}
                <div className="flex items-center gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-[#1a1a1a] w-16">From:</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="xp-input flex-1"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="flex items-center gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-[#1a1a1a] w-16">Email:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="xp-input flex-1"
                    required
                  />
                </div>

                {/* Subject field */}
                <div className="flex items-center gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-[#1a1a1a] w-16">Subject:</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="xp-input flex-1"
                    required
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-[#1a1a1a] block mb-1">Message:</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="xp-input w-full resize-none"
                    required
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button type="submit" className="aqua-button">
                    Send Message
                  </button>
                  <button type="button" className="xp-button" onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}>
                    Clear
                  </button>
                </div>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="outset-panel p-4 rounded">
                <h3 className="text-sm font-bold text-[#0a246a] mb-3">Contact Information</h3>
                <div className="space-y-3 text-xs">
                  <ContactItem
                    icon={<EmailIcon />}
                    label="Email"
                    value="cajayonedwinjr@email.com"
                    href="mailto:cajayonedwinjr@email.com"
                  />
                  <ContactItem
                    icon={<LocationIcon />}
                    label="Location"
                    value="San Francisco, CA"
                  />
                  <ContactItem
                    icon={<ClockIcon />}
                    label="Availability"
                    value="Open to opportunities"
                  />
                </div>
              </div>

              <div className="outset-panel p-4 rounded">
                <h3 className="text-sm font-bold text-[#0a246a] mb-3">Social Links</h3>
                <div className="flex flex-wrap gap-2">
                  <SocialButton icon={<GitHubIcon />} label="GitHub" href="https://github.com/edwin-cajayon" />
                  <SocialButton icon={<LinkedInIcon />} label="LinkedIn" href="https://linkedin.com/in/edwin-cajayon" />
                </div>
              </div>

              {/* Retro "email me" banner */}
              <div className="text-center p-3 bg-gradient-to-r from-[#ffff00] via-[#ff00ff] to-[#00ffff] rounded animate-pulse">
                <span className="text-black text-xs font-bold drop-shadow-sm">
                  EMAIL ME! I REPLY FAST!
                </span>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-[#e8e4d9] flex items-center justify-center border border-[#aca899]">
        {icon}
      </div>
      <div>
        <p className="text-[#5a5a5a]">{label}</p>
        {href ? (
          <a href={href} className="retro-link font-medium">
            {value}
          </a>
        ) : (
          <p className="text-[#1a1a1a] font-medium">{value}</p>
        )}
      </div>
    </div>
  )
}

function SocialButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="xp-button inline-flex items-center gap-1.5 text-xs"
    >
      {icon}
      {label}
    </a>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#4FC3F7" stroke="#0288D1" strokeWidth="1" />
      <path d="M3 7l9 6 9-6" stroke="#0288D1" strokeWidth="1.5" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-[#3a6ea5]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 text-[#3a6ea5]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-[#3a6ea5]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}
