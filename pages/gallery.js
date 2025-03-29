import Layout from '../components/Layout'

export default function Gallery() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/images/gallery1.jpg" alt="Gallery 1" className="rounded shadow" />
          <img src="/images/gallery2.jpg" alt="Gallery 2" className="rounded shadow" />
          <img src="/images/gallery3.jpg" alt="Gallery 3" className="rounded shadow" />
        </div>
        <div className="pt-10 text-center">
          <iframe className="w-full h-64 sm:h-96" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sample video" allowFullScreen></iframe>
        </div>
      </div>
    </Layout>
  );
}
