import {
    FaLeaf,
    FaRecycle,
    FaStar,
    FaHandshake,
    FaDraftingCompass,
    FaRocket,
    FaGlobe,
    FaShieldAlt,
  } from "react-icons/fa";
  import { motion } from "framer-motion";
  
  const listItems = [
    {
      icon: <FaLeaf className="text-green-700 w-6 h-6 mt-1" />,
      title: "Eco-Friendly Innovation",
      desc: "TPE is 100% recyclable, hence reduces environmental impact.",
    },
    {
      icon: <FaRecycle className="text-blue-700 w-6 h-6 mt-1" />,
      title: "Zero-Waste Manufacturing",
      desc: "Recycling every bit of material, ensuring a circular production process.",
    },
    {
      icon: <FaStar className="text-yellow-400 w-6 h-6 mt-1" />,
      title: "Certified Excellence",
      desc: "ISO-certified and RoHS-compliant — our products meet global benchmarks for quality, safety, and environmental responsibility.",
    },
    {
      icon: <FaHandshake className="text-pink-700 w-6 h-6 mt-1" />,
      title: "Customer-Centric Approach",
      desc: "Collaboration with clients to develop solutions tailored to specific needs.",
    },
    {
      icon: <FaDraftingCompass className="text-indigo-600 w-6 h-6 mt-1" />,
      title: "Precision Engineering",
      desc: "Advanced tooling and tight tolerances ensure reliable, leak-proof performance every time.",
    },
    {
      icon: <FaRocket className="text-red-600 w-6 h-6 mt-1" />,
      title: "Rapid Prototyping",
      desc: "Quick turnaround on new designs using modern prototyping methods to speed up your development cycle.",
    },
    {
      icon: <FaGlobe className="text-blue-600 w-6 h-6 mt-1" />,
      title: "Global Reach",
      desc: "Serving clients worldwide with scalable solutions and timely delivery across continents.",
    },
    {
      icon: <FaShieldAlt className="text-gray-700 w-6 h-6 mt-1" />,
      title: "Durability Guaranteed",
      desc: "Built to withstand extreme temperatures, pressure, and wear — our gaskets are made to last.",
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-16 px-4 bg-teal-100">
        <div className="p-5 mx-auto max-w-7xl">
          <motion.h2
            className="text-4xl text-teal-800 mb-4 font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
  
          <motion.p
            className="text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Himalaya Plast, we don{"'"}t just manufacture gaskets, we engineer
            comprehensive sealing solutions.
          </motion.p>
  
          <ul className="space-y-6">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-base text-teal-800">{item.title}</h3>
                  <p className="text-teal-700">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  