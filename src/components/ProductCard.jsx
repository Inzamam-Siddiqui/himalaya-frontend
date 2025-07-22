import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import { products } from "../assets/assets.js";

const ProductCard = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold">Card not found</h2>
        <Link to="/products" className="text-blue-500 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const carouselImages = [...(product.bannerImage || []), product.image];

  const renderListSection = (title, items = []) => {
    if (!items.length) return null;
    return (
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-semibold text-teal-900 mb-4">{title}</h2>
        <ul className="list-disc pl-4 sm:pl-8 text-teal-700">
          {items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-teal-50 px-4">
      <div className="max-w-5xl mx-auto pt-20 md:pt-32 bg-teal-50 rounded-lg p-6">
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-6 text-teal-800 pb-4">
          {product.name || "Product Name"}
        </h2>

        {carouselImages.length > 0 ? (
          <div className="flex items-center justify-center mb-16">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={true}
              interval={2000}
              transitionTime={500}
              className="w-full max-w-3xl"
            >
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="object-cover h-[30rem] w-full rounded-md shadow-md"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <p className="text-center text-teal-700">No images available</p>
        )}

        {/* Description */}
        {product.description && (
          <p className="mt-4 text-base md:text-lg text-center text-teal-700 leading-7">
            {product.description}
          </p>
        )}

        {/* Dynamic Sections */}
        {renderListSection("Features", product.features)}
        {renderListSection("Advantages", product.advantages)}
        {renderListSection("Applications", product.applications)}

        {/* Back Link */}
        <div className="flex justify-center items-center">
          <Link
            to="/products"
            className="inline-block mt-10 w-full sm:w-auto px-6 py-3 text-lg bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white rounded-full hover:bg-teal-600 text-center"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
