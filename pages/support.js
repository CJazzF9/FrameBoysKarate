import Link from 'next/link'
import Layout from '../components/Layout'

export default function Support() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Support the Journey</h2>
          <p className="text-lg mb-6">
            Ethan and Ryan are honored to represent Team USA at the 2025 WKU World Karate Championship in Germany.
            This journey involves international travel, tournament fees, training camps, and gear — and they can’t do it alone.
          </p>
          <p className="mb-6">
            Your support helps make this opportunity possible! Whether it’s a few dollars, gear sponsorship, or simply helping spread the word, every bit counts.
          </p>
          <Link href="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded shadow transition">
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  )
}
