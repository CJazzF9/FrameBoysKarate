import Layout from '../components/Layout'

export default function Support() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-red-600">Support the Journey</h2>
        <p>
          Every contribution helps us get closer to representing the USA at the World Karate Championship in Germany.
        </p>
        <p>
          We appreciate your support in any form — from words of encouragement to sponsorships.
        </p>
        <p>
          Please <a href="/contact" className="text-blue-700 underline font-semibold">contact us</a> if you'd like to support!
        </p>
      </div>
    </Layout>
  );
}
