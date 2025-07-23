import { motion } from "framer-motion";

const industries = [
  {
    id: "01",
    title: "Automobile",
    description:
      "Reliable TPE solutions built for automotive strength, flexibility, and long-lasting performance.",
  },
  {
    id: "02",
    title: "Industrial Applications",
    description:
      "Our high-performance gaskets provide excellent sealing solutions for heavy-duty industrial applications.",
  },
  {
    id: "03",
    title: "Construction & Architecture",
    description:
      "Durable and weather-resistant gaskets designed for modern construction and architectural projects.",
  },
  {
    id: "04",
    title: "Custom Projects",
    description:
      "Tailored sealing solutions for unique and specialized applications across different industries.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="h-auto bg-gray-100 py-16 px-4">
      {/* Animated Titles */}
      <motion.h2
        className="text-4xl font-bold text-center text-teal-800 mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Industries We Serve
      </motion.h2>

      <motion.h2
        className="text-lg max-w-3xl mx-auto font-semibold text-center text-teal-500 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Himalaya Plast’s versatile gaskets are designed for various industries,
        offering high-performance sealing solutions
      </motion.h2>

      {/* Industry Cards */}
      <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-xl">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.id}
            className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <img src="" alt="" className="mb-2" />
            <h2 className="text-8xl text-gray-200">{industry.id}</h2>
            <h4 className="text-2xl font-semibold text-white">
              {industry.title}
            </h4>
            <p className="text-white mt-2">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
