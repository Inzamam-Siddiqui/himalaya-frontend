import { Link } from "react-router-dom";
import {products} from "../assets/assets.js"

const Products = () => {

  return (
    <div className="p-24 bg-teal-50">
      <h1 className="text-4xl text-gray-800 font-bold mb-4 pt-12 pl-12">Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto py-2">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg pb-4">
          <Link
            to={`/products/${product.id}`}
            className="block p-4 border bg-teal-500 rounded-xl shadow hover:shadow-lg hover:border-teal-500 transition text-center"
          >
            <img
              src={product?.image}
              alt={product.name}
              className="w-full bg-white h-60 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-sm text-gray-500">Click to view details</p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
