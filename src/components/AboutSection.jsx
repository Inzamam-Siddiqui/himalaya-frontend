import image7 from "../assets/bgimages/image7.jpg";
import { FaHandshake, FaLeaf } from "react-icons/fa";

const AboutSection = () => {
  const shopOpenedYear = 2000;
  const currentYear = new Date().getFullYear();
  const shopAge = currentYear - shopOpenedYear;

  return (
    <section className="p-6 bg-teal-100">
      <div className="my-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 rounded-xl">
        {/* Card 1 */}
        <div className="bg-teal-100 p-3 rounded-lg">
          <div className="flex justify-center mb-4">
            <img
              src={image7}
              alt="Data Protection"
              className="h-[30rem] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className=" p-3">
          <h2 className="text-xl text-teal-800 font-semibold mb-1">About Us</h2>
          <h2 className="mb-5 text-2xl text-teal-500  font-bold">
            Your Trusted Partner for Extrusion Products!
          </h2>
          <h3 className="font-thin text- mb-6">Himalaya Plast Co.</h3>

          <p className="text-gray-600">
            At Himalaya Plast, we take pride in being a leading manufacturer of
            uPVC gaskets, delivering precision-engineered sealing solutions for
            diverse industries. Since our inception, we have consistently driven
            innovation, sustainability, and customer-centricity to set new
            benchmarks in gasket manufacturing. Our products are designed for
            superior performance while contributing to environmental
            sustainability, making us a trusted partner for businesses that
            value both quality and responsibility.
          </p>
          <div className="flex gap-4 pt-4">
            {/* <img
              src="https://via.placeholder.com/100"
              alt="Signature"
              className="object-cover"
            /> */}
            <h2 className="pt-10">
              Gulam Kibria Siddiqui <br />- Founder & MD
            </h2>
          </div>
        </div>

        <div className="pt-20 p-3">
          <h2 className="text-9xl font-semibold text-gray-800">{shopAge}</h2>
          <h3 className="text-xl font-bold mb-10">
            Years of experience resulting from continuous useful work.
          </h3>

          <div className="relative rounded-lg bg-teal-400 p-4 shadow-xl h-[24rem]">
            <div>
              <FaHandshake className="w-24 h-24 text-teal-100" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Crafted for You, Backed by Commitment
            </h2>
            <p>
              Each product we create is tailored to your needs, designed with
              intention and delivered with care. We don’t just aim to meet
              expectations—we strive to exceed them, every single time.
            </p>
            {/* Certifications Hover Box */}
            <div className="absolute -bottom-4 right-8 group z-10">
              <div className="bg-teal-800 text-white px-4 py-2 rounded cursor-pointer relative hover:scale-100">
                At Himalaya Plast, quality isn’t a claim — it’s certified.
                {/* Hover Content */}
                <div className="absolute top-full right-0 mt-3 w-72 bg-white text-teal-900 rounded-lg shadow-lg scale-0 group-hover:scale-100 origin-top-left transition-transform duration-300 p-4 z-20">
                  <h4 className="font-bold mb-2 text-teal-700 text-center">
                    🏅 Certifications
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>🏅 ISO 9001:2015</li>
                    <li>🌱 ISO 14001</li>
                    <li>🛡 ISO 45001</li>
                    <li>⚡ ISO 50001</li>
                    <li>🚫 RoHS Compliant</li>
                    <li>☀ UV Resistant</li>
                    <li className="flex items-center space-x-1">
                      <FaLeaf className="text-green-700 size-3" />
                      <span>Lead-Free</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
