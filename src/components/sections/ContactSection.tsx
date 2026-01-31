'use client';

import React from "react"

import { useState } from 'react'
import { Window } from '../Window'
import { RetroButton } from '../RetroButton'
import { Mail, Send, Github, Linkedin, Twitter, Globe } from 'lucide-react'

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/edwin-cajayon', username: 'edwin-cajayon' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/edwin-cajayon', username: '/in/edwin-cajayon' },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-12 px-4 pb-20 bg-[#c0c0c0]">
      <div className="max-w-4xl mx-auto">
        <Window
          title="Contact Me - Get In Touch"
          icon={<Mail className="w-4 h-4 text-white" />}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact form */}
            <div>
              <h2 className="text-sm font-bold text-[#0a246a] mb-3">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium text-[#404040] mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full inset-panel px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#316ac5]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-[#404040] mb-1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full inset-panel px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#316ac5]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-medium text-[#404040] mb-1">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full inset-panel px-2 py-1.5 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-[#316ac5]"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <RetroButton type="submit" variant="aqua" className="flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </RetroButton>
                  <RetroButton
                    type="button"
                    variant="classic"
                    onClick={() => setFormData({ name: '', email: '', message: '' })}
                  >
                    Clear
                  </RetroButton>
                </div>
              </form>
            </div>

            {/* Social links */}
            <div>
              <h2 className="text-sm font-bold text-[#0a246a] mb-3">Connect With Me</h2>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outset-panel p-3 flex items-center gap-3 hover:bg-[#e8e8e8] transition-colors group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#6cb3f5] via-[#316ac5] to-[#0a246a] rounded flex items-center justify-center">
                      <link.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0a246a] group-hover:underline">
                        {link.label}
                      </span>
                      <p className="text-[10px] text-[#808080]">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Email direct */}
              <div className="mt-4 outset-panel p-3">
                <h3 className="text-xs font-bold text-[#0a246a] mb-2">Direct Email:</h3>
                <a
                  href="mailto:cajayonedwinjr@email.com"
                  className="text-xs text-[#316ac5] hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  cajayonedwinjr@email.com
                </a>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </section>
  )
}
