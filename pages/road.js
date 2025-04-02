import React from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "Jan 18th",
    title: "Rocky Mountain Open",
    description:
      "Both Ethan and Ryan won multiple medals and Ethan won Grand Champion in his division.",
    image: "public/images/gallery/Rocky_Mountain.jpg",
    link: "https://utahsportkarateleague.com/schedule",
  },
  {
    date: "Feb 18th",
    title: "Belt Test",
    description: "Ryan promoted to Blue and Ethan to Green.",
    image: "public/images/gallery/Tobins2.jpg",
    link: "https://tobinselite.com/",
  },
  {
    date: "Mar 15th",
    title: "WKU Tryouts",
    description: "Both Ethan and Ryan made Team USA!",
    image: "public/images/gallery/WKU_USA.jpg",
    link: "https://www.wkuworldusa.com/",
  },
  {
    date: "Mar 22nd",
    title: "Battle of the Champions",
    description:
      "Both Ethan and Ryan won multiple medals. Ethan won Grand Champion and Ryan got second place as the youngest in the division.",
    image: "public/images/gallery/Battle_of_Champ.jpg",
    link: "https://utahsportkarateleague.com/schedule",
  },
  {
    date: "Apr - May",
    title: "Training + Belt Tests",
    description: "Training and preparing new material and belt tests.",
    image: "public/images/gallery/Tobins2.jpg",
    link: "https://tobinselite.com/",
  },
  {
    date: "June 14th",
    title: "Kongo Tournament",
    description: "Competitive action in Farmington, UT.",
    image: "public/images/gallery/Kongo.jpg",
    link: "https://utahsportkarateleague.com/schedule",
  },
  {
    date: "July - Aug",
    title: "Summer Training",
    description: "Continued training and preparation for upcoming events.",
    image: "public/images/gallery/Tobins2.jpg",
    link: "https://tobinselite.com/",
  },
  {
    date: "Sept 12-13",
    title: "Valor Showdown Tournament",
    description: "Ryan and Ethan compete again in Utah!",
    image: "public/images/gallery/Valor.jpg",
    link: "https://utahsportkarateleague.com/schedule",
  },
  {
    date: "Oct",
    title: "WKU World Championship",
    description: "Ethan and Ryan head to Germany to represent Team USA!",
    image: "/public/images/gallery/WKU_Germany.jpg",
    link: "https://www.wkuworldusa.com/",
  },
];

export default function Road() {
  return (
    <div className="bg-white bg-cover min-h-screen py-10 px-4 sm:px-10">
      <h1 className="text-4xl text-center font-bold text-red-600 mb-10">
        Journey to Germany
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-90 border border-gray-200 shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center"
          >
            <Link href={event.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={event.image}
                alt={event.title}
                width={200}
                height={200}
                className="rounded-md object-contain"
              />
            </Link>
            <h3 className="text-xl font-bold text-gray-800 mt-4">{event.date}</h3>
            <h4 className="text-lg font-semibold text-blue-600 mt-1">
              {event.title}
            </h4>
            <p className="text-sm text-gray-700 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
