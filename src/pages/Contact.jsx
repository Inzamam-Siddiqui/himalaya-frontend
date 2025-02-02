// Follow Us
// Links to social media or LinkedIn.
// FAQs (Optional)
// Answers to common customer queries.
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

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
            <span className="text-4xl">📞</span>
            <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
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
              Road, Sakinaka, Andheri East, Mumbai, Maharashtra, 400072
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto bg-gray-100 grid grid-cols-2 py-10 px-24 gap-20">
        <Map />
        <ContactForm />
      </section>

      <section className="h-[40rem] bg-teal-100"></section>
    </div>
  );
};

export default Contact;
