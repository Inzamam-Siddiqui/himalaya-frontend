import CustomCarousel from "../components/CustomCarousel";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import KeyProducts from "../components/KeyProducts";
import Industries from "../components/Industries";
import tpe from "../assets/products/tpe.jpg";
import tpe2 from "../assets/products/tpe2.png";
import WhyChooseUs from "../components/WhyChooseUs";
const Home = () => {
  return (
    <div className="">
      <CustomCarousel />

      <AboutSection />

      <KeyProducts />

      <section className="bg-teal-100 py-20">
        <h2 className="text-4xl font-bold text-center text-teal-800 mb-8 px-4">
          Thermoplastic Elastomers (TPE)
        </h2>

        {/* First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 mx-auto max-w-7xl bg-teal-500 h-auto md:h-[30rem] p-4 gap-4 px-4 sm:px-6">
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

          <div className="col-span-1 sm:col-span-1 md:col-span-3 row-span-1 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
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

          <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
            <h2 className="text-xl font-bold text-teal-800">
              Advantages of Choosing Himalaya Plast{"'"}s TPE
            </h2>
            <ul className="text-teal-700 mt-2 list-disc pl-5">
              <li>Exceptional soft-touch aesthetics</li>
              <li>Superior UV and weather resistance</li>
              <li>Excellent chemical and abrasion resistance</li>
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
            <img src={tpe} className="w-full h-full object-cover" alt="TPE 1" />
          </div>
        </div>

        {/* Second Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 mx-auto max-w-7xl bg-teal-500 px-4 sm:px-6 pb-4 gap-4">
          <div className="col-span-1 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={tpe2}
              alt="TPE 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-2 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl p-4">
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

      <Industries/>

      <WhyChooseUs/>

      <div className="flex justify-center pb-10 bg-teal-100">
        <button className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-lg px-5 py-2.5 text-center">
          <Link to="/contact">Contact Us {"->"}</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
