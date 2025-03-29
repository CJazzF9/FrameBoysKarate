import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" name="name" required className="w-full border rounded px-3 py-2"/>
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" required className="w-full border rounded px-3 py-2"/>
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" rows="5" required className="w-full border rounded px-3 py-2"></textarea>
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded shadow">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
