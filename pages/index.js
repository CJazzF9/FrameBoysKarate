import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/hero-placeholder.jpg')" }}>
        <div className="bg-black/60 p-8 rounded-lg text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-red-500 drop-shadow-lg">
            On the Road to Germany
          </h1>
          <p className="mb-6 text-lg max-w-xl mx-auto">
            Join the Frame Brothers as they represent Team USA in the 2025 World Karate Championship. Follow their journey and learn how you can support their mission!
          </p>
          <div className="flex justify-center gap-4">
            <a href="/support" className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition">
              Support the Journey
            </a>
            <a href="/about" className="px-6 py-2 bg-white text-red-600 hover:text-white hover:bg-red-500 border border-red-600 rounded-full font-semibold transition">
              Meet the Brothers
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
