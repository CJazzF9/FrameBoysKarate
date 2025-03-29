import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Frame Brothers Karate 🇺🇸</h1>
        <nav className="mt-2 sm:mt-0">
          <ul className="flex gap-4 text-sm sm:text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/road">Road</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-blue-900 text-white text-center p-2 text-sm">
        &copy; 2025 Frame Brothers Karate. All rights reserved.
      </footer>
    </div>
  );
}
