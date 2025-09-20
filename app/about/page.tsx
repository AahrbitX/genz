import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto">
        {/* WHY WE ? Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4 sm:mb-6">WHY WE ?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Because we see branding as more than a service — it's a partnership. We take the time to understand your
              vision, values, and ethos, translating them into a brand identity that feels authentic and resonates with
              your audience. We don't just create brands; we craft strategic thinking, so you get one that not only
              looks stunning but also drives real impact.
            </p>
            <p>
              Our process is collaborative, transparent, and rooted in a deep respect for your brand's story. We listen,
              we create, and we push boundaries together — because your success is our success.
            </p>
          </div>
        </section>

        {/* ABOUT US Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4 sm:mb-6">ABOUT US</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Gen Z Workspace is more than just a branding workspace. It's a creative ecosystem built for visionary
              brands that dare to be different. We're not just shaping visuals; we're crafting identities that echo with
              authenticity, purpose, and unforgettable presence. At the heart of our work lies a commitment to strategic
              thinking and innovative brand management — all wrapped in modern aesthetics and strategic excellence.
              We're fueled by design, driven by strategy, and obsessed with results. Whether you're a startup looking to
              make your mark or launching a fresh concept or refreshing an existing identity, our team is here to
              transform your brand into something magnetic, meaningful, and unmistakably you. Because at Gen Z
              Workspace, we don't just build brands; we build legacies.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-48 sm:w-64 h-48 sm:h-64 flex items-center justify-center">
              <Image
                src="/images/genz-logo.png"
                alt="Gen Z Workspace Logo"
                width={200}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
