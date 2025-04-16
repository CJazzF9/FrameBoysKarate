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
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Title */}
        <div className="flex-shrink-0 md:w-auto">
          <h1 className="font-bold text-xl sm:text-2xl whitespace-nowrap ml-2">
            🥋 Frame Brothers Karate
          </h1>
        </div>

        {/* Center: Dragon Banner */}
        <div className="flex-grow hidden md:flex justify-center overflow-hidden">
          <Image
            src="/images/Dragon_Title_Bar.png"
            alt="Dragon Banner"
            width={600}
            height={100}
            className="object-cover h-[100px] w-auto"
            priority
          />
        </div>

        {/* Right: Navigation */}
        <nav className="flex-shrink-0 flex justify-end gap-3 whitespace-nowrap">
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
