"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RetroGrid } from "@/components/ui/retro-grid"

export default function ContactSuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white pt-20 relative z-10">
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
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
      
      <AnimatedSection>
        <section className="py-12 px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                Thank You for Contacting Us!
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Your message has been successfully submitted. Our team will reach out to you shortly.
              </p>
              
              <p className="text-base text-gray-500 mb-8">
                We appreciate your interest in Gen Z Workspace and look forward to connecting with you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push('/')}
                  className="bg-[#ff3300] hover:bg-[#e62e00] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <Button
                  onClick={() => router.push('/contact')}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

