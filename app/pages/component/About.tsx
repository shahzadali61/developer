"use client"

import { Card, Tag, Row, Col } from "antd"
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
    <section id="about" style={{ padding: "80px 0", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <Row gutter={[48, 48]} align="middle">
          {/* Image Section */}
          <Col xs={24} lg={12}>
             <Image
                  src="/assets/images/laravel.png"
                  alt="Developer Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
          </Col>
          {/* Text Section */}
          <Col xs={24} lg={12}>
            <h2 style={{ fontSize: 36, fontWeight: "bold", color: "#1f1f1f", marginBottom: 24 }}>
              About Me
            </h2>

            <div style={{ color: "#595959", fontSize: 16, lineHeight: 1.8 }}>
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

            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: "#1f1f1f" }}>
                Technical Skills
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {skills.map((skill) => (
                  <Tag key={skill} color="red" style={{ padding: "4px 12px", fontSize: 14 }}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
              <Col span={8}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: "bold", color: "#1677ff" }}>50+</div>
                  <div style={{ color: "#595959", fontSize: 14 }}>Projects Completed</div>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: "bold", color: "#52c41a" }}>25+</div>
                  <div style={{ color: "#595959", fontSize: 14 }}>Happy Clients</div>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: "bold", color: "#722ed1" }}>100%</div>
                  <div style={{ color: "#595959", fontSize: 14 }}>Success Rate</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  )
}
