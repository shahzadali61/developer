"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { Button, Drawer } from "antd"
import { Menu, X } from "lucide-react"

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
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  // Scroll position handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Active section detection using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleNavClick = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 64
      const position = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: position, behavior: "smooth" })
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
    [handleNavClick],
  )

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900" aria-label="DevPortfolio Home">
              Dev<span className="text-primary">Portfolio</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={`relative transition-colors font-medium text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary ${
                    activeSection === item.href ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
              <Button type="primary" className="btn-primary" onClick={() => handleNavClick("#contact")}>
                Hire Me
              </Button>
            </div>

            <Button
              type="text"
              className="btn-ghost md:hidden p-2"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              icon={isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            />
          </div>
        </div>
      </nav>

      <Drawer
        title={
          <span className="text-xl font-bold text-gray-900">
            Dev<span className="text-primary">Portfolio</span>
          </span>
        }
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={320}
        className="md:hidden"
        id="mobile-menu"
      >
        <div className="py-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              onKeyDown={(e) => handleKeyDown(e, item.href)}
              aria-current={activeSection === item.href ? "page" : undefined}
              className={`block w-full text-left px-4 py-4 transition-colors font-medium cursor-pointer border-b border-gray-100 relative ${
                activeSection === item.href
                  ? "text-primary font-semibold bg-red-50 border-l-4 border-l-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <Button type="primary" size="large" className="btn-primary w-full" onClick={() => handleNavClick("#contact")}>
              Hire Me
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}
