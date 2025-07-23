import { motion } from "framer-motion";
import zero2 from "../assets/bgimages/zero2.jpg";
import eco from "../assets/bgimages/eco.jpg";

const EnvironmentSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
        {[
          {
            title: "Zero Waste and Minimal Carbon Footprint",
            text: `At Himalaya Plast, we prioritize sustainability at every step of the production process ensuring that no product is wasted and that our carbon footprint is minimized. By reusing waste material, we contribute to a circular economy.`,
            imgSrc: zero2,
            reverse: false,
          },
          {
            title: "Environmental Certifications and Accreditations",
            text: `We believe in continuously improving our practices to align with global sustainability standards.`,
            imgSrc: eco,
            reverse: true,
            list: [
              "ISO 9001:2015: Quality management that minimizes waste and ensures consistency.",
              "ISO 14001: Environmental systems to reduce emissions and resource consumption.",
              "ISO 45001: Safe, compliant, and people-first workplaces.",
              "ISO 50001: Certified energy efficiency across operations.",
              "RoHS Compliant: Free from hazardous substances.",
              "UV Resistant: Engineered for long-term outdoor durability.",
            ],
          },
        ].map(({ title, text, imgSrc, list, reverse }, i) => {
          const contentAnimation = {
            initial: { opacity: 0, x: reverse ? 80 : -80 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
          };

          const imageAnimation = {
            initial: { opacity: 0, x: reverse ? -80 : 80 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
          };

          return (
            <div
              key={i}
              className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8`}
            >
              {/* Text Block with Animation */}
              <motion.div className="md:w-1/2" {...contentAnimation}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {text}
                </p>
                {list && (
                  <ul className="list-disc list-inside text-gray-700 mt-4 space-y-3">
                    {list.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.split(":")[0]}:</strong>{" "}
                        {item.split(":").slice(1).join(":").trim()}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {/* Image Block with Animation */}
              <motion.div className="md:w-1/2" {...imageAnimation}>
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EnvironmentSection;
