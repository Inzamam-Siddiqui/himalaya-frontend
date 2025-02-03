import { Link } from "react-router-dom";
import {products} from "../assets/assets.js"

const KeyProducts = () => {

  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-teal-800 mb-2">
        Our Key Products
      </h1>
      <h2 className="text-xl font-semibold text-center text-teal-500">
        Our flagship solutions tailored for your success.
      </h2>

      <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-xl">
        {products.slice(0,4).map((product, index) => (
          <div
            key={index}
            className={` p-6 rounded-lg shadow-lg ${product.id % 2 === 1 ? "bg-teal-100" : "bg-teal-400"}`}
          >
            <div className="flex justify-center mb-4">
              <img
                src=""
                alt={product.name}
                className="h-44 object-cover rounded-lg bg-white"
              />
            </div>
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p>{product.description.split(' ').slice(0, 15).join(' ')}...</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-5 bg-gray-100">
     <button className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
          <Link to="/products">View More</Link>
        </button>
     </div>
    </section>
  );
};

export default KeyProducts;
