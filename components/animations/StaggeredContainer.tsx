"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggeredContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: StaggeredContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
