import { Link } from "react-router-dom";
import { products } from "../assets/assets.js";
import j from "../assets/products/I_02.jpg";
import { ProductBanner } from "../components/ProductBanner.jsx";
import GasketProcessTimeline from "../components/Timeline.jsx"

import a from "../assets/productsBanner/A.png";
import b from "../assets/productsBanner/B.png";
import c from "../assets/productsBanner/C.png";
import d from "../assets/productsBanner/D.png";
import e from "../assets/productsBanner/E.png";
import f from "../assets/productsBanner/F.png";
import g from "../assets/productsBanner/G.png";
import h from "../assets/productsBanner/H.png";
import i1 from "../assets/productsBanner/I_01.png";
// import i2 from "../assets/productsBanner/I_02.png";

const productBannerImages = [a, b, c, d, e, f, g, h, i1];

const Products = () => {
  return (
    <>
    <div className="pt-24 bg-teal-50">
    <div className="mb-12">
          <ProductBanner
            items={productBannerImages}
            direction="right"
            speed="normal"
            pauseOnHover={true}
            className="bg-teal-100"
          />
        </div>
      <div className="text-center">
        <h2 className="text-5xl text-teal-900 font-extrabold mb-8">
          Our Products
        </h2>
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
              <Link
                to={`/products/${product.id}`}
                className="block text-center"
              >
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
              src={j}
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

        {/* Left Text Block */}
        <div className="hidden lg:flex absolute top-1/2 left-[-20rem] w-64 text-left opacity-0 transform -translate-y-1/2 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-300 flex-col">
          <h3 className="text-xl font-bold mb-2">
            🛠️ Custom Fit for Your Profile
          </h3>
          <p className="text-sm">
            Design your gasket around your profile — shape, size, and locking
            dimensions — all built to spec. We trial, test, and deliver the
            perfect-fit seal for your system.
          </p>
        </div>

        {/* Right Text Block */}
        <div className="hidden lg:flex absolute top-1/2 right-[-20rem] w-64 text-left opacity-0 transform -translate-y-1/2 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-300 flex-col">
          <h3 className="text-xl font-bold mb-2">
            🎨 Color-Matched to Perfection
          </h3>
          <p className="text-sm">
            Choose from standard colors or match your gasket to your
            window/profile finish. We offer custom color extrusion to blend
            seamlessly into your design.
          </p>
        </div>
      </div>
  <GasketProcessTimeline/>
    </div>

    </>
  );
};

export default Products;
