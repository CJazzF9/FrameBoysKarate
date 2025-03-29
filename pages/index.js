import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-red-600">On the Road to Germany</h1>
        <p className="text-lg">
          Join the Frame Brothers as they represent Team USA in the 2025 World Karate Championship.
          Follow their journey and learn how you can support their mission!
        </p>
      </div>
    </Layout>
  )
}
