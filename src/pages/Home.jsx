import CustomCarousel from "../components/CustomCarousel";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import KeyProducts from "../components/KeyProducts";
import { FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <CustomCarousel />

      <AboutSection />

      <KeyProducts />

      <section className="bg-teal-100 py-20">
        <div className="grid grid-rows-2 mx-auto max-w-7xl bg-gray-200 grid-flow-col h-[20rem] p-4 gap-4">
          <div className="row-span-2 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/200"
              alt="Image 01"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
              <span className="text-white text-4xl font-bold">01</span>
            </div>
          </div>
          <div className="col-span-2 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/400"
              alt="Image 02"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
              <span className="text-white text-4xl font-bold">02</span>
            </div>
          </div>

          {/* Middle container for 3, 6, and 7 */}
          <div className="col-span-2 row-span-2 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/600"
              alt="Image 03, 06, 07"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
              <span className="text-white text-4xl font-bold">03, 06, 07</span>
            </div>
          </div>

          <div className="row-span-3 col-span-1 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/200"
              alt="Image 04"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
              <span className="text-white text-4xl font-bold">04</span>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 mx-auto max-w-7xl bg-gray-200 grid-flow-col h-[20rem] p-4 gap-4">
          <div className="row-span-3 col-span-1 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/200"
              alt="Image 05"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
              <span className="text-white text-4xl font-bold">05</span>
            </div>
          </div>
          <div className="row-span-3 col-span-1 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/200"
              alt="Image 08"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50">
              <span className="text-white text-4xl font-bold">08</span>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[40rem] bg-gray-100 py-20">
        <h1 className="text-3xl font-bold text-center text-teal-800 mb-2">
          Industries We Serve
        </h1>
        <h2 className="text-lg max-w-3xl mx-auto font-semibold text-center text-teal-500 mb-6">
          Himalaya Plast’s versatile gaskets are designed for various
          industries, offering high-performance sealing solutions
        </h2>

        <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-xl">
          <div className="border-teal-800 border-4 h-[22rem] p-3">
            <img src="" alt=""></img>
            <h1 className="text-2xl font-semibold"></h1>
            <h4 className=""></h4>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">01</h1>
            <h4 className="text-2xl font-semibold text-white">
              {" "}
              Industrial Applications
            </h4>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">02</h1>
            <h4 className="text-2xl font-semibold text-white">
              Construction & Architecture
            </h4>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">03</h1>
            <h4 className="text-2xl font-semibold text-white">
              Custom Projects
            </h4>
          </div>
        </div>
      </section>

      <section className="p-20 bg-teal-100">
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
                <strong>Eco-Friendly Innovation:</strong> Use of recyclable
                materials like TPE reduces environmental impact.
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
                <strong>Certified Excellence:</strong> ISO 14001 and ISO 45001
                certifications validate their commitment to sustainability and
                quality.
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

      <div className="flex justify-center pb-5 bg-teal-100">
        <button className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
          <Link to="/contact">Contact Us {"->"}</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
