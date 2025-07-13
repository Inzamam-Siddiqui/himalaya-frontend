import hplogo from "../assets/logos/hplogo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-teal-500 to-90% via-teal-700 to-teal-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/*----------- First Section (Logo and About) -----------*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img className="mb-5 w-40" src={hplogo} alt="Cygnus Logo" />
            <p className="leading-6">
              Himalaya Plast is Manufacturer of architectural window gasket
              since 1998.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xl font-medium mb-4">COMPANY</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/" className="hover:text-teal-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-teal-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-teal-300 transition">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="hover:text-teal-300 transition"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <p className="text-xl font-medium mb-4">LINKS</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="hover:text-teal-300 transition">Careers</a>
              </li>
              <li>
                <a className="hover:text-teal-300 transition">Terms</a>
              </li>
              <li>
                <a className="hover:text-teal-300 transition">Privacy</a>
              </li>
              <li>
                <a className="hover:text-teal-300 transition">Cookies</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xl font-medium mb-4">FOLLOW US</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:info@himalayaplast.com"
                  className="hover:text-blue-300 transition"
                >
                  info@himalayaplast.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919323700157"
                  className="text-white-500 hover:underline"
                >
                  +91 93237 00157
                </a>
              </li>
              <li className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/18boex2m7K/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/HimalayaPlast?t=tnA_v8Kv3yUpc848955tDg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/himalaya.plast?igsh=MW5rdjU0ZjcyeXNydg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/himalayaplast/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*----------- Footer Bottom Section (Copyright) -----------*/}
        <div className="py-5 mt-5 border-t border-teal-700">
          <p className="text-sm text-center">
            Copyright 2024 @ Himalaya Plast - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
