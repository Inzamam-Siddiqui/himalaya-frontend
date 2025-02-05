import CustomCarousel from "../components/CustomCarousel";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import KeyProducts from "../components/KeyProducts";
import { FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import image1 from "../assets/bgimages/image1.jpg";
import image2 from "../assets/bgimages/image2.jpg";
import image3 from "../assets/bgimages/image3.jpg";
import image4 from "../assets/bgimages/image4.jpg";
import image5 from "../assets/bgimages/image8.jpg";
import image6 from "../assets/bgimages/image7.jpg";

const Home = () => {
  return (
    <div className="">
      <CustomCarousel />

      <AboutSection />

      <KeyProducts />

      <section className="bg-teal-100 py-20">
        {/* First Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-2 mx-auto max-w-7xl bg-teal-500 h-[30rem] p-4 gap-4">
          {/* Large left image spanning both rows */}
          <div className="col-span-1 row-span-2 bg-teal-200 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={image1}
              alt="Image 01"
              className="absolute w-full h-full object-fit"
            />
          </div>

          {/* Top-right image */}
          <div className="col-span-3 row-span-1 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={image2}
              alt="Image 02"
              className="absolute w-full h-full object-cover"
            />
          </div>

          {/* Large center image spanning both columns */}
          <div className="col-span-2 row-span-2 bg-red-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={image3}
              alt="Image 03"
              className="absolute w-full h-full object-cover"
            />
          </div>

          {/* Tall right image spanning both rows */}
          <div className="col-span-1 row-span-2 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={image4}
              alt="Image 04"
              className="absolute inset-0 w-full h-full object-fit"
            />
          </div>
        </div>

        {/* Second Grid Layout */}
        <div className="grid grid-cols-3 grid-rows-2 mx-auto max-w-7xl bg-teal-500 h-[20rem] px-4 pb-4 gap-4">
          {/* Left large image */}
          <div className="col-span-1 row-span-2 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={image5}
              alt="Image 05"
              className="absolute w-full h-full object-fit"
            />
          </div>

          {/* Right-side image (Adjusted col-span for proper alignment) */}
          <div className="col-span-2 row-span-2 bg-purple-500 relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={image6}
              alt="Image 08"
              className="absolute w-full h-full object-fit"
            />
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
          <div
            className="border-teal-800 border-4 h-[22rem] p-3 bg-cover bg-center w-72"
            style={{ backgroundImage: `url(${image3})` }}
          >
            <h1 className="text-2xl font-semibold"></h1>
            <h4 className=""></h4>
          </div>
          <div className="bg-gradient-to-bl from-teal-500 via-teal-600 via-60% h-[22rem] rounded-xl p-3">
            <img src="" alt=""></img>
            <h1 className="text-8xl text-gray-200">01</h1>
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
            <h1 className="text-8xl text-gray-200">02</h1>
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
            <h1 className="text-8xl text-gray-200">03</h1>
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

      <div className="flex justify-center pb-10 bg-teal-100">
        <button className="text-white bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-lg px-5 py-2.5 text-center">
          <Link to="/contact">Contact Us {"->"}</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
