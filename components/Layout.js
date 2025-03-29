import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="sticky top-0 z-50 bg-blue-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-lg font-extrabold tracking-wide">
            🥋 Frame Bros Karate
          </div>
          <nav>
            <ul className="flex gap-4 text-sm sm:text-base font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/road">Journey</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/sponsors">Sponsors</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-900 text-white text-center p-2 text-sm">
        &copy; 2025 Frame Brothers Karate. All rights reserved.
      </footer>
    </div>
  );
}
