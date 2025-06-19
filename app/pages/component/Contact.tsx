"use client"

import { Card, Button, Input, Form, message } from "antd"
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons"
import Link from "next/link"
import { useCallback } from "react"
import type { ValidateErrorEntity } from "rc-field-form/lib/interface"

const { TextArea } = Input

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [form] = Form.useForm<FormValues>()

  const handleSubmit = useCallback(
    (values: FormValues) => {
      console.log("Form values:", values)
      message.success("Thank you for your message! I'll get back to you soon.")
      form.resetFields()
    },
    [form],
  )

  const handleSubmitError = useCallback((errorInfo: ValidateErrorEntity<FormValues>) => {
    console.log("Form validation failed:", errorInfo)
    message.error("Please fill in all required fields correctly.")
  }, [])

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-36px text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Let&apos;s Work Together</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. Whether you need a full-stack
                developer for your team or want to discuss a project idea, I&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MailOutlined className="text-primary text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <PhoneOutlined className="text-green-600 text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <EnvironmentOutlined className="text-purple-600 text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Available for Remote Work</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/username"
                    className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <GithubOutlined className="text-lg" aria-hidden="true" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/username"
                    className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinOutlined className="text-lg" aria-hidden="true" />
                  </Link>
                </div>
                
              </div>
            </div>

            <Card title="Send Me a Message" className="border-0">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onFinishFailed={handleSubmitError}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name!" }]}
                  >
                    <Input placeholder="Your Name" size="large" aria-required="true" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                      { type: "email", message: "Please enter a valid email!" },
                    ]}
                  >
                    <Input placeholder="your.email@example.com" size="large" aria-required="true" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[{ required: true, message: "Please enter a subject!" }]}
                >
                  <Input placeholder="Project Discussion" size="large" aria-required="true" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: "Please enter your message!" }]}
                >
                  <TextArea
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    size="large"
                    aria-required="true"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="btn-primary w-full"
                    aria-label="Send message"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
