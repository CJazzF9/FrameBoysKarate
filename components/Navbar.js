// components/Navbar.js
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/journey', label: 'Journey' },
    { href: '/support', label: 'Support' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className="bg-black text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Title */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="font-bold text-xl sm:text-2xl whitespace-nowrap">
            🥋 Frame Brothers Karate
          </h1>

          {/* Hamburger Icon (Emoji Fallback) */}
          {isMobile && (
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? '✖️' : '☰'}
            </button>
          )}
        </div>

        {/* Dragon Banner */}
        <div className="w-full md:flex-1 flex justify-center overflow-hidden">
          <Image
            src="/images/Dragon_Title_Bar.png"
            alt="Dragon Banner"
            width={600}
            height={100}
            className="object-cover h-[100px] w-auto"
            priority
          />
        </div>

        {/* Navigation Links */}
        <nav
          className={`w-full md:w-auto flex-col md:flex-row md:flex md:justify-end gap-3 transition-all duration-300 ease-in-out ${
            isMobile ? (menuOpen ? 'flex' : 'hidden') : 'flex'
          }`}
        >
          {navLinks.map(({ href, label }) => (
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
