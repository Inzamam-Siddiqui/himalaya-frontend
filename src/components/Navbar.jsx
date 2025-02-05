import { NavLink, useNavigate, Link } from "react-router-dom";
import hplogo from "../assets/logos/hplogo.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-20 bg-transparent backdrop-blur-sm fixed px-6 py-4 flex justify-evenly items-center w-full z-10">
      <div>
        <img
          onClick={() => navigate("/")}
          src={hplogo}
          alt="Logo"
          className="h-20 rounded-2xl cursor-pointer"
        />
      </div>

      {/* Desktop Menu - Hidden on Medium & Small Screens */}
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
              {[
                { label: "uPVC Door and Window Gaskets", path: "/products/1" },
                {
                  label:
                    "Premium Aluminum Door, Window, and Facade System Gaskets & Seals",
                  path: "/products/2",
                },
                { label: "System Window Gaskets", path: "/products/8" },
                {
                  label: "Slim Partition Profiles and Gaskets",
                  path: "/products/6",
                },
                {
                  label: "Partition Profiles and Gaskets",
                  path: "/products/7",
                },
                { label: "Pipe Seals & Gaskets", path: "/products/3" },
                { label: "Luggage Seals and Gaskets", path: "/products/5" },
                { label: "Electric Panel Gaskets", path: "/products/9" },
                { label: "Cover Gaskets & Seals", path: "/products/4" },
                { label: "Customizable Gaskets & Seals", path: "/products/10" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
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

      {/* Desktop Contact Button - Hidden on Medium & Small Screens */}
      <div className="hidden lg:block">
        <Link to="/contact">
          <button className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button - Visible Only on Small & Medium Screens */}
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
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu - Visible Only on Small & Medium Screens */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-10 lg:hidden">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <NavLink
              to="/"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/products"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/sustainability"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              SUSTAINABILITY
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
