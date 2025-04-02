import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-5xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet the Frame Brothers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Ryan */}
            <div className="text-center">
              <div className="w-full max-w-[400px] h-[600px] mx-auto overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/ryan.jpg"
                  alt="Ryan Frame"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-blue-800">Ryan Frame</h3>
              <p className="text-sm mt-2">
                Ryan is a dedicated young martial artist with a blue belt. He's known for his precision,
                determination, and passion for karate. At only 8 years old, he’s one of the youngest athletes on Team USA.
              </p>
            </div>

            {/* Ethan */}
            <div className="text-center">
              <div className="w-full max-w-[400px] h-[600px] mx-auto overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/ethan.jpg"
                  alt="Ethan Frame"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-blue-800">Ethan Frame</h3>
              <p className="text-sm mt-2">
                Ethan, age 10, is a green belt who recently won Grand Champion at multiple tournaments.
                He thrives in traditional kata and weapons divisions, and is excited to represent Team USA in Germany.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}
