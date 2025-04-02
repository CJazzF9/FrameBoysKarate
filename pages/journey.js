// pages/journey.js

import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Journey() {
  const events = [
    {
      date: 'Jan 18th',
      title: 'Rocky Mountain Open',
      description: 'Both Ethan and Ryan won multiple medals and Ethan won Grand Champion in his division.',
      image: '/images/gallery/Rocky_Mountain.png',
      url: 'https://utahsportkarateleague.com/schedule',
    },
    {
      date: 'Feb 18th',
      title: 'Belt Test',
      description: 'Ryan promoted to Blue and Ethan to Green.',
      image: '/images/gallery/Tobins.png',
      url: 'https://tobinselite.com/',
    },
    {
      date: 'Mar 15th',
      title: 'WKU Tryouts',
      description: 'Both Ethan and Ryan made Team USA.',
      image: '/images/gallery/WKU_USA.png',
      url: 'https://www.wkuworldusa.com/',
    },
    {
      date: 'Mar 22nd',
      title: 'Battle of the Champions',
      description: 'Both Ethan and Ryan won multiple medals. Ethan won Grand Champion and Ryan got second place as the youngest in the division.',
      image: '/images/gallery/Battle_of_Champ.png',
      url: 'https://utahsportkarateleague.com/schedule',
    },
    {
      date: 'Apr - May',
      title: 'Training and Belt Testing',
      description: 'Training and preparing new material and belt tests.',
      image: '/images/gallery/Tobins.png',
      url: 'https://tobinselite.com/',
    },
    {
      date: 'June',
      title: 'Kongo Tournament',
      description: '',
      image: '/images/gallery/Kongo.png',
      url: 'https://utahsportkarateleague.com/schedule',
    },
    {
      date: 'July - Aug',
      title: 'Training and Preparation',
      description: '',
      image: '/images/gallery/Tobins.png',
      url: 'https://tobinselite.com/',
    },
    {
      date: 'Sept',
      title: 'Valor Showdown Tournament',
      description: '',
      image: '/images/gallery/Valor.png',
      url: 'https://utahsportkarateleague.com/schedule',
    },
    {
      date: 'Oct',
      title: 'WKU World Championship',
      description: '',
      image: '/images/gallery/WKU_Germany.png',
      url: 'https://www.wkuworldusa.com/',
    },
  ];

  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen">
        <div className="flag-bg absolute inset-0 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-center mb-10">The Journey to Germany</h1>
          <div className="space-y-12 max-w-4xl mx-auto">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h2 className="text-xl font-semibold mb-1">{event.date}: {event.title}</h2>
                <p className="mb-4 text-sm md:text-base">{event.description}</p>
                <Link href={event.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={150}
                    className="rounded shadow-md hover:scale-105 transition-transform mx-auto"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 
