import { useState } from "react";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fd76397b-5a95-4f73-b421-b13e6abdb121");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        setStatusMessage("Form submitted successfully!");
        event.target.reset(); // Reset form after successful submission
      } else {
        setStatusMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl p-8 bg-white border border-gray-100 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        Contact Us
      </h2>
      <p className="text-md text-gray-800 my-4 text-center">
        Fill out the form below and our team will get back to you within 24
        hours.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-100 text-gray-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-100 text-gray-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-100 text-gray-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-100 text-gray-700"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Send Inquiry
      </button>

      {statusMessage && (
        <p className="mt-4 text-center text-sm font-semibold text-gray-700">
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
