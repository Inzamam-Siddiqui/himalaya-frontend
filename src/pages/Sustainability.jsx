import planet2 from "../assets/bgimages/planet2.jpg";
import SustainabilitySection from "../components/SustainabilitySec";
import EnvironmentSection from "../components/EnvironmentSection";
import Approach from "../components/Approach";

const Sustainability = () => {
  return (
    <div className="">

      <SustainabilitySection/>

      <EnvironmentSection/>

      <Approach/>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6">
              Investing in the Planet’s Future
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our investment in sustainable practices extends beyond our
              immediate business needs; it is a long-term commitment to the
              future of the planet. By continuously improving our processes,
              adopting innovative technologies, and collaborating with partners
              who share our values, we aim to protect natural resources and
              preserve ecosystems for generations to come.
            </p>
          </div>

          {/* Image + Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={planet2}
                alt="Sustainable Future"
                className="rounded-2xl shadow-md w-full object-cover"
              />
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Through these efforts, we are not just protecting the
                environment; we are investing in the future of our business and
                the well-being of the planet. At Himalaya Plast, we believe that
                sustainability is not just good for the environment—it’s
                essential for a thriving, successful future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
