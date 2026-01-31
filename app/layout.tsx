import React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "John Developer | Software Engineer Portfolio",
  description:
    "Full-stack software developer portfolio showcasing projects, skills, and experience. Built with a nostalgic early 2000s web aesthetic.",
  keywords: [
    "software developer",
    "portfolio",
    "full-stack",
    "web development",
    "React",
    "Next.js",
  ],
  authors: [{ name: "John Developer" }],
}

export const viewport: Viewport = {
  themeColor: "#3a6ea5",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
