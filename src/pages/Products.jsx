import { Link } from "react-router-dom";
import { products } from "../assets/assets.js";



const Products = () => {
  return (
    <div className="px-16 pt-40 pb-16 bg-teal-50 ">
      <div className="text-center">
        <h1 className="text-5xl text-teal-900 font-extrabold mb-8">
          Our Products
        </h1>
        <p className="text-lg text-teal-700 max-w-3xl mx-auto">
          Explore our wide range of eco-friendly and innovative products,
          designed to meet your needs while contributing to a sustainable
          future.
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-12 ">
        {products.slice(0, 9).map((product) => (
          <div
            key={product.id}
            className="bg-teal-200 shadow-teal-900 shadow-2xl hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <Link to={`/products/${product.id}`} className="block text-center">
              <img
                src={product?.image}
                alt={product.name}
                className="w-full h-80 object-cover p-10"
              />
              <h2 className="text-xl bg-white font-bold text-teal-800 h-20 rounded-t-xl py-4">
                {product.name}
              </h2>
              <p className="text-md text-white bg-teal-600 h-12 rounded-t-xl  pt-4">
                Discover more about this product
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto w-[25rem] mt-12 relative group">
        {/* Product 10 Card */}
        <div
          key={products[9].id}
          className="relative bg-teal-200 shadow-teal-900 shadow-2xl transition transform group-hover:-translate-y-2"
        >
          <Link to={`/products/${products[9].id}`} className="block text-center">
            <img
              src={products[9].image}
              alt={products[9].name}
              className="w-full h-80 object-cover p-10"
            />
            <h2 className="text-xl bg-white font-bold text-teal-800 h-20 rounded-t-xl py-4">
              {products[9].name}
            </h2>
            <p className="text-md text-white bg-teal-600 h-12 rounded-t-xl pt-4">
              Discover more about this product
            </p>
          </Link>
        </div>

        {/* Left Side Image */}
        <img
          src={products.image} // Change this to any relevant image
          alt="Left Image"
          className="absolute top-1/2 left-[-23rem] w-80 h-80 object-cover opacity-0 transform -translate-y-1/2 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
        />

        {/* Right Side Image */}
        <img
          src={products.image} // Change this to any relevant image
          alt="Right Image"
          className="absolute top-1/2 right-[-23rem] w-80 h-80 object-cover opacity-0 transform -translate-y-1/2 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Products;
