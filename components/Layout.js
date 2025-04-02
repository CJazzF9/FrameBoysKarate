import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frame Bros Karate</title>
        <meta name="description" content="Support the Frame Brothers as they represent Team USA in the 2025 World Karate Championship." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-bold text-sm sm:text-base">🥋 Frame Bros Karate</h1>
          <nav className="space-x-2 text-xs sm:text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/journey">Journey</Link>
            <Link href="/support">Support</Link>
            <Link href="/sponsors">Sponsors</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-xs text-center py-3 w-full">
        <div className="max-w-7xl mx-auto px-4">
          © 2025 Frame Brothers Karate. All rights reserved.
        </div>
      </footer>
    </>
  )
}
