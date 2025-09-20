"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contact Form Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Name Field */}
            <div>
              <label className="block text-[#5f6060] text-sm mb-2">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-0 border-b border-[#5f6060] pb-2 text-[#000000] placeholder-[#5f6060] focus:outline-none focus:border-[#ff3300] transition-colors"
              />
            </div>

            {/* Number Field */}
            <div>
              <label className="block text-[#5f6060] text-sm mb-2">Number*</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-0 border-b border-[#5f6060] pb-2 text-[#000000] placeholder-[#5f6060] focus:outline-none focus:border-[#ff3300] transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[#5f6060] text-sm mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-0 border-b border-[#5f6060] pb-2 text-[#000000] placeholder-[#5f6060] focus:outline-none focus:border-[#ff3300] transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-[#5f6060] text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-transparent border-0 border-b border-[#5f6060] pb-2 text-[#000000] placeholder-[#5f6060] focus:outline-none focus:border-[#ff3300] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="bg-[#ff3300] hover:bg-[#e62e00] text-white px-6 sm:px-8 py-2 rounded-md font-medium"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#000000]">Get In Touch</h2>

          <p className="text-base sm:text-lg mb-2 text-[#000000]">
            Let's shape your brand's <span className="text-[#ff3300]">next big chapter</span> together
          </p>

          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-[#000000]">Let's start a conversation</p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff3300] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="text-[#000000] font-medium text-sm sm:text-base">+91 80724 74376</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff3300] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <p className="text-[#000000] font-medium text-sm sm:text-base">genzworkspace@gmail.com</p>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff3300] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-[#000000] font-medium text-sm sm:text-base">Gen Z Workspace.in</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
