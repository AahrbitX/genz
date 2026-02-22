"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { MessageCircle, Send, MessageSquare, Phone, MapPin, CheckCircle } from 'lucide-react'
import { RetroGrid } from "@/components/ui/retro-grid"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string
    phoneNumber?: string
    message?: string
  }>({})

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Word count function
  const getWordCount = (text: string): number => {
    if (!text.trim()) return 0
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  // Message validation function (25-50 words)
  const validateMessage = (message: string): { isValid: boolean; error?: string; wordCount?: number } => {
    const wordCount = getWordCount(message)
    
    if (wordCount < 25) {
      return { 
        isValid: false, 
        error: `Message must contain at least 25 words. Current: ${wordCount} words.`,
        wordCount 
      }
    }
    
    if (wordCount > 50) {
      return { 
        isValid: false, 
        error: `Message must not exceed 50 words. Current: ${wordCount} words.`,
        wordCount 
      }
    }
    
    return { isValid: true, wordCount }
  }

  // Phone number validation function based on country code
  const validatePhoneNumber = (phone: string, countryCode: string): { isValid: boolean; error?: string } => {
    // Remove spaces, dashes, parentheses, and plus signs for validation
    const cleanedPhone = phone.replace(/[\s\-\(\)\+]/g, '')
    
    // Check if it contains only digits
    if (!/^\d+$/.test(cleanedPhone)) {
      return { isValid: false, error: 'Phone number must contain only digits' }
    }

    // Country-specific validation rules
    switch (countryCode) {
      case 'US':
        // US: 10 digits (area code + 7 digits)
        if (cleanedPhone.length !== 10) {
          return { isValid: false, error: 'US phone number must be 10 digits (e.g., 5551234567)' }
        }
        // Check if area code doesn't start with 0 or 1
        if (cleanedPhone[0] === '0' || cleanedPhone[0] === '1') {
          return { isValid: false, error: 'Invalid US area code' }
        }
        return { isValid: true }
      
      case 'IN':
        // India: 10 digits
        if (cleanedPhone.length !== 10) {
          return { isValid: false, error: 'Indian phone number must be 10 digits (e.g., 9876543210)' }
        }
        // Indian mobile numbers start with 6, 7, 8, or 9
        if (!/^[6-9]/.test(cleanedPhone)) {
          return { isValid: false, error: 'Indian mobile number must start with 6, 7, 8, or 9' }
        }
        return { isValid: true }
      
      case 'UK':
        // UK: 10-11 digits
        if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
          return { isValid: false, error: 'UK phone number must be 10-11 digits (e.g., 7700123456)' }
        }
        // UK mobile numbers are 11 digits starting with 07
        if (cleanedPhone.length === 11 && cleanedPhone[0] === '0' && cleanedPhone[1] === '7') {
          return { isValid: true }
        }
        // UK landline numbers can be 10 or 11 digits
        if (cleanedPhone.length === 10 || (cleanedPhone.length === 11 && cleanedPhone[0] === '0')) {
          return { isValid: true }
        }
        return { isValid: false, error: 'Invalid UK phone number format' }
      
      case 'AU':
        // Australia: 9-10 digits
        // Mobile numbers: 10 digits starting with 04 (e.g., 0412345678)
        // Landline: 9-10 digits (e.g., 0212345678 or 212345678)
        if (cleanedPhone.length < 9 || cleanedPhone.length > 10) {
          return { isValid: false, error: 'Australian phone number must be 9-10 digits (e.g., 0412345678)' }
        }
        // Australian mobile numbers start with 04 (10 digits)
        if (cleanedPhone.length === 10 && cleanedPhone[0] === '0' && cleanedPhone[1] === '4') {
          return { isValid: true }
        }
        // Australian mobile numbers without leading 0 (9 digits starting with 4)
        if (cleanedPhone.length === 9 && cleanedPhone[0] === '4') {
          return { isValid: true }
        }
        // Australian landline numbers
        if (cleanedPhone.length === 9 || (cleanedPhone.length === 10 && cleanedPhone[0] === '0')) {
          return { isValid: true }
        }
        return { isValid: false, error: 'Invalid Australian phone number format' }
      case 'UAE':
        // UAE: 9 digits (mobile numbers start with 5)
        if (cleanedPhone.length !== 9) {
          return { isValid: false, error: 'UAE phone number must be 9 digits (e.g., 512345678)' }
        }
        if (cleanedPhone[0] !== '5') {
          return { isValid: false, error: 'UAE mobile number must start with 5' }
        }
        return { isValid: true }

      
      default:
        // Fallback: 10-15 digits
        if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
          return { isValid: false, error: 'Phone number must be 10-15 digits' }
        }
        return { isValid: true }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const updatedFormData = {
      ...formData,
      [name]: value,
    }
    
    // If country code changes, clear phone number field and its errors
    if (name === 'countryCode' && value !== formData.countryCode) {
      updatedFormData.phoneNumber = ""
      setFieldErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.phoneNumber
        return newErrors
      })
    }
    
    setFormData(updatedFormData)
    
    // Clear general error when user starts typing
    if (error) setError(null)
    
    // Validate email in real-time
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          email: 'Please enter a valid email address',
        }))
      } else {
        setFieldErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.email
          return newErrors
        })
      }
    }
    
    // Validate phone number in real-time (re-validate if country code changes)
    if ((name === 'phoneNumber' || name === 'countryCode') && updatedFormData.phoneNumber) {
      const validation = validatePhoneNumber(updatedFormData.phoneNumber, updatedFormData.countryCode)
      if (!validation.isValid) {
        setFieldErrors((prev) => ({
          ...prev,
          phoneNumber: validation.error || 'Please enter a valid phone number',
        }))
      } else {
        setFieldErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.phoneNumber
          return newErrors
        })
      }
    }
    
    // Validate message in real-time
    if (name === 'message' && value) {
      const validation = validateMessage(value)
      if (!validation.isValid) {
        setFieldErrors((prev) => ({
          ...prev,
          message: validation.error || 'Please enter a valid message',
        }))
      } else {
        setFieldErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.message
          return newErrors
        })
      }
    }
  }

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validate email
    if (!validateEmail(formData.email)) {
      setFieldErrors((prev) => ({
        ...prev,
        email: 'Please enter a valid email address',
      }))
      setIsSubmitting(false)
      return
    }

    // Validate phone number based on country code
    const phoneValidation = validatePhoneNumber(formData.phoneNumber, formData.countryCode)
    if (!phoneValidation.isValid) {
      setFieldErrors((prev) => ({
        ...prev,
        phoneNumber: phoneValidation.error || 'Please enter a valid phone number',
      }))
      setIsSubmitting(false)
      return
    }

    // Validate message word count
    const messageValidation = validateMessage(formData.message)
    if (!messageValidation.isValid) {
      setFieldErrors((prev) => ({
        ...prev,
        message: messageValidation.error || 'Please enter a valid message',
      }))
      setIsSubmitting(false)
      return
    }

    // Clear field errors if validation passes
    setFieldErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      // Show success modal
      setShowSuccessModal(true)
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        countryCode: "US",
        message: "",
        services: [],
      })
      // Clear field errors
      setFieldErrors({})
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  // Get placeholder text based on country code
  const getPhonePlaceholder = (countryCode: string): string => {
    switch (countryCode) {
      case 'US':
        return '(555) 123-4567'
      case 'IN':
        return '9876543210'
      case 'UK':
        return '7700 123456'
      case 'AU':
        return '0412 345 678'
      default:
        return '(555) 000-0000'
    }
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
                        First name <span className="text-red-500">*</span>
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
                        Last name <span className="text-red-500">*</span>
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
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        fieldErrors.email
                          ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#ff3300]/20 focus:border-[#ff3300]'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        required
                        className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3300]/20 focus:border-[#ff3300] transition-all bg-white"
                      >
                        <option value="US">US</option>
                        <option value="IN">IN</option>
                        <option value="UK">UK</option>
                        <option value="AU">AU</option>
                        <option value="UAE">UAE</option>
                      </select>
                      <div className="flex-1">
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder={getPhonePlaceholder(formData.countryCode)}
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                            fieldErrors.phoneNumber
                              ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                              : 'border-gray-300 focus:ring-[#ff3300]/20 focus:border-[#ff3300]'
                          }`}
                        />
                        {fieldErrors.phoneNumber && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <span className={`text-xs ${
                        getWordCount(formData.message) < 25 || getWordCount(formData.message) > 50
                          ? 'text-red-500'
                          : getWordCount(formData.message) >= 25 && getWordCount(formData.message) <= 50
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}>
                        {getWordCount(formData.message)} / 25-50 words
                      </span>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Leave us a message (minimum 25 words, maximum 50 words)..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                        fieldErrors.message
                          ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#ff3300]/20 focus:border-[#ff3300]'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
                    )}
                    {!fieldErrors.message && formData.message && (
                      <p className="mt-1 text-xs text-gray-500">
                        {getWordCount(formData.message) < 25 
                          ? `${25 - getWordCount(formData.message)} more words needed`
                          : getWordCount(formData.message) > 50
                          ? `${getWordCount(formData.message) - 50} words over limit`
                          : 'Word count is valid'}
                      </p>
                    )}
                  </div>
                  
                  {/* Error Message */}
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff3300] hover:bg-[#e62e00] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
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

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="p-8">
          <DialogClose onClose={handleCloseModal} />
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Thank You for Contacting Us!
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Your message has been successfully submitted. Our team will reach out to you shortly.
            </p>
            
            <p className="text-base text-gray-500 mb-8">
              We appreciate your interest in Gen Z Workspace and look forward to connecting with you.
            </p>
            
            <Button
              onClick={handleCloseModal}
              className="w-full bg-[#ff3300] hover:bg-[#e62e00] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}