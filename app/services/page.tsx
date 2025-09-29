import AnimatedSection from "@/components/animations/AnimatedSection"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative mt-20 w-screen overflow-x-hidden">
      {/* Animated Floor Grid Background */}

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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Brand Identity Section */}
        
        <AnimatedSection>
          <section id="brand-identity" className="mb-5 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-sm sm:text-3xl lg:text-6xl font-bold text-[#ff3300] mb-3 sm:mb-4">Brand Identity</h2>
                <h3 className="text-[10px] sm:text-xl lg:text-5xl font-medium text-black mb-4 sm:mb-6">
                  Build a Brand that Sticks
                </h3>
                <p className="text-gray-700 text-[8px] sm:text-base lg:text-xl leading-relaxed">
                  Your brand identity is more than just a logo or color palette—it's the complete visual and verbal
                  language that shapes how your audience sees you. From color palettes and typography to messaging and
                  tone, every detail should reflect your unique personality. We specialize in creating bold, memorable
                  identities for visionary brands that command attention, drive recognition, and differentiate you in
                  crowded markets. Whether you're launching a startup or rebranding an established business.
                </p>
              </div>

              {/* Image - Right */}
              <div className="relative">
                <div className="bg-gray-300 rounded-lg aspect-[4/3] flex items-center justify-center">
                  {/* <span className="text-gray-600 text-sm sm:text-lg"></span> */}
                  <Image src="/images/services/Brand-Identity.png" alt="Brand Identity" width={500} height={500} className="object-cover w-full h-full rounded-2xl" />
                </div>
              </div>
              
            </div>
          </section>
        </AnimatedSection>

        {/* Brand Design Section */}
        <AnimatedSection delay={0.2}>
          <section id="brand-design" className="mb-5 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image - Left */}
              <div className="relative lg:order-1">
                <div className="bg-gray-300 rounded-lg aspect-[4/3] flex items-center justify-center">
                  {/* <span className="text-gray-600 text-sm sm:text-lg">BRAND DESIGN</span> */}
                  <Image src="/images/services/Brand-Design.png" alt="Brand Design" width={500} height={500} className="object-cover w-full h-full rounded-2xl" />
                </div>
              </div>

              {/* Text Content - Right */}
              <div className="lg:order-2 xl:text-end">
                <h2 className="text-sm sm:text-3xl lg:text-6xl font-bold text-[#ff3300] mb-3 sm:mb-4">Brand Design</h2>
                <h3 className="text-[10px] sm:text-xl lg:text-5xl font-medium text-black mb-4 sm:mb-6">
                  Bold. Strategic. Unforgettable.
                </h3>
                <p className="text-gray-700 text-[8px] sm:text-base lg:text-xl leading-relaxed">
                  We offer professional brand design services that go beyond just good looks. From logo design and visual
                  identity systems to packaging and digital assets, we create designs that reflect your brand's voice,
                  values, and vision. Whether you're building from scratch or refreshing an existing brand, our designs
                  are crafted to grab attention and build recognition—fast. We believe harmony begins with a singular
                  story, and our job is to bring that story to life through thoughtful, strategic, and memorable design.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Brand Management Section */}
        <AnimatedSection delay={0.4}>
          <section id="brand-management" className="mb-5 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-sm sm:text-3xl lg:text-6xl font-bold text-[#ff3300] mb-3 sm:mb-4">
                  Brand Management
                </h2>
                <h3 className="text-[10px] sm:text-xl lg:text-5xl font-medium text-black mb-4 sm:mb-6">
                  Consistency Builds Trust
                </h3>
                <p className="text-gray-700 text-[8px] sm:text-base lg:text-xl leading-relaxed">
                  Our expert brand management services ensure your brand looks, feels, and sounds the same across every
                  platform. From maintaining visual consistency and managing your brand identity. Whether you're scaling
                  up or staying sharp, we help you maintain brand consistency, boost recognition, and build long-term
                  trust with your audience.
                </p>
              </div>

              {/* Image - Right */}
              <div className="relative">
                <div className="bg-gray-300 rounded-lg aspect-[4/3] flex items-center justify-center">
                  {/* <span className="text-gray-600 text-sm sm:text-lg">BRAND MANAGEMENT</span> */}
                  <Image src="/images/services/Brand-Management.png" alt="Brand Management" width={500} height={500} className="object-cover w-full h-full rounded-2xl" />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

    </div>
  )
}
