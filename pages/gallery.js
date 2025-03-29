import Layout from '../components/Layout'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public/images/gallery')
  const files = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))

  return {
    props: {
      images: files
    }
  }
}

export default function Gallery({ images }) {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded shadow">
              <Image
                src={`/images/gallery/${img}`}
                alt={`Tournament ${idx + 1}`}
                width={500}
                height={350}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
