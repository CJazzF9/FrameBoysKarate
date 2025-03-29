import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form name="contact" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Send</button>
        </form>
      </div>
    </Layout>
  );
}
