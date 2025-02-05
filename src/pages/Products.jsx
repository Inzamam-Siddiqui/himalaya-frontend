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
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
    {products.slice(0, 9).map((product) => (
      <div
        key={product.id}
        className="bg-teal-200 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
      >
        <Link to={`/products/${product.id}`} className="block text-center">
          <img
            src={product?.image}
            alt={product.name}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover p-6 md:p-8"
          />
          <h2 className="text-lg md:text-xl bg-white font-bold text-teal-800 h-16 md:h-20 rounded-t-xl py-3 md:py-4">
            {product.name}
          </h2>
          <p className="text-sm md:text-md text-white bg-teal-600 h-10 md:h-12 rounded-t-xl pt-3 md:pt-4">
            Discover more about this product
          </p>
        </Link>
      </div>
    ))}
  </div>
</div>

      <div className="max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto w-full md:w-[25rem] mt-12 relative group">
        {/* Product 10 Card */}
        <div
          key={products[9].id}
          className="relative bg-teal-200 shadow-teal-900 shadow-2xl transition transform group-hover:-translate-y-2"
        >
          <Link
            to={`/products/${products[9].id}`}
            className="block text-center"
          >
            <img
              src={products[9].image}
              alt={products[9].name}
              className="w-full h-64 md:h-80 object-cover p-6 md:p-10"
            />
            <h2 className="text-lg md:text-xl bg-white font-bold text-teal-800 h-16 md:h-20 rounded-t-xl py-3 md:py-4">
              {products[9].name}
            </h2>
            <p className="text-sm md:text-md text-white bg-teal-600 h-10 md:h-12 rounded-t-xl pt-3 md:pt-4">
              Discover more about this product
            </p>
          </Link>
        </div>

        {/* Left Side Image - Hidden on Small Screens */}
        <img
          src={products[9].image} // Adjust as needed
          alt="Left Image"
          className="hidden lg:flex absolute top-1/2 left-[-20rem] w-64 h-64 object-cover opacity-0 transform -translate-y-1/2 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
        />

        {/* Right Side Image - Hidden on Small Screens */}
        <img
          src={products[9].image} // Adjust as needed
          alt="Right Image"
          className="hidden lg:flex absolute top-1/2 right-[-20rem] w-64 h-64 object-cover opacity-0 transform -translate-y-1/2 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Products;
