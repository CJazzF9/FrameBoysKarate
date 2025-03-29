import Layout from '../components/Layout'

export default function Sponsors() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>
          <p className="mb-8">We’re incredibly grateful to the organizations and individuals who support Ethan and Ryan on their journey to the world stage.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold text-yellow-600">🥇 Gold Sponsor</h3>
              <p className="text-sm mt-2">[Your Name Here]</p>
            </div>
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold text-gray-500">🥈 Silver Sponsor</h3>
              <p className="text-sm mt-2">[Your Name Here]</p>
            </div>
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold text-orange-600">🥉 Bronze Sponsor</h3>
              <p className="text-sm mt-2">[Your Name Here]</p>
            </div>
          </div>

          <p className="mt-10">Interested in sponsoring? <a href="/contact" className="text-blue-600 underline">Get in touch</a> to learn more about sponsorship benefits!</p>
        </div>
      </div>
    </Layout>
  )
}
