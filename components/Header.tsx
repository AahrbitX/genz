"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 ease-in-out w-screen ${
      isScrolled ? 'xl:bg-white/50 xl:backdrop-blur-md' : ''
    }`}>



      <div className="max-w-7xl flex justify-between items-center relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/genz-logo.png"
            alt="Gen Z Workspace Logo"
            width={60}
            height={80}
            className={`object-contain transition-all duration-300 ease-in-out ${
              isScrolled 
                ? 'w-[40px] h-[50px] sm:w-[50px] sm:h-[60px]' 
                : 'w-[60px] h-[80px] sm:w-[80px] sm:h-[100px]'
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2 sm:gap-4">
          <Link href="/">
            <Button
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base ${
                isActive("/")
                  ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                  : "border-[#ff3300] text-[black] hover:bg-[#ff3300] hover:text-white bg-transparent"
              }`}
              variant={isActive("/") ? "default" : "outline"}
            >
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base ${
                isActive("/about")
                  ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                  : "border-[#ff3300] text-[#000000] hover:bg-[#ff3300] hover:text-white bg-transparent"
              }`}
              variant={isActive("/about") ? "default" : "outline"}
            >
              About
            </Button>
          </Link>
          <Link href="/services">
            <Button
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base ${
                isActive("/services")
                  ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                  : "border-[#ff3300] text-[#000000] hover:bg-[#ff3300] hover:text-white bg-transparent"
              }`}
              variant={isActive("/services") ? "default" : "outline"}
            >
              Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base ${
                isActive("/contact")
                  ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                  : "border-[#ff3300] text-[#000000] hover:bg-[#ff3300] hover:text-white bg-transparent"
              }`}
              variant={isActive("/contact") ? "default" : "outline"}
            >
              Contact
            </Button>
          </Link>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 z-60 relative hover:cursor-pointer rounded-lg"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Cross icon
            <div className="relative w-6 h-6">
              {/* <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#5f6060] transform -translate-y-1/2 rotate-45 transition-transform duration-300"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#5f6060] transform -translate-y-1/2 -rotate-45 transition-transform duration-300"></span> */}
            </div>
          ) : (
            // Hamburger icon
            <>
              <span className="w-6 h-0.5 bg-[#ff3300] transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-[#ff3300] transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-[#ff3300] transition-all duration-300"></span>
            </>
          )}
        </button>
      </div>

      <div className="md:hidden">
  {/* Background overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={closeMobileMenu}
          />
        )}

      <div className="md:hidden">
        {/* Background overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={closeMobileMenu}
            />
          )}

        {/* Mobile Menu */}
          <div className="md:hidden">
            {/* Overlay */}
              {isMobileMenuOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={closeMobileMenu}
                />
              )}

            {/* Floating Menu */}
            <div
              className={`fixed top-5 right-4 h-[250px] w-48 bg-[#8e8e8e] text-white rounded-xl shadow-lg z-50 transform transition-all duration-300 ease-in-out
                ${isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <nav className="flex flex-col text-center py-4">
                <Link href="/" onClick={closeMobileMenu}>
                  <div
                    className={`py-3 px-6 text-lg font-semibold transition-colors duration-200 ${
                      isActive("/")
                        ? "text-white rounded-md mx-2"
                        : "rounded-md mx-2"
                    }`}
                  >
                    Home
                  </div>
                </Link>
                <Link href="/about" onClick={closeMobileMenu}>
                  <div
                    className={`py-3 px-6 text-lg font-semibold transition-colors duration-200 ${
                      isActive("/about")
                        ? "text-white rounded-md mx-2"
                        : "rounded-md mx-2"
                    }`}
                  >
                    About
                  </div>
                </Link>
                <Link href="/services" onClick={closeMobileMenu}>
                  <div
                    className={`py-3 px-6 text-lg font-semibold transition-colors duration-200 ${
                      isActive("/services")
                        ? "text-white rounded-md mx-2"
                        : "rounded-md mx-2"
                    }`}
                  >
                    Services
                  </div>
                </Link>
                <Link href="/contact" onClick={closeMobileMenu}>
                  <div
                    className={`py-3 px-6 text-lg font-semibold transition-colors duration-200 ${
                      isActive("/contact")
                        ? "text-white rounded-md mx-2"
                        : "rounded-md mx-2"
                    }`}
                  >
                    Contact
                  </div>
                </Link>
              </nav>
            </div>
          </div>

      </div>

    </div>



      {isMobileMenuOpen && (
        <div
          className="md:hidden w-screen"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  )
}
