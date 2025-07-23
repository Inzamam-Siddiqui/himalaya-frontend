import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div className="">

      <ContactSection />

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
        <p className="text-md sm:text-lg max-w-4xl mx-auto font-normal text-center text-teal-700 pb-6">
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
