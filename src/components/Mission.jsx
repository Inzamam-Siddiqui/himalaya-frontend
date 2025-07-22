import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";


const Mission = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Mission",
      content:
        "To create innovative, sustainable gasket solutions that empower our clients to succeed while preserving the planet for future generations.",
      image: <MdRocketLaunch />,
    },
    {
      title: "Vision",
      content:
        "To lead the global gasket industry by setting new standards in sustainability, innovation, and customer satisfaction.",
      image: <FaRegLightbulb />,
    },
    {
      title: "Values",
      content: `
        Sustainability: Driving eco-conscious practices across all operations. 
        Quality: Meeting the highest industry standards in every product. 
        Innovation: Leveraging advanced technology for smarter, more efficient solutions. 
        Integrity: Building trust through transparency and ethical practices.
      `,
      image: <FaHandHoldingHeart />,
    },
  ];

  return (
    <section className="pb-24 bg-teal-100">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:cursor-pointer scroll-smooth hover:shadow-xl transition-transform transform hover:scale-105"
              onMouseEnter={() => setSelectedCard(index)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              <div className="flex justify-center mb-4 text-4xl text-teal-700">
                {card.image}
              </div>

              <h2 className="text-xl font-semibold text-teal-800 text-center">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
        {selectedCard !== null && (
          <div
            className="mt-8 mx-auto max-w-4xl bg-teal-600 text-white p-6 rounded-lg shadow-lg 
    transition-all duration-300 ease-in-out transform scale-105 opacity-100 h-auto"
          >
            <p className="text-lg font-medium leading-relaxed whitespace-pre-line text-center">
              {cards[selectedCard].content}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mission;
