import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { products } from "../assets/assets.js";

const ProductCard = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);  
  const carouselImages = [...(product?.bannerImage || []), product?.image];

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

  const renderListSection = (title, items = []) => {
    if (!items.length) return null;
    return (
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-teal-900 mb-4">
          {title}
        </h2>
        <ul className="list-disc pl-4 sm:pl-8 text-teal-700">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <div className="bg-teal-50 px-4">
      <div className="max-w-5xl mx-auto pt-20 md:pt-32 bg-teal-50 rounded-lg p-6">
        {/* Product Title */}
        <motion.h2
          className="text-3xl md:text-5xl text-center font-bold mb-6 text-teal-800 pb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {product.name}
        </motion.h2>

        {/* Carousel */}
        {carouselImages.length > 0 ? (
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={true}
              interval={3000}
              transitionTime={600}
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
          </motion.div>
        ) : (
          <p className="text-center text-teal-700">No images available</p>
        )}

        {/* Description */}
        {product.description && (
          <motion.p
            className="mt-4 text-base md:text-lg text-center text-teal-700 leading-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {product.description}
          </motion.p>
        )}

        {/* Sections */}
        {renderListSection("Features", product.features)}
        {renderListSection("Advantages", product.advantages)}
        {renderListSection("Applications", product.applications)}

        {/* Back Button */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/products"
            className="inline-block mt-10 w-full sm:w-auto px-6 py-3 text-lg bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white rounded-full hover:bg-teal-600 text-center"
          >
            Back to Products
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCard;
