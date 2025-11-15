'use client';

import AnimatedSection from "@/components/animations/AnimatedSection"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Zap, Users } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { RetroGrid } from "@/components/ui/retro-grid";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 w-full h-full overflow-hidden">
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
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-sm font-medium text-accent mb-4 tracking-widest uppercase">
                Our Services
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
                Strategic Brand Solutions
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Comprehensive branding services designed to elevate your business and create lasting impressions in your market.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <ServiceBentoGrid />
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <ServiceDetails />
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.4}>
            <WhyChooseUs />
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection delay={0.8}>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-[#fffbfb] relative z-10">
            <div className="bg-gradient-to-r from-[#ff7f50] to-[#ffb3ba] p-6 sm:p-8 lg:p-12 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#ffffff] text-start sm:text-center leading-tight">
                  Get Started with Us,
                  <br className="hidden sm:block" />
                  One Click Away
                </h2>
              </div>
              <div className="flex items-center">
                <Link href="/contact">
                  <Button className="group bg-transparent border-2 border-[#2c2c2c] hover:border-none text-[#ffffff] hover:bg-[#ff3300] hover:text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ff3300] group-hover:bg-[#ffffff] rounded-full transition-colors duration-300"></div>
                    JOIN NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

function ServiceBentoGrid() {
  const services = [
    {
      id: 1,
      title: 'Brand Identity',
      description: 'Establish a complete visual and verbal language that reflects your unique personality and values.',
      link: '#brand-identity',
      image: '/images/services/Brand-Identity1.png',
      colSpan: 'md:col-span-2',
      rowSpan: 'md:row-span-2'
    },
    {
      id: 2,
      title: 'Brand Design',
      description: 'Professional design services that create memorable brand experiences.',
      link: '#brand-design',
      image: '/images/services/Brand-Design1.png',
      colSpan: 'md:col-span-2',
      rowSpan: 'md:row-span-1'
    },
    {
      id: 3,
      title: 'Strategy & Consulting',
      description: 'Data-driven brand strategy to position you ahead of competition.',
      link: '#strategy',
      image: '/images/brand-strategy-consulting.jpg',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1'
    },
    {
      id: 4,
      title: 'Brand Management',
      description: 'Maintain consistency across all platforms to build trust and strengthen recognition.',
      link: '#brand-management',
      image: '/images/services/Brand-Management1.png',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1'
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
      {services.map((service) => (
        <Link
          key={service.id}
          href={service.link}
          className={`${service.colSpan} ${service.rowSpan} group relative overflow-hidden rounded-2xl border border-border/30 hover:border-[#ff3300]/50 transition-all duration-500 cursor-pointer hover:shadow-2xl`}
        >
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          {/* Content positioned at bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ff3300] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-white/80 mb-6 line-clamp-2">
              {service.description}
            </p>

            {/* Arrow indicator */}
            <div className="flex items-center text-[#ff3300] group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function ServiceDetails() {
  return (
    <div className="space-y-20">
      {/* Brand Identity Section */}
      <section id="brand-identity" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
        <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full">
          <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
            <span className="text-[#000000] font-medium text-sm sm:text-base uppercase tracking-widest">
              Brand Identity
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Build a Brand that Sticks
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-6">
            Your brand identity is more than just a logo or color palette—it's the complete visual and verbal language that shapes how your audience sees you.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Custom logo design that captures your essence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Cohesive color palettes and typography systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Brand guidelines for consistent application</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/services/Brand-Identity.png" 
              alt="Brand Identity" 
              width={500} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Brand Design Section */}
      <section id="brand-design" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative lg:order-1">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/services/Brand-Design.png" 
              alt="Brand Design" 
              width={500} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="lg:order-2">
        <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full">
          <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
            <span className="text-[#000000] font-medium text-sm sm:text-base uppercase tracking-widest">
              Brand Design
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Bold. Strategic. Unforgettable.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-6">
            Professional brand design services that go beyond good looks—from logo design and visual identity systems to packaging and digital assets.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Print and digital design assets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Marketing collateral and packaging</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">UI/UX design for digital experiences</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Brand Management Section */}
      <section id="brand-management" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
        <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full">
          <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
            <span className="text-[#000000] font-medium text-sm sm:text-base uppercase tracking-widest">
              Brand Management
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Consistency Builds Trust
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-6">
            Expert brand management services ensure your brand looks, feels, and sounds the same across every platform.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Comprehensive brand guidelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Multi-platform brand management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-[#ff3300] font-bold">✓</span>
              <span className="text-foreground/70">Continuous brand evolution and updates</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/services/Brand-Management.png" 
              alt="Brand Management" 
              width={500} 
              height={500} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
function WhyChooseUs() {
  const features = [
    {
      title: 'Strategic Expertise',
      description: 'We transform business challenges into growth opportunities with proven methodologies and deep industry knowledge.',
      icon: Target,
    },
    {
      title: 'Innovative Solutions',
      description: 'Delivering excellence through cutting-edge design and innovative strategies that set your brand apart.',
      icon: Zap,
    },
    {
      title: 'Dedicated Partnership',
      description: 'Working closely with you to understand your vision and bring it to life with transparency and collaboration.',
      icon: Users,
    },
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-[#ff3300] mb-4 tracking-widest uppercase">
          Why Choose Us
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
          Partner with the Best
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          We specialize in creating bold, memorable brands that command attention and drive recognition.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-[#ff3300]/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff3300]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#ff3300]/10 rounded-xl mb-6 flex items-center justify-center group-hover:bg-[#ff3300]/20 group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-[#ff3300]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#ff3300] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}