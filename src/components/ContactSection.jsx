import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
  } from "react-icons/fa6";
  import { motion } from "framer-motion";
  
  const ContactSection = () => {
    return (
      <section className="min-h-[45rem] bg-teal-100 flex flex-col items-center justify-center space-y-6 pt-24 px-4">
        {/* Animated Headings */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-teal-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We{"'"}re Here To Help!
        </motion.h2>
  
        <motion.h2
          className="text-md sm:text-lg max-w-4xl mx-auto font-normal text-center text-teal-700 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you’re looking for the right gasket solution or need help with a custom profile, we’re ready to assist. Reach out — and let’s build something that fits.
        </motion.h2>
  
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl pt-8">
          {/* Card Variants */}
          {[
            {
              icon: "🌍",
              title: "Follow Us",
              content: (
                <div className="flex space-x-6 pt-6">
                  <a
                    href="https://www.linkedin.com/company/himalayaplast/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 transition"
                  >
                    <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
                  </a>
                  <a
                    href="https://www.instagram.com/himalaya.plast?igsh=MW5rdjU0ZjcyeXNydg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                  >
                    <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/18boex2m7K/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <FaFacebook className="w-8 h-8 md:w-10 md:h-10" />
                  </a>

                </div>
              ),
              bg: "bg-teal-400",
              delay: 0,
            },
            {
              icon: "📧",
              title: "Contact",
              content: (
                <>
                  <a
                    href="mailto:info@himalayaplast.com"
                    className="mt-2 text-sm md:text-lg hover:text-blue-300 transition"
                  >
                    info@himalayaplast.com
                  </a>
                  <a
                    href="tel:+919323700157"
                    className="mt-2 text-sm md:text-lg hover:underline transition"
                  >
                    +91 93237 00157
                  </a>
                </>
              ),
              bg: "bg-teal-500",
              delay: 0.15,
            },
            {
              icon: "📍",
              title: "Address",
              content: (
                <p className="mt-2 text-sm md:text-lg">
                  5, Stainley Compound, Behind Bismillah Hotel, Khairani Road,
                  Sakinaka, Andheri East, Mumbai, Maharashtra, 400072.
                </p>
              ),
              bg: "bg-teal-600",
              link:
                "https://www.google.com/maps/place/Himalaya+Plast/@19.1074498,72.8922616,17z",
              delay: 0.3,
            },
          ].map(({ icon, title, content, bg, delay, link }, index) =>
            link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                key={index}
              >
                <motion.div
                  className={`${bg} text-white p-6 md:p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl">{icon}</span>
                  <h3 className="text-lg md:text-xl font-semibold mt-4">
                    {title}
                  </h3>
                  {content}
                </motion.div>
              </a>
            ) : (
              <motion.div
                key={index}
                className={`${bg} text-white p-8 md:p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
              >
                <span className="text-4xl">{icon}</span>
                <h3 className="text-lg md:text-xl font-semibold mt-4">
                  {title}
                </h3>
                {content}
              </motion.div>
            )
          )}
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  