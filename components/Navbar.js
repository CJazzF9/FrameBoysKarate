// components/Navbar.js
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Dragon image on the left */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Dragon_Title_Bar.webp"
            alt="Dragon Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation links on the right */}
        <nav className="flex space-x-6 text-sm md:text-base">
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
              <a className="hover:text-red-500 transition-colors duration-300">{label}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
