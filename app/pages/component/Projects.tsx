import { Card, Tag, Button } from "antd"
import { GithubOutlined, LinkOutlined } from "@ant-design/icons"
import Link from "next/link"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform built with Laravel and Vue.js. Includes user authentication, product management, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API", "Tailwind CSS"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing", "Admin Dashboard"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates. Built using Laravel Livewire for dynamic interactions and MySQL for data persistence.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "Livewire", "MySQL", "Bootstrap", "JavaScript"],
      features: [
        "Real-time Updates",
        "Team Collaboration",
        "Task Assignments",
        "Progress Tracking",
        "File Attachments",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/task-manager",
    },
    {
      title: "Restaurant Booking System",
      description:
        "Online reservation system for restaurants with table management, booking calendar, and customer notifications. Responsive design converted from Figma mockups.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "Vue.js", "MySQL", "Ant Design", "Email APIs"],
      features: [
        "Table Reservations",
        "Calendar Integration",
        "Email Notifications",
        "Customer Management",
        "Reporting Dashboard",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/restaurant-booking",
    },
    {
      title: "Content Management System",
      description:
        "Custom CMS built for content creators with drag-and-drop page builder, SEO optimization, and multi-user support. Designed with modern UI/UX principles.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "Redis"],
      features: ["Page Builder", "SEO Tools", "Multi-user Support", "Media Management", "Analytics Dashboard"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/cms",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-36px text-center mb-12 text-gray-900">Featured Projects</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0"
                cover={
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                }
                actions={[
                  <Link key="live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      type="primary"
                      className="btn-primary flex items-center justify-center"
                      aria-label={`View live demo of ${project.title}`}
                      icon={<LinkOutlined />}
                    >
                      Live Demo
                    </Button>
                  </Link>,
                  <Link key="code" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="btn-outline flex items-center justify-center"
                      aria-label={`View source code of ${project.title}`}
                      icon={<GithubOutlined />}
                    >
                      Code
                    </Button>
                  </Link>,
                ]}
              >
                <Card.Meta
                  title={<span className="text-xl text-gray-900">{project.title}</span>}
                  description={<p className="text-gray-600 mb-4 font-18px">{project.description}</p>}
                />

                <div className="mt-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech} color="red" className="mb-1">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                className="btn-outline flex items-center justify-center"
                aria-label="View all projects on GitHub"
                icon={<GithubOutlined />}
              >
                View All Projects on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
