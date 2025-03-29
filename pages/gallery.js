import Layout from '../components/Layout'

const images = [
  "ethan-ryan-invite.jpg",
  "ethan-battle.jpg",
  "ethan-bow.jpg",
  "ethan-kick.jpg",
  "ryan-bow.jpg",
  "ryan-bow-wku.jpg",
  "ryan-punch.jpg",
  "ethan-ryan-orange.jpg",
  "ethan-ryan-sharkcity.jpg",
  "ethan-ryan-whitebelt.jpg"
];

export default function Gallery() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={`/images/gallery/${src}`}
              alt={`Gallery ${idx + 1}`}
              className="rounded shadow hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        <div className="pt-10 text-center">
          <iframe
            className="w-full h-64 sm:h-96"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Sample video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
