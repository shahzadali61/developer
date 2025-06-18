"use client"

import type React from "react"
import { useState } from "react"
import { Collapse, Typography } from "antd"
import type { CollapseProps } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

interface FaqItem {
  key: string
  question: string
  answer: React.ReactNode
}

export function Faq() {
  const [activeKey, setActiveKey] = useState<string | string[]>([])

  const faqItems: FaqItem[] = [
    {
      key: "1",
      question: "What services do you offer?",
      answer: (
        <Paragraph className="text-gray-600">
          I offer a comprehensive range of web development services including full-stack development with Laravel and
          Vue.js, custom API development, database design, UI/UX implementation, and website maintenance. Whether you
          need a complete web application or specific features for an existing project, I can help bring your vision to
          life with clean, efficient code.
        </Paragraph>
      ),
    },
    {
      key: "2",
      question: "What is your development process?",
      answer: (
        <Paragraph className="text-gray-600">
          My development process typically follows these steps:
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Initial consultation and requirement gathering</li>
            <li>Project planning and architecture design</li>
            <li>UI/UX wireframing and design approval</li>
            <li>Development with regular progress updates</li>
            <li>Testing and quality assurance</li>
            <li>Deployment and launch</li>
            <li>Post-launch support and maintenance</li>
          </ol>
          I maintain clear communication throughout the process and adapt to your specific needs.
        </Paragraph>
      ),
    },
    {
      key: "3",
      question: "How long does it take to complete a project?",
      answer: (
        <Paragraph className="text-gray-600">
          Project timelines vary depending on complexity, scope, and requirements. A simple website might take 2-4
          weeks, while a complex web application could take 2-6 months. During our initial consultation, I&apos;ll provide a
          detailed timeline based on your specific project needs. I&apos;m committed to delivering high-quality work within
          agreed timeframes and will keep you updated on progress throughout development.
        </Paragraph>
      ),
    },
    {
      key: "4",
      question: "What are your rates?",
      answer: (
        <Paragraph className="text-gray-600">
          My rates depend on project complexity, timeline, and specific requirements. I offer flexible pricing options
          including:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Project-based fixed pricing</li>
            <li>Hourly rates for ongoing work</li>
            <li>Retainer packages for regular maintenance</li>
          </ul>
          I&apos;m happy to discuss your budget constraints and find a solution that works for both of us. Please contact me
          for a personalized quote based on your project details.
        </Paragraph>
      ),
    },
    {
      key: "5",
      question: "Do you offer ongoing maintenance and support?",
      answer: (
        <Paragraph className="text-gray-600">
          Yes, I offer ongoing maintenance and support services to ensure your application continues to run smoothly
          after launch. This includes:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Regular updates and security patches</li>
            <li>Performance optimization</li>
            <li>Bug fixes and troubleshooting</li>
            <li>Feature additions and improvements</li>
            <li>Technical support and consultation</li>
          </ul>
          I offer flexible maintenance packages tailored to your specific needs and budget.
        </Paragraph>
      ),
    },
    {
      key: "6",
      question: "Can you work with existing codebases?",
      answer: (
        <Paragraph className="text-gray-600">
          I have extensive experience working with existing codebases and can help improve, extend, or maintain your
          current application. I&apos;m proficient in reading and understanding code written by others, and can quickly get
          up to speed with your project. Whether you need bug fixes, new features, performance improvements, or a
          complete overhaul, I can work with your existing codebase to achieve your goals.
        </Paragraph>
      ),
    },
  ]

  const onChange = (key: string | string[]) => {
    setActiveKey(key)
  }

  const getItems: CollapseProps["items"] = faqItems.map((item) => ({
    key: item.key,
    label: (
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-medium text-gray-800">{item.question}</span>
        {(Array.isArray(activeKey) ? activeKey.includes(item.key) : activeKey === item.key) ? (
          <MinusOutlined className="text-primary text-base" />
        ) : (
          <PlusOutlined className="text-gray-500 text-base" />
        )}
      </div>
    ),
    children: <div className="pt-2">{item.answer}</div>,
    className: "bg-white border-0 shadow-sm rounded-lg mb-4 overflow-hidden",
  }))

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Title level={2} className="text-4xl font-bold text-center mb-4 text-gray-900">
            Frequently Asked Questions
          </Title>
          <Paragraph className="text-center text-gray-600 mb-12 text-lg">
            Here are answers to some common questions about my services and process.
          </Paragraph>

          <Collapse
            accordion
            bordered={false}
            expandIcon={() => null}
            activeKey={activeKey}
            onChange={onChange}
            items={getItems}
            className="bg-transparent border-0"
          />

          <div className="text-center mt-12">
            <Paragraph className="text-gray-600 mb-6">
              Don&apos;t see your question here? Feel free to reach out directly.
            </Paragraph>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  const headerHeight = 64
                  const elementPosition =
                    contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight
                  window.scrollTo({ top: elementPosition, behavior: "smooth" })
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
