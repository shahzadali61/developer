"use client"

import { Button } from "antd"
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  ArrowUpOutlined,
  HeartFilled,
} from "@ant-design/icons"
import Link from "next/link"
import { useCallback } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleNavClick = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 64
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }, [])

  const socialLinks = [
    {
      href: "https://github.com/username",
      icon: <GithubOutlined />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/username",
      icon: <LinkedinOutlined />,
      label: "LinkedIn",
    },
    {
      href: "mailto:your.email@example.com",
      icon: <MailOutlined />,
      label: "Email",
    },
  ]

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand + Socials */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">
              Dev<span className="text-primary">Portfolio</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-stack developer specializing in Laravel and Vue.js. Creating modern, scalable web applications with clean
              code and beautiful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 hover:text-white"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 hover:text-primary transition"
                aria-label="Send email"
              >
                <MailOutlined className="text-primary" />
                your.email@example.com
              </a>
              <p>Available for freelance work</p>
              <p>Remote & On-site projects</p>
            </div>

            <Button
              type="primary"
              className="btn-primary mt-4"
              onClick={() => handleNavClick("#contact")}
              aria-label="Contact me"
            >
              Let&apos;s Work Together
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} DevPortfolio. Made with</span>
            <HeartFilled className="text-primary" />
            <span>using Laravel & Vue.js</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Back to top</span>
            <Button
              type="text"
              size="small"
              onClick={handleScrollToTop}
              icon={<ArrowUpOutlined />}
              className="text-primary hover:border-primary transition"
              aria-label="Scroll to top"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
