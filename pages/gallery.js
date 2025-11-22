import { useState } from 'react'
import Layout from '../components/Layout'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    '/images/gallery/ethan-battle.jpg',
    '/images/gallery/ethan-bow.jpg',
    '/images/gallery/ethan-kick.jpg',
    '/images/gallery/Ethan_Brielle.jpg',
    '/images/gallery/Ethan_Justice.jpg',
    '/images/gallery/ryan-bow-wku.jpg',
    '/images/gallery/ryan-punch.jpg',
    '/images/gallery/ryan-bow.jpg',
    '/images/gallery/Ryan_Justice.jpg',
    '/images/gallery/Ryan_Ashley.jpg',
    '/images/gallery/Ryan_Brick.jpg',
    '/images/gallery/ethan-ryan-sharkcity.jpg',
    '/images/gallery/Ethan_Ryan_Ashley.jpg',
    '/images/gallery/Ethan_Ryan_bow.jpg',
    '/images/gallery/Ethan_Ryan_Brielle.jpg',
    '/images/gallery/Ethan_Ryan_Justice.jpg',
    '/images/gallery/Ethan_Ryan_Mckay.jpg',
    '/images/gallery/ethan-ryan-orange.jpg',
    '/images/gallery/ethan-ryan-sharkcity.jpg',
    '/images/gallery/ethan-ryan-whitebelt.jpg',
  ]

  const videos = [
    'https://www.youtube.com/embed/zPBb1yXKrgk',
    'https://www.youtube.com/embed/ydJHEGFF4Js',
    'https://www.youtube.com/embed/r3f-yDNQXAQ',
    'https://www.youtube.com/embed/krppFJcNcAI',
    'https://www.youtube.com/embed/XF01jsmCQyA',
    'https://www.youtube.com/embed/5RYqnZwaIZs',
    'https://www.youtube.com/embed/kTfV8qNC8Zg',
    'https://www.youtube.com/embed/dp8jgbvNU3o',
    'https://www.youtube.com/embed/tqLy4ijt77I',
    'https://www.youtube.com/embed/W6gPzyLInRQ',
    'https://www.youtube.com/embed/EgJrt1vAsPg',
    'https://www.youtube.com/embed/jCIsTVQsXvU',
  ]

  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>

        <div className="relative z-10 py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

          {/* Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
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
                  onContextMenu={(e) => e.preventDefault()} // Disable right-click
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Videos */}
          <h3 className="text-2xl font-semibold text-center mb-6">Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {videos.map((url, idx) => (
              <div key={idx} className="aspect-video rounded shadow overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={url}
                  title={`YouTube Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-3xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="w-full h-auto rounded shadow-lg"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
