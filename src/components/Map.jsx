const Map = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.004698718957!2d72.8922616!3d19.1074498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8736f8ffed5%3A0xa3a05dbc1da26e17!2sHimalaya%20Plast!5e0!3m2!1sen!2sin!4v1738518321347!5m2!1sen!2sin";

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
        
      </div>
      <p className="text-xl font-semibold text-gray-800 mt-4">
      We’re based in Mumbai, and work with clients across India and Abroad.</p>
    </div>
  );
};

export default Map;
