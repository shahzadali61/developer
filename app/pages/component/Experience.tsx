import { Card, Tag } from "antd"
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export function Experience() {
  const experiences: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Leading development of web applications using Laravel and Vue.js. Responsible for architecting scalable solutions and mentoring junior developers.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Docker"],
      achievements: [
        "Developed 15+ web applications serving 10,000+ users",
        "Improved application performance by 40% through optimization",
        "Led a team of 3 developers on major projects",
      ],
    },
    {
      title: "Laravel Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2021 - 2022",
      description:
        "Specialized in Laravel backend development and API creation. Worked closely with frontend teams to deliver seamless user experiences.",
      technologies: ["Laravel", "PHP", "MySQL", "RESTful APIs", "Bootstrap"],
      achievements: [
        "Built robust APIs serving 5+ frontend applications",
        "Reduced server response time by 35%",
        "Implemented secure authentication systems",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "San Francisco, CA",
      period: "2020 - 2021",
      description:
        "Started career focusing on frontend development with Vue.js and gradually expanded to full-stack development with Laravel.",
      technologies: ["Vue.js", "JavaScript", "HTML/CSS", "Bootstrap", "PHP"],
      achievements: [
        "Converted 20+ Figma designs to responsive web pages",
        "Collaborated with design team to improve UI/UX",
        "Learned Laravel and transitioned to full-stack development",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-36px text-center mb-12 text-gray-900">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.title + exp.company} className="hover:shadow-lg transition-all duration-300 border-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 text-sm space-y-1 md:text-right">
                    <div className="flex items-center gap-2">
                      <CalendarOutlined />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EnvironmentOutlined />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 font-18px">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech} color="red" className="mb-1">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
