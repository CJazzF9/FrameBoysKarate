import Layout from '../components/Layout'

export default function ThankYou() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Thank you!</h2>
        <p className="text-lg">Your message has been submitted successfully. We'll get back to you shortly.</p>
      </div>
    </Layout>
  )
}
