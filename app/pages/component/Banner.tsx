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
        display: "flex",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", width: "100%" }}>
        <Row gutter={[32, 32]} align="middle">
          {/* Text Section */}
         <Col
  xs={{ span: 24, order: 2 }}
  lg={{ span: 12, order: 1 }}
>
            <Title level={1} className="font-48px" style={{ marginBottom: 24 }}>
              Build Fast <br />
              <span className="text-primary">Applications</span> <br />
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
              className="btn-primary"
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
                 <Col
  xs={{ span: 24, order: 1 }}
  lg={{ span: 12, order: 2 }}
  style={{ textAlign: "center" }}
>
              <div style={{ position: 'relative', width: '100%', height: '500px' }}>
              <Image
                src="/assets/images/laravel-hero.webp"
                alt="Laravel Framework"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
