import Layout from '../components/Layout'

export default function Journey() {
  const milestones = [
    { date: 'Jan 2024', event: 'Won Regional Qualifiers' },
    { date: 'Apr 2024', event: 'Secured Spot on Team USA' },
    { date: 'Jul 2024', event: 'Intensive Training Begins' },
    { date: 'Oct 2025', event: 'World Championship in Germany' }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">The Road to Germany</h2>
        <ul className="space-y-6 border-l-4 border-blue-700 pl-6">
          {milestones.map((item, idx) => (
            <li key={idx}>
              <p className="text-blue-700 font-semibold">{item.date}</p>
              <p className="ml-2">{item.event}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
