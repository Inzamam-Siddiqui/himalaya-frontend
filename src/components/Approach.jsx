import { motion } from "framer-motion";
import {
  FaLeaf,
  FaRecycle,
  FaCloudSun,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const sustainabilityItems = [
  {
    icon: <FaLeaf className="text-teal-800 text-3xl" />,
    title: "Energy, Water, and Material Conservation",
    description:
      "We are committed to reducing the consumption of energy, water, and raw materials, ensuring that our production processes are as efficient as possible.",
  },
  {
    icon: <FaRecycle className="text-teal-800 text-3xl" />,
    title: "Recycling Investment",
    description:
      "We actively encourage and invest in recycling initiatives to ensure that waste is minimized, and materials are repurposed to reduce the need for new resources.",
  },
  {
    icon: <FaCloudSun className="text-teal-800 text-3xl" />,
    title: "Carbon Footprint Reduction",
    description:
      "We aim to decrease CO2 emissions through the adoption of energy-efficient technologies, improved manufacturing processes, and more sustainable delivery methods.",
  },
  {
    icon: <FaHandshake className="text-teal-800 text-3xl" />,
    title: "Supplier Engagement",
    description:
      "We collaborate with our suppliers to encourage environmentally responsible practices throughout the supply chain, ensuring that sustainability is a shared responsibility.",
  },
  {
    icon: <FaUsers className="text-teal-800 text-3xl" />,
    title: "Staff Engagement",
    description:
      "We foster a culture of sustainability within our workforce, empowering our employees to contribute to our environmental goals through awareness programs and eco-friendly practices.",
  },
  {
    icon: <AiFillSafetyCertificate className="text-teal-800 text-3xl" />,
    title: "Certified by Global Standards",
    description:
      "Guided by globally recognized frameworks like ISO and RoHS, our sustainability practices are structured, independently audited, and aligned with modern industry expectations.",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="bg-teal-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-6">
            Our Approach to Sustainability
          </h2>
          <p className="text-base sm:text-lg text-teal-700 leading-relaxed max-w-5xl mx-auto">
            For years, we have focused on reducing waste, lowering our carbon
            footprint, and enhancing the efficiency of our operations...
          </p>
        </motion.div>

        {/* Sustainability Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sustainabilityItems.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="bg-teal-200 p-3 sm:p-4 rounded-full shrink-0">
                {icon}
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-teal-800">
                  {title}
                </h4>
                <p className="text-teal-700 leading-relaxed text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
