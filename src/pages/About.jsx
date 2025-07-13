import Mission from "../components/Mission";
import tiger from "../assets/logos/India.png";
// import image3 from "../assets/bgimages/image3.jpg";
import globe from "../assets/bgimages/global.mov";
import { InfiniteMovingCards } from "../components/MovingCards";

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
              thermoplastic elastomers (TPE) revolutionized our manufacturing
              processes, thus it helps in 100% recyclability and sustainability.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="h-6 w-6 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center">
              <span className="font-bold text-teal-800">2</span>
            </div>
            <p className="text-gray-700">
              <strong>Certifications that Inspire Confidence:</strong> We operate under
              <strong> ISO 9001, 14001, 45001</strong>, and <strong> 50001</strong>  standards, with all
              products RoHS compliant — aligning our operations with global
              benchmarks in quality, safety, sustainability, and compliance.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="h-6 w-6 flex-shrink-0 bg-teal-300 rounded-full flex items-center justify-center">
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
        className="h-[40rem] flex flex-col justify-center items-center text-center p-8 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${globe})` }}
      >
        <h2 className="text-4xl font-semibold text-white mb-4">
          Global Reach & Partnerships
        </h2>
        <p className="text-lg mx-auto max-w-4xl text-gray-300 mb-6">
          We are proud to have established strong partnerships around the world,
          extending our influence and impact in diverse markets. Our global
          network allows us to serve our clients with unmatched expertise and
          support.
        </p>
      </section>

      <section className="bg-teal-50 py-20 px-4">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certifications and Achievements
          </h2>
          <p className="text-lg md:text-xl mb-12">
            A testament to our dedication to quality, sustainability, and
            innovation.
          </p>
          <InfiniteMovingCards
            items={[
              {
                name: "Recognized at Leading Industry Events",
                title: "Delhi (2021) | Mumbai (2022 & 2023)",
                quote:
                  "Proud participants in prestigious global exhibitions such as ZAK World of Façades, showcasing the versatility and quality of our TPE solutions.",
                tagline: "Showcasing Excellence, One Event at a Time.",
              },
              {
                name: "100% Made in India, Trusted Worldwide",
                title: "Global Markets",
                quote:
                  "Delivering premium, eco-friendly TPE materials crafted in India and trusted by industries worldwide for durability, flexibility, and performance.",
                tagline: "Proudly Made in India, Serving the World.",
              },
              {
                name: "Innovating the Future of Thermoplastic Elastomers",
                title: "Automotive, Medical, Construction",
                quote:
                  "Leading advancements in TPE, delivering future-ready solutions across diverse industry sectors.",
                tagline: "Driving Tomorrow’s Solutions, Today.",
              },
              {
                name: "Preferred TPE Partner for Leading Global Brands",
                title: "Top-Tier Global Collaborations",
                quote:
                  "Providing custom, high-performance TPE solutions that meet elite industry standards.",
                tagline: "Trusted by Industry Leaders, Chosen for Excellence.",
              },
              {
                name: "Expanding Product Range for Diverse Needs",
                title: "Automotive to Custom Elastomers",
                quote:
                  "Continuously evolving our product line to meet the unique needs of a wide array of industries.",
                tagline: "Expanding Horizons with Every Product.",
              },
              {
                name: "Decades of Expertise in Elastomer Manufacturing",
                title: "15+ Years of Mastery",
                quote:
                  "Combining industry knowledge with advanced techniques for unmatched precision and reliability.",
                tagline:
                  "Precision, Reliability, and Excellence in Every Product.",
              },
              {
                name: "Commitment to Sustainability & Innovation",
                title: "Eco-Friendly Production",
                quote:
                  "Ensuring every TPE solution we create is both high-performing and environmentally conscious.",
                tagline: "Innovating with Purpose, Sustaining the Future.",
              },
              {
                name: "Cutting-Edge Technology for Superior Production",
                title: "State-of-the-Art Facilities",
                quote:
                  "Utilizing top-tier manufacturing tech for precise, high-quality TPE solutions.",
                tagline:
                  "Manufacturing the Future with Innovation and Precision.",
              },
              {
                name: "Globally Recognized Certifications & Standards",
                title: "ISO, RoHS, VU",
                quote:
                  "Certified for global quality and safety standards, delivering dependable excellence.",
                tagline: "Certified Quality, Trusted Worldwide.",
              },
              {
                name: "Expanding into Emerging Markets",
                title: "Global Strategy in Action",
                quote:
                  "Reaching new regions with tailored TPE solutions for evolving industries.",
                tagline: "Global Reach, Local Impact.",
              },
              {
                name: "Excellence in Customer Satisfaction",
                title: "98% Satisfaction Rate",
                quote:
                  "Building long-term relationships through exceptional service and support.",
                tagline:
                  "Dedicated to Your Satisfaction, Committed to Your Success.",
              },
              {
                name: "Award-Winning Solutions and Products",
                title: "Multiple Industry Recognitions",
                quote:
                  "Awarded for innovation, design, and performance in the TPE sector.",
                tagline: "Award-Winning Quality, Unmatched Performance.",
              },
            ]}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </section>

      <section className="h-auto bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certifications and Achievements
          </h2>
          <p className="text-lg md:text-xl mb-12">
            A testament to our dedication to quality, sustainability, and
            innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Achievement */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800">
              <h3 className="text-2xl font-semibold mb-4">
                1️⃣ Recognized at Leading Industry Events
              </h3>
              <p className="text-gray-700 mb-4">
                📍 Delhi (2021) | Mumbai (2022) | Mumbai (2023)
              </p>
              <p className="text-gray-700">
                🏆 Proud participants in prestigious global exhibitions such as
                ZAK World of Façades, showcasing the versatility and quality of
                our TPE solutions.
              </p>
            </div>

            {/* Second Achievement */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800">
              <h3 className="text-2xl font-semibold mb-4">
                100% Made in India, Trusted Worldwide
              </h3>
              <p className="text-gray-700 mb-4">
                🌍 Delivering premium, eco-friendly TPE materials crafted in
                India and trusted by industries around the world for their
                durability, flexibility, and performance.
              </p>
            </div>

            {/* Third Achievement */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800">
              <h3 className="text-2xl font-semibold mb-4">
                Innovating the Future of Thermoplastic Elastomers
              </h3>
              <p className="text-gray-700 mb-4">
                ⚙️ Leading technological advancements in TPE, with solutions
                that meet the evolving needs of sectors such as automotive,
                medical, construction, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto py-20 bg-teal-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-teal-800 mb-6">
            Proudly Made in India
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Himalaya Plast takes pride in manufacturing all products in
            India.This supports sustainable local manufacturing practices. Their
            commitment to local craftsmanship ensures the highest quality.
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
