import image7 from "../assets/bgimages/image7.jpg";
import { FaHandshake } from "react-icons/fa";

const AboutSection = () => {
  const shopOpenedYear = 2000; // Replace with the year your shop opened
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
          <h1 className="text-xl text-teal-800 font-semibold mb-1">About Us</h1>
          <h2 className="mb-5 text-2xl text-teal-500  font-bold">
            Your Trusted Partner for Extrusion Products!
          </h2>
          <h3 className="font-thin text- mb-6">Himalaya Plast Co.</h3>

          <p className="text-gray-600">
            At Himalaya Plast, we take pride in being a leading manufacturer of
            UPVC gaskets, delivering precision-engineered sealing solutions for
            diverse industries. Since our inception, we have consistently driven
            innovation, sustainability, and customer-centricity to set new
            benchmarks in gasket manufacturing. Our products are designed for
            superior performance while contributing to environmental
            sustainability, making us a trusted partner for businesses that
            value both quality and responsibility.
          </p>
          <div className="flex gap-4 pt-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Signature"
              className="object-cover"
            />
            <h1 className="pt-10">Gulam Kibria Siddiqui <br/>- Founder & CEO</h1>
            
          </div>
        </div>

        {/* Card 3 */}
        <div className=" pt-20 p-3">
          <h1 className="text-9xl font-semibold text-gray-800">{shopAge}</h1>
          <h3 className="text-xl font-bold mb-10">
            Years of experience resulting from continuous useful work.
          </h3>
          <div className="rounded-lg bg-teal-400 p-4 shadow-xl h-[24rem]">
            <div>
              <FaHandshake className="w-24 h-24 text-teal-100" />
            </div>
            <h2 className="text-xl font-bold mb-2">Fair Prices</h2>
            <p className="">
              The prices offered by us are not fixed and vary based on your
              needs and the services provided, so that we can meet the needs of
              many customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
