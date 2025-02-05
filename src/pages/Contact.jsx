import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="">
      <section className="min-h-[45rem] bg-teal-100 flex flex-col items-center justify-center space-y-6 pt-40 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 text-center">
          Contact Information
        </h1>
        <h2 className="text-md sm:text-lg max-w-3xl mx-auto font-normal text-center text-teal-700 pb-4">
          Feel free to reach out to us for any inquiries, support, or exciting
          collaboration opportunities. We{"'"}re here to help and partner with
          you!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl pt-8">
          {/* Visit Us Box */}
          <div className="bg-teal-400 text-white p-8 md:p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl">🌍</span>
            <h3 className="text-lg md:text-xl font-semibold mt-4">Visit Us</h3>
            <div className="flex space-x-6 pt-6">
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
              <a
                href="https://www.instagram.com/himalaya.plast?igsh=MW5rdjU0ZjcyeXNydg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a
                href="https://www.linkedin.com/company/himalayaplast/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 transition"
              >
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-teal-500 text-white p-8 md:p-10 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl">📧</span>
            <h3 className="text-lg md:text-xl font-semibold mt-4">Contact</h3>
            <p className="mt-2 text-sm md:text-lg">himalayaplast@gmail.com</p>
            <p className="mt-2 text-sm md:text-lg">+91 93237 00157</p>
          </div>

          {/* Address Box */}
          <div className="bg-teal-600 text-white p-6 md:p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
            <span className="text-4xl">📍</span>
            <h3 className="text-lg md:text-xl font-semibold mt-4">Address</h3>
            <p className="mt-2 text-sm md:text-lg">
              Gala No.5, Stainley Compound, Behind Bismillah Hotel, Khairani
              Road, Sakinaka, Andheri East, Mumbai, Maharashtra, 400072.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto bg-gray-100 grid grid-cols-1 md:grid-cols-2 py-16 px-6 md:px-12 lg:px-24 gap-12 md:gap-20">
  <Map />
  <ContactForm />
</section>


      <section className="bg-teal-100 py-16 px-8">
        {/* Section Title */}
        <h2 className="text-4xl text-teal-800 font-bold text-center mb-4">
          {" "}
          Business Hours
        </h2>
        <p className="text-2xl text-teal-500 text-center mb-6">
          Our schedule ensures smooth operations throughout the day.
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
