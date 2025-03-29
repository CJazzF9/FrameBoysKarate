import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="flag-bg"></div>
        <div className="relative max-w-4xl mx-auto p-6 space-y-10 z-10">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Frame Brothers</h2>
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <img src="/images/ethan.jpg" alt="Ethan performing at Team USA tryouts" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Ethan</h3>
              <p>
                Ethan is a dedicated martial artist whose precision and passion shine through in every kata. 
                He’s earned his spot on Team USA through relentless effort, training, and a deep love for the art of karate.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div className="order-2 sm:order-1">
              <img src="/images/ryan.jpg" alt="Ryan performing at Team USA tryouts" className="rounded-lg shadow-lg" />
            </div>
            <div className="order-1 sm:order-2">
              <h3 className="text-xl font-bold">Ryan</h3>
              <p>
                Ryan brings intensity, focus, and creativity to every performance. With years of experience and 
                a constant drive to improve, he’s proven himself as one of the top competitors in his age group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
