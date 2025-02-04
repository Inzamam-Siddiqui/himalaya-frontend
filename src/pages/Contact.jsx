
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="">
      <section className="h-[45rem] bg-teal-100 flex flex-col items-center justify-center space-y-6 pt-20">
        <h1 className="text-5xl font-bold text-teal-900">
          Contact Information
        </h1>
        <h2 className="text-lg max-w-3xl mx-auto font-normal text-center text-teal-700 pb-4">
          Feel free to reach out to us for any inquiries, support, or exciting
          collaboration opportunities. We{"'"}re here to help and partner with
          you!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl pt-12">
          {/* Phone Box */}
          <div className="bg-teal-400 text-white p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:translate-y-[-10px]">
            <span className="text-4xl">🌍</span>
            <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
            <div className="flex space-x-8 pt-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook className="w-10 h-10" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaXTwitter className="w-10 h-10" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram className="w-10 h-10" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 transition"
              >
                <FaLinkedin className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Email Box */}
          <div className="bg-teal-500 text-white p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:translate-y-[-10px]">
            <span className="text-4xl">📧</span>
            <h3 className="text-xl font-semibold mt-4">Contact</h3>
            <p className="mt-2 text-lg">himalayaplast@gmail.com</p>
            <p className="mt-2 text-lg"> +91 93237 00157</p>
          </div>

          {/* Address Box */}
          <div className="bg-teal-600 text-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:translate-y-[-10px]">
            <span className="text-4xl">📍</span>
            <h3 className="text-xl font-semibold mt-4">Address</h3>
            <p className="mt-2 text-lg">
              Gala No.5, Stainley Compound, Behind Bismillah Hotel, Khairani
              Road, Sakinaka, Andheri East, Mumbai, Maharashtra, 400072.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto bg-gray-100 grid grid-cols-2 py-20 px-24 gap-20">
        <Map />
        <ContactForm />
      </section>

      <section className="bg-teal-100 py-16 px-8">
        {/* Section Title */}
        <h2 className="text-4xl text-teal-800 font-bold text-center mb-4"> Business Hours</h2>
        <p className="text-2xl text-teal-500 text-center mb-6">Our schedule ensures smooth operations throughout the day.</p>
        {/* Timings Table */}
        <div className="max-w-2xl mx-auto bg-gray-50 shadow-md rounded-lg p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 text-lg font-medium text-gray-600">
                  Day
                </th>
                <th className="border-b py-2 text-lg font-medium text-gray-600">
                  Timing
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "Monday", timing: "10:00 AM - 6:00 PM" },
                { day: "Tuesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Wednesday", timing: "10:00 AM - 6:00 PM" },
                { day: "Thursday", timing: "10:00 AM - 6:00 PM" },
                { day: "Friday", timing: "10:00 AM - 6:00 PM" },
                { day: "Saturday", timing: "10:00 AM - 6:00 PM" },
                { day: "Sunday", timing: "Closed" },
              ].map((slot, index) => (
                <tr key={index} className="hover:bg-teal-100">
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
    </div>
  );
};

export default Contact;
