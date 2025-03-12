import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, Twitter, Clock, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-blue-800 to-indigo-600 flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ayush Bhandari</h1>
            <p className="text-xl text-white/90 mb-8">AI Solutions Architect & Machine Learning Engineer</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" className="bg-white text-blue-800 hover:bg-white/90">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="#projects">
                  <span className="mr-2">👁️</span> View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden">
          <div className="absolute right-10 bottom-0 hidden lg:block">
            <div className="relative w-[500px] h-[300px]">
              {/* Laptop silhouette */}
              <div className="absolute w-full h-full bg-gray-900 rounded-t-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-center py-2">
          <nav className="flex bg-white rounded-full shadow-sm overflow-hidden">
            <Link href="#about" className="px-6 py-3 hover:bg-gray-100 transition-colors">
              About
            </Link>
            <Link href="#projects" className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Projects
            </Link>
            <Link href="#publications" className="px-6 py-3 hover:bg-gray-100 transition-colors">
              Publications
            </Link>
            <Link href="#contact" className="px-6 py-3 hover:bg-gray-100 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm a passionate AI engineer with over 8 years of experience in developing cutting-edge machine learning
                solutions. My work focuses on creating practical AI applications that solve real-world problems in
                healthcare, finance, and sustainable technology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Expertise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-full text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span>Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-full text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <span>Quantitative Finance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-full text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span>Space Tech</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Current Focus</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-full text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span>Neural AI Platform</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-full text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <span>Big Data Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-full text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </div>
                      <span>Cloud Architecture</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContributionGraph />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Neural AI"
              description="Revolutionary email marketing platform powered by artificial intelligence"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20at%205.51.01%E2%80%AFPM-4LYopnDr75SdSAspnbdhEYlkFBc1z0.png"
              tags={["AI", "Marketing", "Analytics"]}
            />
            <ProjectCard
              title="HealthCompanion"
              description="AI-driven personal health management and monitoring system"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20at%205.51.01%E2%80%AFPM-4LYopnDr75SdSAspnbdhEYlkFBc1z0.png"
              tags={["Healthcare", "AI", "Mobile"]}
            />
            <ProjectCard
              title="CropAI"
              description="Smart agriculture solution using machine learning and IoT"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20at%205.51.01%E2%80%AFPM-4LYopnDr75SdSAspnbdhEYlkFBc1z0.png"
              tags={["Agriculture", "IoT", "ML"]}
            />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10">Recent Publications</h2>
          <div className="space-y-8">
            <PublicationCard
              title="Advancing AI Ethics: A Framework for Responsible Development"
              journal="Journal of Artificial Intelligence Research"
              date="March 2025"
              citations={45}
            />
            <PublicationCard
              title="Neural Networks in Quantitative Trading: A Comprehensive Study"
              journal="International Journal of Financial Engineering"
              date="January 2025"
              citations={32}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out through
                any of these channels:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>ayush.bhandari@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-600" />
                  <span>GitHub Profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-blue-600" />
                  <span>Twitter Profile</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle>Office Hours (PST)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Available for virtual meetings</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} Ayush Bhandari. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function ContributionGraph() {
  return (
    <div className="w-full h-[200px] relative">
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <path d="M0,100 C50,120 100,180 150,80 C200,20 250,100 300,120" fill="none" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="0" cy="100" r="4" fill="#3b82f6" />
        <circle cx="50" cy="120" r="4" fill="#3b82f6" />
        <circle cx="100" cy="180" r="4" fill="#3b82f6" />
        <circle cx="150" cy="80" r="4" fill="#3b82f6" />
        <circle cx="200" cy="20" r="4" fill="#3b82f6" />
        <circle cx="250" cy="100" r="4" fill="#3b82f6" />
        <circle cx="300" cy="120" r="4" fill="#3b82f6" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
      </div>
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between items-start text-xs text-gray-500">
        <span>300</span>
        <span>250</span>
        <span>200</span>
        <span>150</span>
        <span>100</span>
        <span>50</span>
        <span>0</span>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-blue-100 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-80"></div>
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface PublicationCardProps {
  title: string
  journal: string
  date: string
  citations: number
}

function PublicationCard({ title, journal, date, citations }: PublicationCardProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">
          {journal} • {date}
        </p>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <svg className="h-5 w-5 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
        <span className="text-blue-600 font-medium">{citations} citations</span>
      </div>
    </div>
  )
}

