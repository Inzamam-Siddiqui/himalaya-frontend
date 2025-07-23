import Mission from "../components/Mission";
import tiger from "../assets/logos/India.png";
import globe from "../assets/bgimages/global.mp4";
import { InfiniteMovingCards } from "../components/MovingCards";
import { FiTarget } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { MdBuild } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import AboutPageSection from "../components/AboutPageSection";

const About = () => {
  return (
    <div>

      <AboutPageSection />

      <Mission />

      <section className="relative h-[40rem] overflow-hidden text-center flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={globe} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-white px-4">
          <h2 className="text-4xl font-semibold mb-4">
            Global Reach & Partnerships
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-300">
            We are proud to have established strong partnerships around the
            world, extending our influence and impact in diverse markets. Our
            global network allows us to serve our clients with unmatched
            expertise and support.
          </p>
        </div>
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
                title: "Delhi (2021) | Mumbai (2022, 2023 & 2025)",
                quote:
                  "Proud participants in prestigious global exhibitions such as ZAK Door and Windows Expo, showcasing the versatility and quality of our TPE solutions.",
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
                title: "ISO, RoHS, UV",
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-10">
            What You Can Expect from Himalaya Plast
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Precision, Always */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FiTarget className="text-teal-700 text-3xl" />
                Precision, Always
              </h3>
              <p className="text-gray-700">
                Every gasket is engineered to lock in cleanly and fit like it
                was made just for your profile — because it is.
              </p>
            </div>

            {/* Support That Sticks */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BiSupport className="text-teal-700 text-3xl" />
                Support That Sticks
              </h3>
              <p className="text-gray-700">
                From your first inquiry to post-installation feedback, our team
                responds fast, solves faster, and backs every product we ship.
              </p>
            </div>

            {/* Customization Without Complication */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MdBuild className="text-teal-700 text-3xl" />
                Customization Without Complication
              </h3>
              <p className="text-gray-700">
                Whether it’s profile fitment or color matching, we simplify the
                custom process without compromising on performance.
              </p>
            </div>

            {/* Integrity in Every Roll */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-teal-800 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaHandshake className="text-teal-700 text-3xl" />
                Integrity in Every Roll
              </h3>
              <p className="text-gray-700">
                We deliver what we promise — on time, on spec, and without
                excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto py-20 bg-teal-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">
            Proudly Made in India
          </h2>
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
