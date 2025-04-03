import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frame Bros Karate</title>
        <meta
          name="description"
          content="Support the Frame Brothers as they represent Team USA in the 2025 World Karate Championship."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Updated Header with Dragon + Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Updated Footer */}
      <footer className="bg-black text-white text-xs text-center py-3 w-full">
        <div className="max-w-7xl mx-auto px-4">
          © 2025 Frame Brothers Karate. All rights reserved.
        </div>
      </footer>
    </>
  )
}
