"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

interface Testimonial {
  text: string
  company: string
  initials: string
  imgpath:string
  color: string
}

interface AutoSliderProps {
  testimonials: Testimonial[]
  autoSlideInterval?: number
  pauseOnHover?: boolean
}

export default function AutoSlider({ 
  testimonials, 
  autoSlideInterval = 4000,
  pauseOnHover = true 
}: AutoSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // mobile: 1 card
      if (window.innerWidth < 1024) return 2 // tablet: 2 cards
      return 3 // desktop: 3 cards
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(3)

  // For infinite loop, we need to create a virtual array that includes duplicates
  const createInfiniteArray = () => {
    if (testimonials.length === 0) return []
    // Create enough duplicates to ensure smooth infinite scrolling
    const multiplier = Math.ceil(cardsPerView * 3 / testimonials.length) + 1
    return Array.from({ length: multiplier }, () => testimonials).flat()
  }

  const infiniteTestimonials = createInfiniteArray()
  const totalSlides = infiniteTestimonials.length - cardsPerView

  const nextSlide = () => {
    setCurrentSlide(prev => {
      const next = prev + 1
      // Reset to beginning when we reach the end of the infinite array
      return next >= totalSlides ? 0 : next
    })
  }

  const handleResize = () => {
    const newCardsPerView = getCardsPerView()
    setCardsPerView(newCardsPerView)
    // Reset to a safe position when resizing
    setCurrentSlide(0)
  }

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        // Swipe right - go to previous slide
        setCurrentSlide(prev => prev > 0 ? prev - 1 : totalSlides - 1)
      } else {
        // Swipe left - go to next slide
        setCurrentSlide(prev => prev < totalSlides - 1 ? prev + 1 : 0)
      }
    }

    setTranslateX(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        // Swipe right - go to previous slide
        setCurrentSlide(prev => prev > 0 ? prev - 1 : totalSlides - 1)
      } else {
        // Swipe left - go to next slide
        setCurrentSlide(prev => prev < totalSlides - 1 ? prev + 1 : 0)
      }
    }

    setTranslateX(0)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isPaused && !isDragging) {
      const interval = setInterval(nextSlide, autoSlideInterval)
      return () => clearInterval(interval)
    }
  }, [isPaused, autoSlideInterval, totalSlides, isDragging])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  return (
    <div className="relative">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex transition-transform duration-300 ease-out"
          animate={{
            x: `calc(-${currentSlide * (100 / cardsPerView)}% + ${isDragging ? translateX : 0}px)`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.company}-${index}`} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % testimonials.length) * 0.1 }}
              >
                <Card 
                  className="p-4 sm:p-6 rounded-2xl h-[350px] hover:shadow-lg transition-shadow duration-300"
                  style={{
                    background: 'linear-gradient(296.85deg, rgba(248, 248, 248, 0.1) 16.39%, rgba(146, 146, 146, 0.2) 83.61%)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px'
                  }}
                >
                  <p className="text-[#000000] text-xl mb-6 h-[200px] sm:mb-8 leading-relaxed overflow-hidden text-ellipsis line-clamp-8">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full flex items-center w-10 h-10 justify-center"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {/* <span className="text-white text-xs font-bold">{testimonial.initials}</span> */}
                      <span className='bg-transparent'><Image className="border-0 bg-transparent rounded-full" src={testimonial.imgpath} width={100} height={100} alt=''></Image></span>
                    </div>
                    <span className="text-[#000000] font-bold text-xl">{testimonial.company}</span>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: testimonials.length }, (_, index) => {
          // Calculate which dot should be active based on current slide position
          const isActive = (currentSlide % testimonials.length) === index
          return (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-[#ff3300]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              animate={{
                width: isActive ? 32 : 8,
                height: 8
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          )
        })}
      </div>
    </div>
  )
}