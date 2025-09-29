"use client"

import { ReactNode } from 'react'
import { useStaggeredAnimation } from '@/hooks/useAnimation'

interface StaggeredAnimationProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export default function StaggeredAnimation({ 
  children, 
  staggerDelay = 100, 
  className = '' 
}: StaggeredAnimationProps) {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, staggerDelay)

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-out ${
            visibleItems.includes(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
