import { Link } from "react-router-dom";
import { products } from "../assets/assets.js";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const KeyProducts = () => {
  return (
    <section className="py-20 bg-gray-100">
      {/* Title Section */}
      <motion.div
        className="px-4 sm:px-6 text-center mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-2">
          Our Key Products
        </h2>
        <h2 className="text-xl font-semibold text-teal-500">
          Our flagship solutions tailored for your success.
        </h2>
      </motion.div>

      {/* Product Grid */}
      <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 rounded-xl">
        {products.slice(0, 4).map((product, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-300 ${
              product.id % 2 === 1 ? "bg-teal-100" : "bg-teal-400"
            }`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={product?.image}
                alt={product.name}
                className="object-cover w-full h-auto max-h-80 rounded-lg bg-gray-100"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {product.name}
            </h2>
            <p>{product.description.split(" ").slice(0, 15).join(" ")}...</p>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        className="flex justify-center px-4 sm:px-0 pb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
        >
          <Link to="/products">View More</Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default KeyProducts;
