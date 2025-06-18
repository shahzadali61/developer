"use client"

import { Button, Typography, Row, Col } from "antd"
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons"
import { useCallback } from "react"
import Image from "next/image"
const { Title, Paragraph } = Typography

export function Banner() {
  const handleNavClick = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 64
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }, [])

  const handleDownloadResume = useCallback(() => {
    // Add your resume download logic here
    console.log("Downloading resume...")
    // Example: window.open('/resume.pdf', '_blank')
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f8fafc, #ffe4e6)",
        display: "flex",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", width: "100%" }}>
        <Row gutter={[32, 32]} align="middle">
          {/* Image Box */}
          <Col xs={24} lg={12} style={{ textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  width: 320,
                  height: 320,
                  background: "#fff",
                  borderRadius: 24,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  padding: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Laravel Framework"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: 96,
                  height: 96,
                  backgroundColor: "red",
                  borderRadius: "50%",
                  opacity: 0.1,
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -24,
                  width: 128,
                  height: 128,
                  backgroundColor: "#1677ff", // Ant Design primary
                  borderRadius: "50%",
                  opacity: 0.1,
                  zIndex: 0,
                }}
              />
            </div>
          </Col>

          {/* Text Section */}
          <Col xs={24} lg={12}>
            <Title level={1} style={{ fontSize: 48, fontWeight: "bold", marginBottom: 24 }}>
              Build Fast <br />
              <span style={{ color: "#1677ff" }}>Applications</span> <br />
              with Laravel + Vue Js
            </Title>

            <Paragraph style={{ fontSize: 18, color: "#595959" }}>
              Experienced full-stack developer specializing in creating robust, scalable web applications using modern
              technologies.
            </Paragraph>
            <Paragraph style={{ fontSize: 18, color: "#595959", marginBottom: 32 }}>
              3+ years of expertise in Laravel backend development and Vue.js frontend solutions for businesses
              worldwide.
            </Paragraph>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button
                type="primary"
                size="large"
                onClick={() => handleNavClick("#about")}
                icon={<ArrowRightOutlined />}
              >
                View My Work
              </Button>
              <Button
                size="large"
                onClick={handleDownloadResume}
                icon={<DownloadOutlined />}
              >
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
