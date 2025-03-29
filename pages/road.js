import Layout from '../components/Layout'

export default function Journey() {
  const timeline = [
    {
      date: "Jan 18, 2025",
      title: "Rocky Mountain Open",
      description: "Ethan and Ryan won multiple medals including gold. Ethan took home Grand Champion!"
    },
    {
      date: "Feb 18, 2025",
      title: "Belt Test",
      description: "Ethan earned his green belt and Ryan moved up to blue belt. Their skills continue to grow!"
    },
    {
      date: "Mar 15, 2025",
      title: "WKU Team USA Tryouts",
      description: "Both boys secured their place on Team USA. This was a huge milestone on the road to Germany!"
    },
    {
      date: "Mar 22, 2025",
      title: "Battle of Champions",
      description: "Both brothers again captured gold medals. Ethan won Grand Champion, with Ryan placing second as the youngest competitor in that division!"
    },
    {
      date: "Apr–May 2025",
      title: "Intense Training + Belt Prep",
      description: "Sharpening skills, adding new material, and preparing for the next belt test."
    },
    {
      date: "June 2025",
      title: "Congo Tournament",
      description: "A new test of skill awaits in June — the Congo Tournament."
    },
    {
      date: "Jul–Aug 2025",
      title: "Summer Grind",
      description: "Training continues — new routines, upgraded techniques, and testing their limits."
    },
    {
      date: "Sept 2025",
      title: "Valor Showdown",
      description: "Another major U.S. tournament before heading overseas to represent the red, white, and blue."
    },
    {
      date: "Oct 2025",
      title: "WKU World Championship — Germany",
      description: "The boys will proudly compete on the world stage as members of Team USA!"
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">The Journey to Germany</h2>
        <ul className="space-y-8 border-l-4 border-blue-700 pl-6">
          {timeline.map((event, index) => (
            <li key={index} className="relative">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-blue-700 rounded-full"></div>
              <p className="text-blue-700 font-semibold">{event.date}</p>
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
