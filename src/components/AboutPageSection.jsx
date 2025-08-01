import { motion } from "framer-motion";
import TextType from "../components/TextType"; 
import tiger from "../assets/logos/India.png";

const keyPoints = [
  {
    title: "Innovation at the Core:",
    desc: "Early adoption of thermoplastic elastomers (TPE) revolutionized our manufacturing processes, enabling 100% recyclability and sustainable practices.",
  },
  {
    title: "Certifications that Inspire Confidence:",
    desc: "We operate under ISO 9001:2015, ISO 14001, ISO 45001, and ISO 50001 standards, with all products RoHS compliant and lead free — aligning operations with global benchmarks for quality, safety, sustainability, and compliance.",
  },
  {
    title: "Technological Excellence:",
    desc: "We’ve integrated advanced co-extrusion technology and material sciences to deliver custom-fit solutions for complex architectural needs.",
  },
  {
    title: "A Testament to Growth:",
    desc: "From humble beginnings to a state-of-the-art facility, Himalaya Plast continues to expand its capabilities through continuous improvement and sustainable growth.",
  },
  {
    title: "Profile-Matched Perfection:",
    desc: "Each gasket is designed to match specific uPVC and aluminium profiles — ensuring a seamless fit, leak prevention, and long-term structural reliability.",
  },
];

const AboutSection = () => {
  return (
    <section className="h-auto pt-24 pb-16 bg-teal-100">
      {/* Typing + Logo Section */}
      <motion.div
        className="h-auto md:h-[12rem] bg-teal-200 mb-12 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-6 px-4 py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <TextType
          text={[
            "A legacy of 25+ years",
            "Custom-engineered gaskets",
            "Benchmark in Gaskets",
            "Made in India",
          ]}
          typingSpeed={95}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter=""
          className="text-center text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-teal-800 w-[33rem]"
        />
        <motion.img
          src={tiger}
          alt="Himalaya Plast Logo"
          className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* About Title & Description */}
      <motion.div
        className="max-w-5xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-800 mb-6">
          About Himalaya Plast
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-start">
          Himalaya Plast is a specialist manufacturer of custom-engineered
          gaskets designed for uPVC and aluminium profiles. From TPE, TPV, and
          TPO-based co-extrusion to trial-fitted profile matching, our products
          are built to lock in cleanly, seal effectively, and perform long-term
          in architectural applications. We don’t sell from a catalogue — we
          engineer gaskets to fit your profile exactly.
        </p>
      </motion.div>

      {/* Key Points List */}
      <div className="max-w-5xl mx-auto mt-10 space-y-6 px-4">
        {keyPoints.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="h-7 w-7 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center text-sm font-bold text-teal-800">
              {index + 1}
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-snug">
              <strong>{item.title}</strong> {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
