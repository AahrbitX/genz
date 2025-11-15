"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { MessageCircle, Send, MessageSquare, Phone, MapPin } from 'lucide-react'
import { RetroGrid } from "@/components/ui/retro-grid"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "US",
    message: "",
    services: [] as string[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white pt-20 relative z-10">
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <RetroGrid 
          angle={45}
          cellSize={40}
          opacity={0.3}
          lightLineColor="#5F6060"
          darkLineColor="#5F6060"
        />
      </div>
      <div 
        className="fixed inset-0"
        style={{
          width: '1500px',
          height: '700px',
          left: 'calc(50% - 1500px/2)',
          top: '-150px',
          background: 'radial-gradient(54.72% 54.76% at 50.92% -20.34%, #FF3300 41.98%, rgba(255, 51, 0, 0.620122) 60.13%, rgba(255, 51, 0, 0.306537) 76.65%, rgba(255, 51, 0, 0.169634) 99.79%, rgba(255, 51, 0, 0) 100%)',
          filter: 'blur(70.35px)'
        }}
      ></div>
      {/* Header Section */}
      <AnimatedSection>
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-black">
              Contact our team
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              Got any questions about the product or scaling on our platform? We're here to help.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Form and Contact Info Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-8 px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-16">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all bg-white"
                      >
                        <option value="US">US</option>
                        <option value="IN">IN</option>
                        <option value="UK">UK</option>
                        <option value="AU">AU</option>
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Leave us a message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all resize-none"
                    />
                  </div>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#ff3300] hover:bg-[#e62e00] text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Send message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              {/* <div className="space-y-10 flex items-center justify-between">
               
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Chat with us</h3>
                  <p className="text-gray-600 text-sm mb-4">Speak to our friendly team via live chat.</p>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-2 text-black hover:text-[#ff3300] transition-colors text-sm group">
                      <MessageCircle className="w-4 h-4" />
                      <span className="underline">Start a live chat</span>
                    </a>
                    <a href="mailto:genzworkspace@gmail.com" className="flex items-center gap-2 text-black hover:text-[#ff3300] transition-colors text-sm group">
                      <Send className="w-4 h-4" />
                      <span className="underline">Shoot us an email</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-black hover:text-[#ff3300] transition-colors text-sm group">
                      <MessageSquare className="w-4 h-4" />
                      <span className="underline">Message us on X</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Call us</h3>
                  <p className="text-gray-600 text-sm mb-4">Call our team Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15550000000" className="flex items-center gap-2 text-black hover:text-[#ff3300] transition-colors text-sm group">
                    <Phone className="w-4 h-4" />
                    <span className="underline">+1 (555) 000-0000</span>
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Visit us</h3>
                  <p className="text-gray-600 text-sm mb-4">Chat to us in person at our Melbourne HQ.</p>
                  <a href="#" className="flex items-center gap-2 text-black hover:text-[#ff3300] transition-colors text-sm group">
                    <MapPin className="w-4 h-4" />
                    <span className="underline">100 Smith Street, Collingwood VIC 3066</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}