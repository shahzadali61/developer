"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button, Drawer } from "antd"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import Link from "next/link"

interface NavItem {
  href: string
  label: string
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "My Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact Me" },
  ]

  // Handle scroll position for navbar shadow
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  // Smooth scroll to section
  const handleNavClick = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 64
      const elementTop = element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: elementTop, behavior: "smooth" })
    }
    setIsOpen(false)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleNavClick(href)
      }
    },
    [handleNavClick]
  )

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // ScrollSpy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0.1,
    }
const observerCallback = (entries: IntersectionObserverEntry[]) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

  if (visible.length > 0) {
    setActiveSection(visible[0].target.id)
  }
}


    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <>
      {/* Sticky Top Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-gray-900"
              aria-label="DevPortfolio Home"
            >
              Dev<span className="text-primary">Portfolio</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  style={{ margin: "0px 10px", cursor: "pointer" }}
                  className={`text-gray-700 hover:text-primary transition-colors font-medium relative ${
                    activeSection === item.href.substring(1) ? "text-primary font-semibold" : ""
                  }`}
                  aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                type="text"
                icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <span className="text-xl font-bold text-gray-900">
            Dev<span className="text-primary">Portfolio</span>
          </span>
        }
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={280}
        className="md:hidden"
        id="mobile-menu"
      >
        <div className="py-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`block w-full text-left px-4 py-3 font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-primary bg-gray-100 font-semibold border-l-4 border-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => handleNavClick(item.href)}
              onKeyDown={(e) => handleKeyDown(e, item.href)}
              aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Drawer>
    </>
  )
}
