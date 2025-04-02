import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Sponsors() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>
          <p className="mb-8">We’re incredibly grateful to the organizations and individuals who support Ethan and Ryan on their journey to the world stage.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gold Sponsor */}
            <div className="p-4 border rounded shadow bg-white/90">
              <h3 className="text-xl font-bold text-yellow-600">🥇 Gold Sponsor</h3>
              <p className="text-sm mt-1 italic">$500+ value</p>
              <Link href="https://tobinselite.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/gallery/Tobins.png"
                  alt="Tobins Elite"
                  width={200}
                  height={100}
                  className="mx-auto mt-4 rounded shadow"
                />
              </Link>
              <p className="text-sm mt-2">Tobins Elite</p>
            </div>

            {/* Silver Sponsor */}
            <div className="p-4 border rounded shadow bg-white/90">
              <h3 className="text-xl font-bold text-gray-500">🥈 Silver Sponsor</h3>
              <p className="text-sm mt-1 italic">$100 – $499 value</p>
              <div className="mt-4">
                <Image
                  src="/images/gallery/Jens_Clean.png"
                  alt="Jen's Cleaning Angels"
                  width={200}
                  height={100}
                  className="mx-auto rounded shadow"
                />
              </div>
              <p className="text-sm mt-2">Jen's Cleaning Angels</p>
            </div>

            {/* Bronze Sponsor - Knafs */}
            <div className="p-4 border rounded shadow bg-white/90">
              <h3 className="text-xl font-bold text-orange-600">🥉 Bronze Sponsor</h3>
              <p className="text-sm mt-1 italic">Under $100 value</p>
              <Link href="https://www.knafs.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/gallery/Knafs.png"
                  alt="Knafs"
                  width={200}
                  height={100}
                  className="mx-auto mt-4 rounded shadow"
                />
              </Link>
              <p className="text-sm mt-2">Knafs</p>
            </div>

            {/* Bronze Sponsor - Birds and Bees */}
            <div className="p-4 border rounded shadow bg-white/90">
              <h3 className="text-xl font-bold text-orange-600">🥉 Bronze Sponsor</h3>
              <p className="text-sm mt-1 italic">Under $100 value</p>
              <Link href="https://birdsandbeesutah.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/gallery/Birds_Bee.jpg"
                  alt="For the Birds and Bees"
                  width={200}
                  height={100}
                  className="mx-auto mt-4 rounded shadow"
                />
              </Link>
              <p className="text-sm mt-2">For the Birds and Bees</p>
            </div>
          </div>

          <p className="mt-10">Interested in sponsoring? <a href="/contact" className="text-blue-600 underline">Get in touch</a> to learn more about sponsorship benefits!</p>
        </div>
      </div>
    </Layout>
  )
}
