// components/Navbar.js
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="bg-black text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center md:justify-between md:gap-6">
        {/* Left title */}
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <h1 className="font-bold text-sm sm:text-base whitespace-nowrap">🥋 Frame Brothers Karate</h1>
        </div>

        {/* Center-stretched Dragon Image */}
        <div className="w-full md:flex-1 md:flex md:justify-center mb-2 md:mb-0">
          <Image
            src="/images/Dragon_Title_Bar.png"
            alt="Dragon Logo"
            width={400}
            height={60}
            className="object-contain mx-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-3">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/journey', label: 'Journey' },
            { href: '/support', label: 'Support' },
            { href: '/sponsors', label: 'Sponsors' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/contact', label: 'Contact' }
          ].map(({ href, label }) => (
            <Link key={href} href={href} legacyBehavior>
              <a className="relative group px-2 py-1 text-white hover:text-red-500 transition-colors">
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 transform scale-0 group-active:scale-100 transition-transform duration-200 ease-out bg-red-600 opacity-20 rounded"></span>
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
} 
