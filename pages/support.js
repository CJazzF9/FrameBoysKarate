import Layout from '../components/Layout'
import Link from 'next/link'

export default function Support() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Support the Brothers</h2>
          <p className="mb-6">
            Ethan and Ryan have been selected to represent Team USA at the 2025 WKU World Karate Championships in Germany.
            Supporting them helps cover travel, tournament fees, training gear, and more.
          </p>
          <p className="mb-8">
            To support their mission, please reach out directly via email. We'd love to tell you more about their journey and how you can be involved.
          </p>
          <a href="mailto:CJazzF@gmail.com" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow">
            Contact Us to Support
          </a>
        </div>
      </div>
    </Layout>
  )
}
