import { NavLink, useNavigate, Link } from "react-router-dom";
import hplogo from "../assets/logos/hplogo.png";
import { useState } from "react";

const productList = [
  { label: "uPVC Door and Window Gaskets", slug: "upvc-door-and-window-gaskets" },
  { label: "Premium Aluminum Door, Window, and Facade System Gaskets & Seals",     slug: "premium-aluminum-door-window-and-facade-system-gaskets-and-seals",  },
  { label: "System Window Gaskets", slug: "system-window-gaskets" },
  { label: "Slim Partition Profiles and Gaskets", slug: "slim-partition-profiles-and-gaskets" },
  { label: "Partition Profiles and Gaskets", slug: "partition-profiles-and-gaskets" },
  { label: "Pipe Seals & Gaskets", slug: "pipe-seals-and-gaskets" },
  { label: "Luggage Seals and Gaskets", slug: "luggage-seals-and-gaskets" },
  { label: "Electric Panel Gaskets", slug: "electric-panel-gaskets" },
  { label: "Cover Gaskets & Seals", slug: "cover-gaskets-and-seals" },
  { label: "Customizable Gaskets & Seals", slug: "customizable-gaskets-and-seals" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-20 bg-transparent backdrop-blur-sm fixed px-6 py-4 flex justify-between items-center w-full z-10">
      <div>
        <img
          onClick={() => navigate("/")}
          src={hplogo}
          alt="Logo"
          className="h-20 rounded-2xl cursor-pointer"
        />
      </div>

      <ul className="hidden lg:flex gap-10 relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-teal-700 font-semibold" : "text-gray-800"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-teal-700 font-semibold" : "text-gray-800"
          }
        >
          About Us
        </NavLink>

        {/* PRODUCTS Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
        >
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-teal-700 font-semibold" : "text-gray-800"
            }
          >
            Products
          </NavLink>
          {showProducts && (
            <div className="absolute w-[22rem] left-0 bg-white border border-gray-300 shadow-xl rounded-2xl py-2 z-10">
              {productList.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(`/products/${item.slug}`)}
                  className="flex items-center w-full mb-2 px-4 py-2 text-left hover:bg-teal-500 hover:text-white text-gray-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <NavLink
          to="/sustainability"
          className={({ isActive }) =>
            isActive ? "text-teal-700 font-semibold" : "text-gray-800"
          }
        >
          Sustainability
        </NavLink>
      </ul>

      <div className="hidden lg:block">
        <Link to="/contact">
          <button className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h26M4 12h26M4 18h26"
            }
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-10 lg:hidden">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <NavLink to="/" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
              HOME
            </NavLink>
            <NavLink to="/about" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
              ABOUT US
            </NavLink>
            <NavLink to="/products" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
              PRODUCTS
            </NavLink>
            <NavLink to="/sustainability" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
              SUSTAINABILITY
            </NavLink>
            <NavLink to="/contact" className="text-gray-800" onClick={() => setIsMenuOpen(false)}>
              CONTACT US
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
