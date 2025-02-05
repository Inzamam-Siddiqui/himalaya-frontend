import Mission from "../components/Mission";
import tiger from "../assets/logos/India.png";
import image3 from "../assets/bgimages/image3.jpg";

const About = () => {
  return (
    <div className="">
      <section className="h-auto pt-40 pb-10 px-4 bg-teal-100">
        <div className="max-w-6xl mx-auto  text-center">
          <h1 className="text-5xl text-center font-bold text-teal-800 mb-6">
            Our Journey
          </h1>
          <p className=" text-start text-gray-700 leading-relaxed">
            From humble beginnings to industry leadership, Himalaya Plast has
            continually evolved to meet the needs of modern industries:
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-10 space-y-8">
          <div className="flex items-start space-x-4">
            <div className="h-6 w-6 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center">
              <span className="font-bold text-teal-800">1</span>
            </div>
            <p className="text-gray-700">
              <strong>Innovation at the Core:</strong> Early adoption of
              recyclable thermoplastic elastomers (TPE) revolutionized our
              manufacturing processes.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="h-6 w-6 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center">
              <span className="font-bold text-teal-800">2</span>
            </div>
            <p className="text-gray-700">
              <strong>Certifications that Inspire Confidence:</strong> Achieved
              ISO 14001 (Environmental Management) and ISO 45001 (Workplace
              Safety) certifications.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="h-6 w-6 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center">
              {" "}
              <span className="font-bold text-teal-800">3</span>
            </div>
            <p className="text-gray-700">
              <strong>Technological Excellence:</strong> Integrated advanced
              co-extrusion technologies to deliver custom solutions tailored to
              diverse applications.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="h-6 w-6 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center">
              {" "}
              <span className="font-bold text-teal-800">4</span>
            </div>
            <p className="text-gray-700">
              <strong>A Testament to Growth:</strong> Today, Himalaya Plast
              stands as a beacon of continuous improvement and sustainable
              growth.
            </p>
          </div>
        </div>
      </section>

      <Mission />

      <section
        className="h-[40rem] flex flex-col justify-center items-center text-center p-8 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${image3})` }} // Make sure image3 is a valid image path
      >
        <h2 className="text-4xl font-semibold text-teal-500 mb-4">
          Global Reach & Partnerships
        </h2>
        <p className="text-lg mx-auto max-w-4xl text-teal-400 mb-6">
          We are proud to have established strong partnerships around the world,
          extending our influence and impact in diverse markets. Our global
          network allows us to serve our clients with unmatched expertise and
          support.
        </p>
      </section>

      <section className="h-auto bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certifications and Achievements
          </h2>
          <p className="text-lg md:text-xl mb-12">
            A testament to our dedication to quality, sustainability, and
            innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                imgSrc: "https://via.placeholder.com/100",
                title: "Certified Excellence",
                description:
                  "Awarded for our commitment to industry-leading standards and practices.",
              },
              {
                imgSrc: "https://via.placeholder.com/100",
                title: "Sustainability Award",
                description:
                  "Recognizing our efforts in promoting eco-friendly production processes.",
              },
              {
                imgSrc: "https://via.placeholder.com/100",
                title: "Innovative Product Design",
                description:
                  "Honoring our pioneering designs in gasket and extrusion products.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="mx-auto mb-4 rounded-full w-40 h-40 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto py-20 bg-teal-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-teal-800 mb-6">
            Proudly Made in India 🇮🇳
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Himalaya Plast takes pride in manufacturing all products in India.
            This reduces transportation-related carbon emissions and supports
            sustainable local manufacturing practices. Their commitment to local
            craftsmanship ensures the highest quality while contributing to the
            growth of the Indian economy.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src={tiger}
            alt="Make in India"
            className="w-80 h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
