// Follow Us
// Links to social media or LinkedIn.
// FAQs (Optional)
// Answers to common customer queries.
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
                className="hover:text-blue-400 transition"
              >
                <FaTwitter className="w-10 h-10" />
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
            <p className="mt-2 text-lg">contact@himalayaplast.com</p>
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

      <section className="h-auto bg-teal-100 py-40 px-8 text-center">
        <h2 className="text-4xl font-bold text-teal-900">Business Hours</h2>
        <p className="font-medium text-2xl text-teal-700 mt-2">
          We are available during these hours:
        </p>
        <div className="mt-6 text-xl space-y-4  text-teal-900">
          <p>Monday - Saturday: <br/> 9:00 AM - 9:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      <section className="h-auto bg-gray-100 py-16 px-8">
  <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
    What Our Customers Say
  </h2>
  <div className="max-w-4xl mx-auto space-y-6">
    <div className="bg-white p-6 rounded-lg shadow-md justify-start">
      <p className="text-gray-700 italic">
        {'"Excellent service and quality products. Highly recommended!"'}
      </p>
      <p className="text-gray-900 font-semibold mt-2">- John Doe</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-end">
      <p className="text-gray-700 italic">
        {'"Their customer support is amazing. Quick responses and very helpful!"'}
      </p>
      <p className="text-gray-900 font-semibold mt-2">- Sarah Khan</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic">
        {'"Their customer support is amazing. Quick responses and very helpful!"'}
      </p>
      <p className="text-gray-900 font-semibold mt-2">- Sarah Khan</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;
