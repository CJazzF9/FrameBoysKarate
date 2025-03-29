import Layout from '../components/Layout'

export default function Road() {
  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-10">The Journey</h2>
          <ul className="space-y-6 text-sm">
            <li><strong>✅ Jan 18:</strong> Rocky Mountain Open – Both medaled, Ethan won Grand Champion</li>
            <li><strong>✅ Feb 18:</strong> Belt Test – Ryan promoted to Blue, Ethan to Green</li>
            <li><strong>✅ Mar 15:</strong> WKU Tryouts – Both made Team USA</li>
            <li><strong>✅ Mar 22:</strong> Battle of Champions – Both medaled, Ethan GC, Ryan 2nd youngest in division</li>
            <li><strong>⏳ Apr–May:</strong> Training and preparing new material & belt tests</li>
            <li><strong>📍 June:</strong> Congo Tournament</li>
            <li><strong>💪 July–Aug:</strong> Training & preparation</li>
            <li><strong>🌍 Sept:</strong> Valor Showdown Tournament</li>
            <li><strong>🇩🇪 Oct:</strong> WKU World Tournament – Germany</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
