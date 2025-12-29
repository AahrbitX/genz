"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import AutoSlider from "@/components/AutoSlider"
import AnimatedSection from "@/components/animations/AnimatedSection"
import StaggeredContainer from "@/components/animations/StaggeredContainer"
import { RetroGrid } from "@/components/ui/retro-grid"
import Image from "next/image"

export default function HomePage() {
  const testimonials = [
    {
      text: "Our brand went from being overlooked to standing out in a crowded market. Their total branding package combined with strategic social media management was a game changer for us.",
      company: "Vault of Gamers",
      initials: "VG",
      imgpath:"/images/logo/3.jpg",
      color: "#990000",
    },
    {
      text: "Incredible attention to detail and creativity. I got my logo within a few days and didn't even need revisions. It felt like they read my mind!",
      company: "Kanyakumai Polymers",
      initials: "ES",
      imgpath:"/images/logo/4.jpeg",
      color: "#994400",
    },
    {
      text: "From logo design to daily social media campaigns, they handle everything seamlessly. Our brand finally has a consistent look, feel, and message across all platforms.",
      company: "Pommi Caters",
      initials: "PC",
      imgpath:"/images/logo/1.jpg",
      color: "#996600",
    },
  ]
  return (
    <div className="min-h-screen relative w-screen overflow-x-hidden">
      {/* RetroGrid Background for Entire Page */}
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
      <AnimatedSection>
        <section className="h-64 sm:h-80 lg:h-[600px] flex items-center justify-center relative mt-44">
        {/* <iframe
          className="w-full h-full absolute inset-0"
          src="https://player.vimeo.com/video/937830968?autoplay=1&muted=1&loop=1&controls=0&background=1&title=0&byline=0&portrait=0"
          title="Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%' }}
        ></iframe> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-[#000000]">
            Let Us Tell Your <span className="text-[#ff3300] text-3xl sm:text-4xl lg:text-5xl">"Brand"</span> Stories
          </h2>
      </section>
      </AnimatedSection>

      {/* Brand Stories Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-[#000000]">
            Let Us Tell Your <span className="text-[#ff3300] text-3xl sm:text-4xl lg:text-5xl">"Brand"</span> Stories
          </h2> */}

            <Card className="bg-[#dadada] p-0 max-w-6xl h-[715px] mx-auto rounded-xl lg:rounded-[120px] overflow-hidden shadow-2xl ">
            <div className="flex flex-col lg:flex-row gap-10 h-full ">
              {/* Left side - Dark gray placeholder */}
              <div className="w-full lg:w-2/4 h-full">
                  <div className="bg-[#8e8e8e] h-full lg:rounded-l-[120px]">
                    <Image src="/images/logo/brand.gif" alt="Brand Stories"  width={500} height={500} className="object-cover w-full h-full" />
                    
                  </div>
              </div>

              {/* Right side - Content area */}
              <div className="w-full h-full lg:w-2/4 flex justify-center flex-col px-4 rounded-none lg:rounded-r-3xl pb-4 sm:pb-0">
                <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full sm:mb-8">
                  <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
                  <span className="text-[#000000] font-medium text-base sm:text-lg">About Us</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-[#000000] leading-tight">
                  Gen Z Workspace is more than just a branding workspace
                </h3>

                <p className="text-[#000000] mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg xl:text-xl 2xl:text-2xl">
                  It's a creative ecosystem built for visionary brands that dare to be different. We're not just shaping
                  visuals; we're crafting identities that echo with personality, purpose, and unforgettable presence.
                </p>

                <Link href="/about">
                  <button className="text-[#000000] font-medium text-base sm:text-lg underline hover:text-[#ff3300] transition-colors duration-300 flex justify-start">
                    See some highlights
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.4}>
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated Grid Background */}
        {/* <div className="absolute inset-0">
          <div className="grid-background"></div>
        </div> */}

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col sm:block items-center sm:items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 sm:mb-12 lg:mb-16 text-[#000000]">
            Our Services
          </h2>

            <StaggeredContainer className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Brand Identity */}
              <Card className=" bg-[#e8e8e8]/50 p-6 sm:p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 w-full max-w-sm flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-[#000000]">Brand Identity</h3>
                <p className="text-xl font-medium mb-4 text-[#000000]">Build a Brand that sticks</p>

                <p className="text-[#000000] mb-6 sm:mb-8 text-xl leading-relaxed">
                it's the complete visual and verbal language that shapes how audience sees you....
              </p>
              <Link href="/services#brand-identity">
                <div className="flex items-center justify-center hover:cursor-pointer relative overflow-hidden rounded-full px-6 py-3">
                    <div className="flex items-center justify-between w-full gap-2 relative">
                      {/* Single chevron that slides from left to right */}
                      <div className="relative z-20 w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-x-[120px]">
                        <ChevronRight className="text-[#ffffff] text-xs font-bold h-3 w-3" />
                      </div>
                      
                      {/* Center text */}
                      <span className="relative z-20 text-[#000000] group-hover:text-[#ffffff] font-bold text-sm transition-colors duration-300">
                        READ MORE
                      </span>
                      
                      {/* Right placeholder for spacing */}
                      <div className="w-5 h-5"></div>
                    </div>
                    
                    {/* Expanding background */}
                    <div className="absolute inset-0 bg-[#000000] rounded-full transform scale-0 group-hover:scale-100 origin-center transition-transform duration-500 ease-out z-10"></div>
                </div>
              </Link>
            </Card>

            {/* Arrow between first and second card - hidden on mobile */}
              <ChevronRight className="text-[#000000] text-2xl lg:text-4xl font-bold hidden lg:block" />

            {/* Brand Design */}
              <Card className=" bg-[#e8e8e8]/50 p-6 sm:p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 w-full max-w-sm flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-[#000000]">Brand Design</h3>
                <p className="text-xl font-medium mb-4 text-[#000000]">Bold.Strategic.Unforgettable</p>

                <p className="text-[#000000] mb-6 sm:mb-8 text-xl leading-relaxed">
                we offer professional brand design services that go beyond just good looks....
              </p>
              <Link href="/services#brand-design">
                <div className="flex items-center justify-center hover:cursor-pointer relative overflow-hidden rounded-full px-6 py-3">
                    <div className="flex items-center justify-between w-full gap-2 relative">
                      {/* Single chevron that slides from left to right */}
                      <div className="relative z-20 w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-x-[120px]">
                        <ChevronRight className="text-[#ffffff] text-xs font-bold h-3 w-3" />
                      </div>
                      
                      {/* Center text */}
                      <span className="relative z-20 text-[#000000] group-hover:text-[#ffffff] font-bold text-sm transition-colors duration-300">
                        READ MORE
                      </span>
                      
                      {/* Right placeholder for spacing */}
                      <div className="w-5 h-5"></div>
                    </div>
                    
                    {/* Expanding background */}
                    <div className="absolute inset-0 bg-[#000000] rounded-full transform scale-0 group-hover:scale-100 origin-center transition-transform duration-500 ease-out z-10"></div>
                </div>
              </Link>
            </Card>

            {/* Arrow between second and third card - hidden on mobile */}
              <ChevronRight className="text-[#000000] text-2xl font-bold hidden lg:block"  />

            {/* Brand Management */}
              <Card className="bg-[#e8e8e8]/50 p-6 sm:p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300 w-full max-w-sm flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-[#000000]">Brand Management</h3>
                <p className="text-xl font-medium mb-4 text-[#000000]">Consistency Builds Trust</p>

                <p className="text-[#000000] mb-6 sm:mb-8 text-xl leading-relaxed">
                our expert brand management services ensure your brand looks,and sounds ....
              </p>

                <Link href="/services#brand-management">
                  <div className="flex items-center justify-center hover:cursor-pointer relative overflow-hidden rounded-full px-6 py-3">
                    <div className="flex items-center justify-between w-full gap-2 relative">
                      {/* Single chevron that slides from left to right */}
                      <div className="relative z-20 w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-x-[120px]">
                        <ChevronRight className="text-[#ffffff] text-xs font-bold h-3 w-3" />
                      </div>
                      
                      {/* Center text */}
                      <span className="relative z-20 text-[#000000] group-hover:text-[#ffffff] font-bold text-sm transition-colors duration-300">
                        READ MORE
                      </span>
                      
                      {/* Right placeholder for spacing */}
                      <div className="w-5 h-5"></div>
                    </div>
                    
                    {/* Expanding background */}
                    <div className="absolute inset-0 bg-[#000000] rounded-full transform scale-0 group-hover:scale-100 origin-center transition-transform duration-500 ease-out z-10"></div>
                </div>
                </Link>
            </Card>
            </StaggeredContainer>
        </div>
      </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={0.6}>
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            width: '1500px',
            height: '700px',
            left: 'calc(50% - 1500px/2)',
            top: '-146px',
            background: 'radial-gradient(54.72% 54.76% at 50.92% -20.34%, #FF3300 41.98%, rgba(255, 51, 0, 0.620122) 60.13%, rgba(255, 51, 0, 0.306537) 76.65%, rgba(255, 51, 0, 0.169634) 99.79%, rgba(255, 51, 0, 0) 100%)',
            filter: 'blur(70.35px)'
          }}
        >
          
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-8 sm:mb-12 w-full flex justify-center items-center mx-auto text-[#000000]">
            See What People Think About Us
          </h2>

            <AutoSlider
              testimonials={testimonials}
              autoSlideInterval={4000}
              pauseOnHover={true}
            />
        </div>
      </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.8}>
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto  bg-[#fffbfb] relative z-10">
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
