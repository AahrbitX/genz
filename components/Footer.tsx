import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#d9d9d9] py-8 sm:py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/genz-logo.png"
              alt="Gen Z Workspace Logo"
              width={60}
              height={75}
              className="object-contain mb-4 sm:mb-6"
            />
            <div className="text-[#5f6060] text-sm space-y-2">
              <p>
                Email: <a href="mailto:genzworkspace.in@gmail.com" className="hover:text-[#ff3300] transition-colors">genzworkspace.in@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+918072474376" className="hover:text-[#ff3300] transition-colors">+91 80724 74376</a>
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-[#000000] mb-3 sm:mb-4">PAGES</h3>
            <ul className="text-[#5f6060] text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-[#ff3300] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff3300] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff3300] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff3300] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-[#000000] mb-3 sm:mb-4">SERVICES</h3>
            <ul className="text-[#5f6060] text-sm space-y-2">
              <li>
                <Link href="/services#brand-identity" className="hover:text-[#ff3300] transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services#brand-design" className="hover:text-[#ff3300] transition-colors">
                  Brand Design
                </Link>
              </li>
              <li>
                <Link href="/services#brand-management" className="hover:text-[#ff3300] transition-colors">
                  Brand Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-[#000000] mb-3 sm:mb-4">CONNECT</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/genzworkspace.in?igsh=b3I4cXhxaDlkc2Y2" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <Instagram className="text-white w-4 h-4" />
              </a>
              <a href="https://wa.me/8072474376" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <MessageCircle className="text-white w-4 h-4" />
              </a>
              <a href="mailto:genzworkspace@gmail.com" className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <Mail className="text-white w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/genz-workspace/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <Linkedin className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
