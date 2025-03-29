import Layout from '../components/Layout'

export default function Sponsors() {
  const sponsors = {
    Gold: ['Company A', 'Company B'],
    Silver: ['Company C'],
    Bronze: ['Company D', 'Company E']
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        {Object.entries(sponsors).map(([tier, names], idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-2">{tier} Sponsors</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {names.map((name, i) => (
                <li key={i} className="bg-gray-100 p-4 rounded shadow">{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
