import { Link } from "react-router-dom";

const KeyProducts = () => {
  const cardData = [
    {
      title: "Product 1",
      description: "Description for Product 1.",
      bgColor: "bg-teal-400",
    },
    {
      title: "Product 2",
      description: "Description for Product 2.",
      bgColor: "bg-green-100",
    },
    {
      title: "Product 3",
      description: "Description for Product 3.",
      bgColor: "bg-teal-400",
    },
    {
      title: "Product 4",
      description: "Description for Product 4.",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-2xl font-bold text-center text-teal-800 mb-2">
        Our Key Products
      </h1>
      <h2 className="text-xl font-semibold text-center text-teal-500">
        Our flagship solutions tailored for your success.
      </h2>

      <div className="my-10 h-[25rem] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded-lg shadow-lg`}
          >
            <div className="flex justify-center mb-4">
              <img
                src=""
                alt={card.title}
                className="h-28 object-cover rounded-lg"
              />
            </div>
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h1>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-5 bg-gray-100">
     <button className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
          <Link to="/products">More...</Link>
        </button>
     </div>
    </section>
  );
};

export default KeyProducts;
