// pages/road.js

import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function JourneyPage() {
  const events = [
    {
      date: 'Jan 18th',
      title: 'Rocky Mountain Open',
      description: 'Both Ethan and Ryan won multiple medals and Ethan won Grand Champion in his division.',
      image: '/images/gallery/Rocky_Mountain.jpg',
      link: 'https://utahsportkarateleague.com/schedule'
    },
    {
      date: 'Feb 18th',
      title: 'Belt Test',
      description: 'Ryan promoted to Blue and Ethan to Green.',
      image: '/images/gallery/Tobins2.jpg',
      link: 'https://tobinselite.com/'
    },
    {
      date: 'Mar 15th',
      title: 'WKU Tryouts',
      description: 'Both Ethan and Ryan made Team USA.',
      image: '/images/gallery/WKU_USA.jpg',
      link: 'https://www.wkuworldusa.com/'
    },
    {
      date: 'Mar 22nd',
      title: 'Battle of the Champions',
      description: 'Both Ethan and Ryan won multiple medals. Ethan won Grand Champion and Ryan got second place as the youngest in the division.',
      image: '/images/gallery/Battle_of_Champ.jpg',
      link: 'https://utahsportkarateleague.com/schedule'
    },
    {
      date: 'Apr-May',
      title: 'Training and Preparation',
      description: 'Training and preparing new material and belt tests.',
      image: '/images/gallery/Tobins2.jpg',
      link: 'https://tobinselite.com/'
    },
    {
      date: 'June',
      title: 'Kongo Tournament',
      description: '',
      image: '/images/gallery/Kongo.jpg',
      link: 'https://utahsportkarateleague.com/schedule'
    },
    {
      date: 'July-Aug',
      title: 'Training and Preparation',
      description: '',
      image: '/images/gallery/Tobins2.jpg',
      link: 'https://tobinselite.com/'
    },
    {
      date: 'Sept',
      title: 'Valor Showdown Tournament',
      description: '',
      image: '/images/gallery/Valor.jpg',
      link: 'https://utahsportkarateleague.com/schedule'
    },
    {
      date: 'Oct',
      title: 'WKU World Championship',
      description: '',
      image: '/images/gallery/WKU_Germany.jpg',
      link: 'https://www.wkuworldusa.com/'
    },
  ];

  return (
    <Layout title="Journey to Germany">
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-8 text-red-600">The Journey to Germany</h1>
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="border-t border-gray-300 pt-6 text-left">
              <h2 className="text-xl font-semibold text-blue-700">{event.date} – {event.title}</h2>
              <p className="text-gray-800 mb-2">{event.description}</p>
              <Link href={event.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={400}
                  className="rounded shadow-md hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
