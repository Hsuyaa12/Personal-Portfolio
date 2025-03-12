import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hsuyaa12.github.io/Personal-Portfolio'),
  title: "Ayush Bhandari - AI Solutions Architect & Machine Learning Engineer",
  description:
    "Portfolio website of Ayush Bhandari, showcasing expertise in AI, machine learning, and quantitative finance.",
  openGraph: {
    title: "Ayush Bhandari - AI Solutions Architect",
    description: "Portfolio website showcasing AI and machine learning projects",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Bhandari",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}