"use client"

import { Tag, Row, Col } from "antd"
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
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[48, 48]} align="middle">
          {/* Image Section */}
          <Col xs={24} lg={12}>
             <Image
              src="/assets/images/user.jpg"
              alt="Developer Profile"
              className="object-cover"
              width={500} // Specify the width (in pixels)
              height={300} // Specify the height (in pixels)
            />
          </Col>

          {/* Text Section */}
          <Col xs={24} lg={12}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>

            <div className="text-base text-gray-600 space-y-4 leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer with over 3 years of experience in creating modern web
                applications. I specialize in Laravel for robust backend development and Vue.js for dynamic,
                responsive frontend experiences.
              </p>
              <p>
                My expertise extends beyond coding to include UI/UX design using Figma and Adobe XD, ensuring that
                every application I build is not only functional but also visually appealing and user-friendly.
              </p>
              <p>
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

            <Row gutter={[16, 16]} className="mt-10">
              <Col span={8}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">25+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  )
}
