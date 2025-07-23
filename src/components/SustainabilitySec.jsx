import { motion } from "framer-motion";
import recycle1 from "../assets/products/recycle2.jpg";

const SustainabilitySec = () => {
  return (
    <section className="h-auto bg-teal-100 pt-40 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Sustainability and Environmental Commitment
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-4xl mx-auto text-teal-700">
            At Himalaya Plast, we embrace sustainability through innovative and responsible
            manufacturing practices. Our mission is to deliver high-quality, eco-friendly products
            that meet our clients{"'"} evolving needs while safeguarding the environment.
          </p>
        </motion.div>

        {/* Flex Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left - Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src={recycle1}
              alt="Sustainability"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </motion.div>

          {/* Right - Content Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">
              Recyclability in Closed-Loop Systems
            </h2>
            <p className="text-teal-700 text-base sm:text-lg">
              We use thermoplastic elastomers (TPE) in manufacturing gaskets,
              offering ideal properties for performance and sustainability.
            </p>

            <div className="mt-6">
              <h3 className="text-lg sm:text-xl font-medium text-teal-800 mb-3">
                Key Properties of TPE:
              </h3>
              <ul className="list-disc list-inside text-teal-700 space-y-2">
                <li>
                  <strong>Versatile & Flexible:</strong> Adaptable to a variety of applications.
                </li>
                <li>
                  <strong>Recyclable:</strong> Can be reprocessed multiple times.
                </li>
                <li>
                  <strong>Safe & High-Performance:</strong> Durable and safe for various uses.
                </li>
                <li>
                  <strong>Flame Retardant & Chemical Resistant:</strong> Enhanced protection.
                </li>
                <li>
                  <strong>Aesthetic Flexibility:</strong> Transparent and colored forms.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySec;
