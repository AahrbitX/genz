import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#d9d9d9] py-8 sm:py-12 px-4 sm:px-6">
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
              <p>Email: genzworkspace@gmail.com</p>
              <p>Phone: +91 80724 74376</p>
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
              <li>Brand Identity</li>
              <li>Brand Design</li>
              <li>Brand Management</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-[#000000] mb-3 sm:mb-4">CONNECT</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <span className="text-white text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <span className="text-white text-xs">ig</span>
              </div>
              <div className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <span className="text-white text-xs">@</span>
              </div>
              <div className="w-8 h-8 bg-[#000000] rounded-full flex items-center justify-center hover:bg-[#ff3300] transition-colors cursor-pointer">
                <span className="text-white text-xs">tw</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
