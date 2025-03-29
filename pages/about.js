import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-10">
        <h2 className="text-3xl font-bold text-center">Meet the Frame Brothers</h2>
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <img src="/images/brother1.jpg" alt="Brother 1" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Brother 1</h3>
            <p>Placeholder bio for Brother 1. Will be updated with real info.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <div className="order-2 sm:order-1">
            <h3 className="text-xl font-bold">Brother 2</h3>
            <p>Placeholder bio for Brother 2. Will be updated with real info.</p>
          </div>
          <div className="order-1 sm:order-2">
            <img src="/images/brother2.jpg" alt="Brother 2" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
