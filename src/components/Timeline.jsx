import { Timeline } from "antd";
import { motion } from "framer-motion";

const timelineItems = [
  "Initial Discovery Call – Understand profiles and project needs.",
  "On-Site Visit (If Needed) – Examine real profiles and issues.",
  "Profile Sampling – Send uPVC/aluminium profile samples.",
  "Custom Gasket Development – Prototype via co-extrusion.",
  "Sample Testing & Validation – Test fit, seal, lock, tolerance.",
  "Feedback Loop (If Any) – Make tweaks until perfect.",
  "Final Sample Dispatch – Ship final sample for trials.",
  "Bulk Production & Delivery – Begin mass production & ship.",
];

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GasketProcessTimeline = () => {
  return (
    <section className="bg-teal-200 mt-20 py-16 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Process: From Profile to Perfect Fit
      </motion.h2>

      <motion.h6
        className="mt-4 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We don’t just supply gaskets — we engineer seamless solutions tailored
        to your profiles. Here’s how we deliver the perfect fit, every time.
      </motion.h6>

      <motion.div
        className="mt-16 max-w-4xl mx-auto text-left"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Timeline
          mode="alternate"
          className="text-sm sm:text-base"
          items={timelineItems.map((text, index) => ({
            color: "teal",
            children: (
              <motion.div key={index} variants={itemVariant}>
                <strong>{text.split(" – ")[0]}</strong> – {text.split(" – ")[1]}
              </motion.div>
            ),
          }))}
        />
      </motion.div>
    </section>
  );
};

export default GasketProcessTimeline;
