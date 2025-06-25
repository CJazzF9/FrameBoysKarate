import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="relative h-screen overflow-hidden">
        {/* YouTube Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/wDthSliP7PI?autoplay=1&mute=1&controls=0&loop=1&playlist=r3f-yDNQXAQ&modestbranding=1&showinfo=0&rel=0"
            title="Karate Highlights"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
            On the Road to Germany
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow">
            Join the Frame Brothers as they represent Team USA at the 2025 World Karate Championship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/support" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow font-semibold">
              Support the Journey
            </Link>
            <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow font-semibold">
              Meet the Brothers
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
