'use client';

import { ArrowRight, TrendingUp, Trophy, Zap, Briefcase, LineChart, Award } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { RetroGrid } from '@/components/ui/retro-grid';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const milestones = [
    { year: '2000', label: 'Establishment & Foundation', icon: Briefcase },
    { year: '2005', label: 'Market Expansion', icon: TrendingUp },
    { year: '2010', label: 'Global Growth', icon: LineChart },
    { year: '2018', label: 'Digital Innovation', icon: Zap },
    { year: '2023', label: 'Market Leadership', icon: Trophy },
  ];

  const brands = [
    { name: 'Goodwell', svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="#000000" strokeWidth="2" fill="none"/>
        <path d="M12 8v8M8 12h8" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )},
    { name: 'AlphaWave', svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="6" stroke="#000000" strokeWidth="2" fill="none"/>
        <path d="M8 12c0-2 1-4 4-4s4 2 4 4" stroke="#000000" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    )},
    { name: 'BuildingBlocks', svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="6" height="6" stroke="#000000" strokeWidth="2" fill="none"/>
        <rect x="12" y="12" width="6" height="6" stroke="#000000" strokeWidth="2" fill="none"/>
      </svg>
    )},
    { name: 'Cubekit', svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4l8 4v8l-8 4-8-4V8l8-4z" stroke="#000000" strokeWidth="2" fill="none"/>
        <path d="M12 4v16M4 8l8 4M20 8l-8 4" stroke="#000000" strokeWidth="2" fill="none"/>
      </svg>
    )},
    { name: 'FeatherDev', svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12h16M4 8h16M4 16h16" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 4l-4 4 4 4M16 20l4-4-4-4" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
  ];

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

      {/* Main Content */} 
      <div className="relative px-4 sm:px-8 py-16 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Our Story Section */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
                  <span className="text-[#000000] font-medium text-sm sm:text-base uppercase tracking-widest">
                    Our Story
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-4 leading-tight">
                  Your Vision Our Expertise Your
                  <br />
                  Success Get Noticed Generate
                </h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  <span className="text-[#ff3300]">Leads Dominate.</span>
                </p>
              </div>

              {/* Right Column - Images and Content */}
              <div className="flex flex-col justify-between">
                {/* Top Images */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative rounded-lg overflow-hidden group">
                    <img
                      src="/images/professional-at-desk.jpg"
                      alt="Tech professional at work"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="relative rounded-lg overflow-hidden group">
                    <img
                      src="/images/team-collaboration.jpg"
                      alt="Team collaboration"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-[#000000] text-base sm:text-lg leading-relaxed">
                  Delivering excellence through strategic expertise, innovative solutions, and dedicated partnership. We transform business challenges into growth opportunities with proven methodologies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Large Team Image */}
          <AnimatedSection delay={0.3}>
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src="/images/diverse-team-working-together.jpg"
                alt="Team collaboration in office"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Timeline and Content */}
              <div>
                <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
                  <span className="text-[#000000] font-medium text-sm sm:text-base uppercase tracking-widest">
                    Our Journey
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-6 leading-tight">
                  Your Gateway To
                  <br />
                  <span className="text-[#ff3300]">Online Excellence</span>
                  <br />
                  Dream Big In Pixels.
                </h2>

                <p className="text-[#000000] text-base sm:text-lg leading-relaxed mb-8">
                  From humble beginnings to market leadership, our journey reflects unwavering commitment to innovation and customer success.
                </p>

                <Link href="/contact">
                  <button className="bg-[#ff3300] hover:bg-[#ff4400] text-white px-8 py-3 rounded-lg font-semibold transition-colors mb-12 flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </button>
                </Link>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden h-96 sm:h-full min-h-96">
                  <img
                    src="/images/team-collaboration-office.jpg"
                    alt="Team collaboration in office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Partners Section */}
          <AnimatedSection delay={0.6}>
            <div className="mt-24 py-16">
              <div className="flex items-center gap-3 mb-6 bg-white w-fit px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-[#ff3300] rounded-full"></div>
                <span className="text-[#000000] font-medium text-sm sm:text-base uppercase tracking-widest">
                  Strategic Partners
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-12 leading-tight">
                Trusted By Industry
                <br />
                <span className="text-[#ff3300]">Leaders</span> Worldwide
              </h2>

              {/* Auto-Scrolling Brand Rows */}
              <div className="relative overflow-hidden">
                {/* First Row - Scrolls Left */}
                <div className="flex mb-6 animate-scroll-left">
                  {[...brands, ...brands, ...brands].map((brand, index) => {
                    return (
                      <div
                        key={`left-${index}`}
                        className="group flex-shrink-0 flex items-center gap-2 min-w-[200px] mx-4 bg-black/20 p-2 rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300"
                      >
                        <div className="text-[#000000] flex-shrink-0 w-12 h-12 flex items-center justify-center">
                          {brand.svg}
                        </div>
                        <p className="text-[#000000] font-medium text-sm whitespace-nowrap">
                          {brand.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Second Row - Scrolls Right */}
                <div className="flex animate-scroll-right">
                  {[...brands, ...brands, ...brands].map((brand, index) => {
                    return (
                      <div
                        key={`right-${index}`}
                        className="group flex-shrink-0 flex items-center gap-2 min-w-[200px] bg-black/20 p-2 rounded-lg mx-4 shadow-lg hover:opacity-80 transition-opacity duration-300"
                      >
                        <div className="text-[#000000] flex-shrink-0 w-12 h-12 flex items-center justify-center">
                          {brand.svg}
                        </div>
                        <p className="text-[#000000] font-medium text-sm whitespace-nowrap">
                          {brand.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
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
  );
}

