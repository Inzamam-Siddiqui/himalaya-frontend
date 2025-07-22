import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="">
      <section className="min-h-[45rem] bg-teal-100 flex flex-col items-center justify-center space-y-6 pt-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 text-center">
          We{"'"}re Here To Help!
        </h2>
        <h2 className="text-md sm:text-lg max-w-3xl mx-auto font-normal text-center text-teal-700 pb-4">
          Whether you’re looking for the right gasket solution or need help with
          a custom profile, we’re ready to assist. Reach out — and let’s build
          something that fits.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl pt-8">
          {/* Visit Us Box */}
          <div className="bg-teal-400 text-white p-8 md:p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl">🌍</span>
            <h3 className="text-lg md:text-xl font-semibold mt-4">Follow Us</h3>
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
              <a
                href="https://x.com/HimalayaPlast?t=tnA_v8Kv3yUpc848955tDg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaXTwitter className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>

          {/* Contact Box */}
          {/* Contact Box */}
          <div className="bg-teal-500 text-white p-8 md:p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl">📧</span>
            <h3 className="text-lg md:text-xl font-semibold mt-4">Contact</h3>

            {/* Email Link */}
            <a
              href="mailto:info@himalayaplast.com"
              className="mt-2 text-sm md:text-lg hover:text-blue-300 transition"
            >
              info@himalayaplast.com
            </a>

            {/* Phone Link */}
            <a
              href="tel:+919323700157"
              className="mt-2 text-sm md:text-lg hover:underline transition"
            >
              +91 93237 00157
            </a>
          </div>

          <a
            href="https://www.google.com/maps/place/Himalaya+Plast/@19.1074498,72.8922616,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-teal-600 text-white p-6 md:p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
              <span className="text-4xl">📍</span>
              <h3 className="text-lg md:text-xl font-semibold mt-4">Address</h3>
              <p className="mt-2 text-sm md:text-lg">
                5, Stainley Compound, Behind Bismillah Hotel, Khairani Road,
                Sakinaka, Andheri East, Mumbai, Maharashtra, 400072.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="h-auto bg-gray-100 grid grid-cols-1 md:grid-cols-2 py-16 px-6 md:px-12 lg:px-24 gap-12 md:gap-20">
        <Map />
        <ContactForm />
      </section>

      <section className="bg-teal-100 py-16 px-8 ">
        {/* Section Title */}
        <h2 className="text-4xl text-teal-800 font-bold text-center mb-4">
          {" "}
          Business Hours
        </h2>
        <p className="text-2xl mx-auto max-w-5xl text-teal-500 mb-6 text-center">
          Our support doesn’t end at the website — it starts here. Whether it’s
          a profile-matched gasket, technical advice, or trial sample, our team
          is available throughout the week to assist you with speed and
          precision.
        </p>
        {/* Timings Table */}
        <div className="max-w-2xl mx-auto bg-gray-50 shadow-md rounded-lg p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 text-lg font-medium text-gray-600">
                  Day
                </th>
                <th className="border-b py-2 text-lg font-medium text-gray-600">
                  Timing (IST)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "Monday - Saturday", timing: "10:00 AM - 6:00 PM" },
                { day: "Sunday", timing: "Closed" },
              ].map((slot, index) => (
                <tr key={index} className="hover:bg-teal-400">
                  <td className="py-3 px-4 border-b text-gray-700">
                    {slot.day}
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    {slot.timing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-teal-100 pb-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-teal-900 mb-4">
          Thank You for Visiting Himalaya Plast!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-10">
          <a
            href="/"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-700 transition"
          >
            Back to Home
          </a>
          <a
            href="mailto:info@himalayaplast.com"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-700 transition"
          >
            Send Message
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
