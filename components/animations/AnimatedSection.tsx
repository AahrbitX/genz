"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up'
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 100, opacity: 0 }
      case 'down':
        return { y: -100, opacity: 0 }
      case 'left':
        return { x: -100, opacity: 0 }
      case 'right':
        return { x: 100, opacity: 0 }
      default:
        return { y: 100, opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
