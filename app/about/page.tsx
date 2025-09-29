import Image from "next/image"
import AnimatedSection from "@/components/animations/AnimatedSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative mt-20 w-screen overflow-x-hidden">
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
      <main className="px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto">
        {/* WHY WE ? Section */}
        <AnimatedSection>
        <section className="mb-12 sm:mb-16">
          <h2 className="xl:text-5xl sm:text-xl font-bold text-[#ff3300] mb-4 sm:mb-6">WHY WE ?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-xl sm:text-base">
            <p className="lg:text-2xl sm:text-base">
              Because we see branding as more than a service — it's a partnership. We take the time to understand your
              vision, values, and ethos, translating them into a brand identity that feels authentic and resonates with
              your audience. We don't just create brands; we craft strategic thinking, so you get one that not only
              looks stunning but also drives real impact.
            </p>
            <p className="lg:text-2xl sm:text-base">
              Our process is collaborative, transparent, and rooted in a deep respect for your brand's story. We listen,
              we create, and we push boundaries together — because your success is our success.
            </p>
          </div>
        </section>
        </AnimatedSection>

        {/* ABOUT US Section */}
        <AnimatedSection delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#ff3300] mb-6">ABOUT US</h2>
            <p className="text-black leading-relaxed text-base sm:text-lg lg:text-2xl">
              <span className="font-medium text-3xl">Gen Z Workspace</span> is more than just a branding workspace it's a creative ecosystem built for visionary brands that dare to be different. We're not just shaping visuals; we're crafting identities that echo with personality, purpose, and unforgettable presence. At the heart of our studio lies a passion for storytelling through brand design, identity, and management — all wrapped in modern aesthetics and strategic brilliance. We're fueled by ambition, driven by design, and obsessed with turning raw ideas into refined brand realities. Whether you're launching a fresh concept or refreshing an existing identity, our team is here to transform your brand into something magnetic, meaningful, and unmistakably you. Because at Gen Z Workspace, we don't just build brands we build legacies.
            </p>
          </div>

          <div className="flex justify-center items-center lg:col-span-2 h-full w-[350px]">
            {/* <div className="w-90 h-90 flex flex-col items-center justify-center">
              <div className="relative"> */}
                <Image
                  src="/images/genz-logo.png"
                  alt="Gen Z Workspace Logo"
                  width={350}
                  height={400}
                  className="object-cover"
                />
              </div>
            {/* </div>
          </div> */}
        </section>
        </AnimatedSection>
      </main>

    </div>
  )
}
