"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useRef } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      text: "Our brand went from being overlooked to standing out in a crowded market. Their total branding package combined with strategic social media management was a game changer for us.",
      company: "Vault of Gamers",
      initials: "VG",
      color: "#990000",
    },
    {
      text: "Incredible attention to detail and creativity. I got my logo within a few days and didn't even need revisions. It felt like they read my mind!",
      company: "Elite Safety",
      initials: "ES",
      color: "#994400",
    },
    {
      text: "From logo design to daily social media campaigns, they handle everything seamlessly. Our brand finally has a consistent look, feel, and message across all platforms.",
      company: "Pommi Caters",
      initials: "PC",
      color: "#996600",
    },
    {
      text: "Their strategic approach to our brand completely transformed our business. From audience insights to professional execution, they delivered consistent results.",
      company: "Bright Minds",
      initials: "BM",
      color: "#990000",
    },
    {
      text: "The team's creativity and professionalism exceeded our expectations. Our new brand identity perfectly captures our company's vision and values.",
      company: "Tech Corp",
      initials: "TC",
      color: "#006600",
    },
  ]

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // mobile: 1 card
      if (window.innerWidth < 1024) return 2 // tablet: 2 cards
      return 3 // desktop: 3 cards
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(3)
  const maxSlide = testimonials.length - cardsPerView

  const handleResize = () => {
    const newCardsPerView = getCardsPerView()
    setCardsPerView(newCardsPerView)
    setCurrentSlide((prev) => Math.min(prev, testimonials.length - newCardsPerView))
  }

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1)
      } else if (translateX < 0 && currentSlide < maxSlide) {
        setCurrentSlide((prev) => prev + 1)
      }
    }

    setTranslateX(0)
  }

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(translateX) > 50) {
      if (translateX > 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1)
      } else if (translateX < 0 && currentSlide < maxSlide) {
        setCurrentSlide((prev) => prev + 1)
      }
    }

    setTranslateX(0)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-[#fffbfb]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#d9d9d9] h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        <div className="w-full h-full bg-[#d9d9d9]"></div>
      </section>

      {/* Brand Stories Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#000000]">
            Let Us Tell Your <span className="text-[#ff3300]">"Brand"</span> Stories
          </h2>

          <Card className="bg-[#dadada] p-0 rounded-3xl max-w-4xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Dark gray placeholder */}
              <div className="w-full lg:w-2/5">
                <div className="bg-[#8e8e8e] h-48 sm:h-64 lg:h-80 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"></div>
              </div>

              {/* Right side - Content area */}
              <div className="w-full lg:w-3/5 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-[#ff3300] rounded-full"></div>
                  <span className="text-[#000000] font-medium text-sm">About Us</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#000000] leading-tight">
                  Gen Z Workspace is more than just a branding workspace
                </h3>

                <p className="text-[#000000] mb-6 sm:mb-8 leading-relaxed text-sm">
                  It's a creative ecosystem built for visionary brands that dare to be different. We're not just shaping
                  visuals; we're crafting identities that echo with personality, purpose, and unforgettable presence.
                </p>

                <button className="text-[#000000] font-medium text-sm underline">See some highlights</button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-background"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-[#000000]">
            Our Services
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Brand Identity */}
            <Card className="bg-[#e8e8e8] p-6 sm:p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 w-full max-w-sm">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#000000]">Brand Identity</h3>
              <p className="text-sm sm:text-base font-semibold mb-4 text-[#000000]">Build a Brand that sticks</p>

              <p className="text-[#000000] mb-6 sm:mb-8 text-sm leading-relaxed">
                it's the complete visual and verbal language that shapes how audience sees you....
              </p>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#000000] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">→</span>
                </div>
                <span className="text-[#000000] font-bold text-sm">READ MORE</span>
              </div>
            </Card>

            {/* Arrow between first and second card - hidden on mobile */}
            <div className="text-[#000000] text-2xl lg:text-3xl font-bold hidden lg:block">→</div>

            {/* Brand Design */}
            <Card className="bg-[#e8e8e8] p-6 sm:p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 w-full max-w-sm">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#000000]">Brand Design</h3>
              <p className="text-sm sm:text-base font-semibold mb-4 text-[#000000]">Bold.Strategic.Unforgettable</p>

              <p className="text-[#000000] mb-6 sm:mb-8 text-sm leading-relaxed">
                we offer professional brand design services that go beyond just good looks....
              </p>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#000000] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">→</span>
                </div>
                <span className="text-[#000000] font-bold text-sm">READ MORE</span>
              </div>
            </Card>

            {/* Arrow between second and third card - hidden on mobile */}
            <div className="text-[#000000] text-2xl lg:text-3xl font-bold hidden lg:block">→</div>

            {/* Brand Management */}
            <Card className="bg-[#e8e8e8] p-6 sm:p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 w-full max-w-sm">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#000000]">Brand Management</h3>
              <p className="text-sm sm:text-base font-semibold mb-4 text-[#000000]">Consistency Builds Trust</p>

              <p className="text-[#000000] mb-6 sm:mb-8 text-sm leading-relaxed">
                our expert brand management services ensure your brand looks,and sounds ....
              </p>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#000000] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">→</span>
                </div>
                <span className="text-[#000000] font-bold text-sm">READ MORE</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-b from-[#ffcccb] to-[#fffbfb]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-[#000000]">
            See What People Think About Us
          </h2>

          <div className="relative">
            <div
              ref={sliderRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(-${currentSlide * (100 / cardsPerView)}% + ${isDragging ? translateX : 0}px))`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                    <Card className="bg-[#f5f5f5] p-4 sm:p-6 rounded-2xl h-full">
                      <p className="text-[#000000] text-sm mb-6 sm:mb-8 leading-relaxed">{testimonial.text}</p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-sm flex items-center justify-center"
                          style={{ backgroundColor: testimonial.color }}
                        >
                          <span className="text-white text-xs font-bold">{testimonial.initials}</span>
                        </div>
                        <span className="text-[#000000] font-bold text-sm">{testimonial.company}</span>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#ff7f50] to-[#ffb3ba] p-6 sm:p-8 lg:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c2c2c] leading-tight">
                Get Started with Us,
                <br />
                One Click Away
              </h2>
            </div>
            <div className="flex items-center">
              <Button className="bg-transparent border-2 border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff3300] rounded-full"></div>
                JOIN NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
