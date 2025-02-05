import { FaLeaf, FaRecycle, FaCloudSun, FaHandshake, FaUsers } from "react-icons/fa"
// import planet1 from "../assets/bgimages/planet1.jpg"
import planet2 from "../assets/bgimages/planet2.jpg"
// import planet3 from "../assets/bgimages/planet3.jpg"
import zero2 from "../assets/bgimages/zero2.jpg"


const Sustainability = () => {
  return (
    <div className="">
       <section className="h-auto bg-teal-100 pt-40 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-900">
            Sustainability and Environmental Commitment
          </h1>
          <p className="mt-4 text-lg max-w-4xl mx-auto text-teal-700">
            At Himalaya Plast, we embrace sustainability through innovative and
            responsible manufacturing practices. Our mission is to deliver
            high-quality, eco-friendly products that meet our clients evolving
            needs while safeguarding the environment.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">
            Recyclability in Closed-Loop Systems
          </h2>
          <p className="text-teal-700 text-lg">
            We use thermoplastic elastomers (TPE) in manufacturing gaskets,
            offering ideal properties for performance and sustainability.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-medium text-teal-800 mb-3">
              Key Properties of TPE:
            </h3>
            <ul className="list-disc list-inside text-teal-700 space-y-2">
              <li>
                <strong>Versatile & Flexible:</strong> Adaptable to a variety of
                applications.
              </li>
              <li>
                <strong>Recyclable:</strong> Can be reprocessed multiple times
                without quality loss.
              </li>
              <li>
                <strong>Safe & High-Performance:</strong> Durable and safe for
                various uses.
              </li>
              <li>
                <strong>Flame Retardant & Chemical Resistant:</strong> Enhanced
                protection for various environments.
              </li>
              <li>
                <strong>Aesthetic Flexibility:</strong> Available in transparent
                and colored forms.
              </li>
            </ul>
          </div>
          <p className="mt-6 text-teal-700 text-lg">
            These features make TPE a superior alternative to traditional
            materials like vulcanized rubber, especially in window and door
            sealing applications. With advanced co-extrusion capabilities, we
            further enhance design possibilities, providing tailored solutions
            for specific needs.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Zero Waste and Minimal Carbon Footprint */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zero Waste and Minimal Carbon Footprint
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Himalaya Plast, we prioritize sustainability at every step of
              the production process. The thermoplastic nature of TPE allows us
              to reprocess all waste materials in-house, ensuring that no
              product is wasted and that our carbon footprint is minimized. By
              reusing waste material, we contribute to a circular economy,
              reducing the need for virgin resources and minimizing
              environmental impact.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img
              src={zero2}
              alt="Zero Waste Concept"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Environmental Certifications and Accreditations */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Environmental Certifications and Accreditations
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in continuously improving our practices to align with
              global sustainability standards.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-3">
              <li>
                <strong>ISO 14001:</strong> Demonstrates our commitment to
                environmental responsibility through the implementation of an
                Environmental Management System (EMS), ensuring reduced waste,
                pollution, and energy consumption.
              </li>
              <li>
                <strong>ISO 45001:</strong> Reflects our dedication to
                occupational health and safety, protecting both employees and
                the environment.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:mr-8">
            <img
              src="https://via.placeholder.com/500"
              alt="Certifications and Accreditations"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-teal-100 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Our Approach to Sustainability */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-900 mb-6">
            Our Approach to Sustainability
          </h2>
          <p className="text-lg text-teal-700 leading-relaxed max-w-5xl mx-auto">
            For years, we have focused on reducing waste, lowering our carbon
            footprint, and enhancing the efficiency of our operations. By
            investing in advanced recycling technologies, improving raw material
            selection, and fostering a culture of sustainability within our
            organization, we have made significant strides in reducing
            environmental impact. Our sustainability efforts are not just about
            protecting the environment; they also contribute to the long-term
            success of our business, ensuring that we remain an industry leader
            in both innovation and responsibility.
          </p>
        </div>

        {/* Our Sustainability Commitments */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-200 p-4 rounded-full">
                <FaLeaf className="text-teal-800 text-3xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-800">
                  Energy, Water, and Material Conservation
                </h4>
                <p className="text-teal-700 leading-relaxed">
                  We are committed to reducing the consumption of energy, water,
                  and raw materials, ensuring that our production processes are
                  as efficient as possible.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-200 p-4 rounded-full">
                <FaRecycle className="text-teal-800 text-3xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-800">
                  Recycling Investment
                </h4>
                <p className="text-teal-700 leading-relaxed">
                  We actively encourage and invest in recycling initiatives to
                  ensure that waste is minimized, and materials are repurposed
                  to reduce the need for new resources.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-200 p-4 rounded-full">
                <FaCloudSun className="text-teal-800 text-3xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-800">
                  Carbon Footprint Reduction
                </h4>
                <p className="text-teal-700 leading-relaxed">
                  We aim to decrease CO2 emissions through the adoption of
                  energy-efficient technologies, improved manufacturing
                  processes, and more sustainable delivery methods.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-200 p-4 rounded-full">
                <FaHandshake className="text-teal-800 text-3xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-800">
                  Supplier Engagement
                </h4>
                <p className="text-teal-700 leading-relaxed">
                  We collaborate with our suppliers to encourage environmentally
                  responsible practices throughout the supply chain, ensuring
                  that sustainability is a shared responsibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-200 p-4 rounded-full">
                <FaUsers className="text-teal-800 text-3xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-800">
                  Staff Engagement
                </h4>
                <p className="text-teal-700 leading-relaxed">
                  We foster a culture of sustainability within our workforce,
                  empowering our employees to contribute to our environmental
                  goals through awareness programs and eco-friendly practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-6">
            Investing in the Planet’s Future
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our investment in sustainable practices extends beyond our immediate
            business needs; it is a long-term commitment to the future of the
            planet. By continuously improving our processes, adopting innovative
            technologies, and collaborating with partners who share our values,
            we aim to protect natural resources and preserve ecosystems for
            generations to come.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={planet2}
              alt="Sustainable Future"
              className="rounded-2xl shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through these efforts, we are not just protecting the environment;
              we are investing in the future of our business and the well-being
              of the planet. At Himalaya Plast, we believe that sustainability
              is not just good for the environment—it’s essential for a
              thriving, successful future.
            </p>
           
          </div>
        </div>
      </div>
    </section>
        </div>
  );
};

export default Sustainability;
