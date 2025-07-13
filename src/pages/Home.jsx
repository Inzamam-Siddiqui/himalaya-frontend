import CustomCarousel from "../components/CustomCarousel";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import KeyProducts from "../components/KeyProducts";
import { FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import tpe1 from "../assets/products/tpe1.jpg";
import tpe2 from "../assets/products/tpe2.png";
const Home = () => {
  return (
    <div className="">
      <CustomCarousel />

      <AboutSection />

      <KeyProducts />

      <section className="bg-teal-100 py-20">
        <h1 className="text-4xl font-bold text-center text-teal-800 mb-8">
          Thermoplastic Elastomers (TPE)
        </h1>
        <div className="grid grid-cols-4 grid-rows-2 mx-auto max-w-7xl bg-teal-500 h-[30rem] p-4 gap-4">
          <div className="col-span-1 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
            <h2 className="text-xl font-bold text-teal-800">
              About TPE — Thermoplastic Elastomers (TPE)
            </h2>
            <p className="text-teal-700 mt-2">
              Thermoplastic Elastomers (TPE) are cutting-edge materials that
              combine the processing advantages of plastics with the functional
              properties of rubber. TPEs can be stretched, flexed, and shaped
              with excellent durability.
            </p>
            <p className="text-teal-700 mt-2 font-semibold italic">
              “Stretch Beyond Limits. Build Beyond Imagination.”
            </p>
          </div>

          <div className="col-span-3 row-span-1 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
            <h2 className="text-xl font-bold text-teal-800">Why Choose TPE?</h2>
            <p className="text-teal-700 mt-2">
              TPEs offer the perfect balance between performance and
              sustainability. Here’s why TPE is the future of material
              engineering:
            </p>
            <ul className="text-teal-700 mt-2 list-disc pl-5">
              <li>
                <strong>Highly Versatile:</strong> Moldable, extrudable, and
                recyclable — for maximum manufacturing efficiency.
              </li>
              <li>
                <strong>Eco-Friendly Materials:</strong> Our TPE compounds are
                100% recyclable and contribute to sustainable manufacturing
                practices.
              </li>
              <li>
                <strong>Customizable Solutions:</strong> Tailored hardness,
                flexibility, colors, and finishes to meet specific project
                demands.
              </li>
            </ul>
          </div>

          <div className="col-span-2 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
            <h2 className="text-xl font-bold text-teal-800">
              Advantages of Choosing Himalaya Plast{"'"}s TPE
            </h2>
            <ul className="text-teal-700 mt-2 list-disc pl-5">
              <li>Exceptional soft-touch aesthetics</li>
              <li>Superior UV and weather resistance</li>
              <li>Excellent chemical and abrasion resistance</li>
              <li>Strong adhesion to substrates like PP, ABS, and PC</li>
              <li>
                Fast delivery, color customization, and dedicated technical
                support
              </li>
            </ul>
            <p className="text-teal-700 mt-4 font-semibold italic">
              “Feel the Difference. Experience the Performance.”
            </p>
          </div>

          <div className="col-span-1 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl">
            <img src={tpe1} className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 mx-auto max-w-7xl bg-teal-500  px-4 pb-4 gap-4">
          <div className="col-span-1 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl">
            <img src={tpe2} alt="" />
          </div>

          {/* Right-side content */}
          <div className="col-span-2 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
            <h2 className="text-xl font-bold text-teal-800">
              Applications of TPE
            </h2>
            <ul className="text-teal-700 mt-2 list-disc pl-5">
              <li>Automotive: Weather seals, mats, soft-touch interiors.</li>
              <li>Medical: Biocompatible tubing, syringe seals.</li>
              <li>Consumer Products: Phone cases, kitchen utensils.</li>
              <li>Industrial: Gaskets, seals, cable insulation.</li>
              <li>Sports: Fitness equipment, protective gear.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="h-auto bg-gray-100 py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-teal-800 mb-2">
          Industries We Serve
        </h1>
        <h2 className="text-lg max-w-3xl mx-auto font-semibold text-center text-teal-500 mb-6">
          Himalaya Plast’s versatile gaskets are designed for various
          industries, offering high-performance sealing solutions
        </h2>

        <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-xl">
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">01</h1>
            <h4 className="text-2xl font-semibold text-white">Automobile</h4>
            <p className="text-white mt-2">
              Reliable TPE solutions built for automotive strength, flexibility,
              and long-lasting performance.
            </p>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">02</h1>
            <h4 className="text-2xl font-semibold text-white">
              Industrial Applications
            </h4>
            <p className="text-white mt-2">
              Our high-performance gaskets provide excellent sealing solutions
              for heavy-duty industrial applications.
            </p>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">03</h1>
            <h4 className="text-2xl font-semibold text-white">
              Construction & Architecture
            </h4>
            <p className="text-white mt-2">
              Durable and weather-resistant gaskets designed for modern
              construction and architectural projects.
            </p>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">04</h1>
            <h4 className="text-2xl font-semibold text-white">
              Custom Projects
            </h4>
            <p className="text-white mt-2">
              Tailored sealing solutions for unique and specialized applications
              across different industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-teal-100">
        <div className="p-5 mx-auto max-w-7xl">
          <h1 className="text-4xl text-teal-800 mb-2 font-bold">
            Why Choose Us ?
          </h1>
          <p className="text-xl mb-4">
            At Himalaya Plast, we don{"'"}t just manufacture gaskets, we
            engineer comprehensive sealing solutions.
          </p>

          <ul className="p-6 space-y-4">
            <li className="flex items-center space-x-3">
              <FaLeaf className="text-green-700" />
              <span>
                <strong>Eco-Friendly Innovation:</strong> TPE is 100%
                recyclable, hence reduces environmental impact.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <FaRecycle className="text-blue-700" />
              <span>
                <strong>Zero-Waste Manufacturing:</strong> Recycling every bit
                of material, ensuring a circular production process.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaStar className="text-yellow-300" />
              <span>
                <strong>Certified Excellence:</strong> ISO-certified and
                RoHS-compliant — our products meet global benchmarks for
                quality, safety, and environmental responsibility.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <FaHandshake className="text-pink-700" />
              <span>
                <strong>Customer-Centric Approach:</strong> Collaboration with
                clients to develop solutions tailored to specific needs.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="flex justify-center pb-10 bg-teal-100">
        <button className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-lg px-5 py-2.5 text-center">
          <Link to="/contact">Contact Us {"->"}</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
