import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-red-600">On the Road to Germany</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Join the Frame Brothers as they represent Team USA in the 2025 World Karate Championship. Follow their journey and learn how you can support their mission!
        </p>
      </section>
    </Layout>
  );
}
