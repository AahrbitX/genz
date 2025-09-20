"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-[#fffbfb] px-4 sm:px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/genz-logo.png"
            alt="Gen Z Workspace Logo"
            width={60}
            height={80}
            className="object-contain sm:w-[80px] sm:h-[100px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2 sm:gap-4">
          <Link href="/">
            <Button
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base ${
                isActive("/")
                  ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                  : "border-[#5f6060] text-[#5f6060] hover:bg-[#5f6060] hover:text-white bg-transparent"
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
                  : "border-[#5f6060] text-[#5f6060] hover:bg-[#5f6060] hover:text-white bg-transparent"
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
                  : "border-[#5f6060] text-[#5f6060] hover:bg-[#5f6060] hover:text-white bg-transparent"
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
                  : "border-[#5f6060] text-[#5f6060] hover:bg-[#5f6060] hover:text-white bg-transparent"
              }`}
              variant={isActive("/contact") ? "default" : "outline"}
            >
              Contact
            </Button>
          </Link>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 z-50 relative"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Cross icon
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#5f6060] transform -translate-y-1/2 rotate-45 transition-transform duration-300"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#5f6060] transform -translate-y-1/2 -rotate-45 transition-transform duration-300"></span>
            </div>
          ) : (
            // Hamburger icon
            <>
              <span className="w-6 h-0.5 bg-[#5f6060] transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-[#5f6060] transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-[#5f6060] transition-all duration-300"></span>
            </>
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={closeMobileMenu}>
              <Button
                className={`w-full px-4 py-3 rounded-full text-base transition-all duration-200 ${
                  isActive("/")
                    ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                    : "border-[#5f6060] text-[#5f6060] hover:bg-[#5f6060] hover:text-white bg-transparent"
                }`}
                variant={isActive("/") ? "default" : "outline"}
              >
                Home
              </Button>
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              <Button
                className={`w-full px-4 py-3 rounded-full text-base transition-all duration-200 ${
                  isActive("/about")
                    ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                    : "border-[#5f6060] text-[#5f6060] hover:bg-[#5f6060] hover:text-white bg-transparent"
                }`}
                variant={isActive("/about") ? "default" : "outline"}
              >
                About
              </Button>
            </Link>
            <Link href="/services" onClick={closeMobileMenu}>
              <Button
                className={`w-full px-4 py-3 rounded-full text-base transition-all duration-200 ${
                  isActive("/services")
                    ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                    : "border-[#5f6060] text-[#5f6060] hover:text-white bg-transparent"
                }`}
                variant={isActive("/services") ? "default" : "outline"}
              >
                Services
              </Button>
            </Link>
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button
                className={`w-full px-4 py-3 rounded-full text-base transition-all duration-200 ${
                  isActive("/contact")
                    ? "bg-[#ff3300] hover:bg-[#e62e00] text-white"
                    : "border-[#5f6060] text-[#5f6060] hover:text-white bg-transparent"
                }`}
                variant={isActive("/contact") ? "default" : "outline"}
              >
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  )
}
