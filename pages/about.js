import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-4xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet the Frame Brothers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="/images/ryan.jpg" width={400} height={600} alt="Ryan Frame" className="rounded-xl shadow-md mx-auto"/>
              <h3 className="mt-4 text-xl font-semibold text-blue-800">Ryan Frame</h3>
              <p className="text-sm mt-2">Ryan is a dedicated young martial artist with a blue belt. He's known for his precision, determination, and passion for karate. At only 10 years old, he’s one of the youngest athletes on Team USA.</p>
            </div>
            <div>
              <Image src="/images/ethan.jpg" width={400} height={600} alt="Ethan Frame" className="rounded-xl shadow-md mx-auto"/>
              <h3 className="mt-4 text-xl font-semibold text-blue-800">Ethan Frame</h3>
              <p className="text-sm mt-2">Ethan, age 8, is a green belt who recently won Grand Champion at multiple tournaments. He thrives in traditional kata and weapons divisions, and is excited to represent Team USA in Germany.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
