import { useState } from 'react'
import Layout from '../components/Layout'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    '/images/gallery/ethan1.jpg',
    '/images/gallery/ethan2.jpg',
    '/images/gallery/ryan1.jpg',
    '/images/gallery/ryan2.jpg',
    '/images/gallery/both1.jpg',
    '/images/gallery/both2.jpg',
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded shadow cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <div className="max-w-3xl max-h-[90vh]">
              <img src={selectedImage} alt="Enlarged" className="w-full h-auto rounded shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
