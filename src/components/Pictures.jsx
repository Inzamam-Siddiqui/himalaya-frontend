const Pictures = () => {
  return (
    <div>
      <section className="bg-teal-100 py-20 ">
      <div className="flex max-w-7xl mx-auto">
      {/* First Column */}
      <div className="text-base flex-grow-[3] bg-gray-200 p-4 text-center">
      <img
              src="https://via.placeholder.com/200"
              alt="Image 01"
              className="absolute inset-0 w-full h-full object-cover"
            />
      </div>

      {/* Second Column */}
      <div className="text-base flex-grow-[7] bg-gray-300 p-4 text-center">
      <img
              src="https://via.placeholder.com/200"
              alt="Image 01"
              className="absolute inset-0 w-full h-full object-cover"
            />
      </div>

      {/* Third Column */}
      <div className="text-base flex-grow-[3] bg-gray-200 p-4 text-center">
      <img
              src="https://via.placeholder.com/200"
              alt="Image 01"
              className="absolute inset-0 w-full h-full object-cover"
            />
      </div>
    </div>
    <div className="flex max-w-7xl mx-auto">
      {/* First Column */}
      <div className="text-base flex-grow-[7] bg-gray-200 p-4 text-center">
        01
      </div>

      {/* Second Column */}
      <div className="text-base flex-grow-[3] bg-gray-300 p-4 text-center">
        02
      </div>

      {/* Third Column */}
      <div className="text-base flex-grow-[7] bg-gray-200 p-4 text-center">
        03
      </div>
    </div>
      </section>
    </div>
  );
};

export default Pictures;
