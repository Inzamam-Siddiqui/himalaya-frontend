import { useState } from "react";

const Mission = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Mission",
      content:
        "To create innovative, sustainable gasket solutions that empower our clients to succeed while preserving the planet for future generations.",
    },
    {
      title: "Vision",
      content:
        "To lead the global gasket industry by setting new standards in sustainability, innovation, and customer satisfaction.",
    },
    {
      title: "Values",
      content: `
        Sustainability: Driving eco-conscious practices across all operations. 
        Quality: Meeting the highest industry standards in every product. 
        Innovation: Leveraging advanced technology for smarter, more efficient solutions. 
        Integrity: Building trust through transparency and ethical practices.
      `,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Mission, Vision, and Values
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:cursor-pointer scroll-smooth hover:shadow-xl transition-transform transform hover:scale-105"
              onMouseEnter={() => setSelectedCard(index)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-16 w-16 object-contain bg-gray-100 p-2 rounded-full"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
        {selectedCard !== null && (
          <div
            className="mt-8 mx-auto max-w-4xl bg-teal-700 text-white p-6 rounded-lg shadow-lg 
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
