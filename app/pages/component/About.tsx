import { Card, Tag } from "antd"
import Image from "next/image"

export function About() {
  const skills = [
    "Laravel",
    "Vue.js",
    "PHP",
    "JavaScript",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap",
    "React.js",
    "Livewire",
    "Figma",
    "Adobe XD",
    "Git",
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Developer Profile"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <Card className="bg-white shadow-lg border-0">
                    <div className="px-6 py-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">3+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I&apos;m a passionate full-stack developer with over 3 years of experience in creating modern web
                  applications. I specialize in Laravel for robust backend development and Vue.js for dynamic,
                  responsive frontend experiences.
                </p>
                <p className="text-lg">
                  My expertise extends beyond coding to include UI/UX design using Figma and Adobe XD, ensuring that
                  every application I build is not only functional but also visually appealing and user-friendly.
                </p>
                <p className="text-lg">
                  I&apos;m committed to writing clean, maintainable code and staying up-to-date with the latest industry
                  trends and best practices.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Tag key={skill} color="red" className="px-3 py-1 text-sm font-medium">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
