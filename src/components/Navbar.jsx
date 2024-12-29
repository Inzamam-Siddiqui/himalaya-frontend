import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="h-20 bg-transparent fixed px-6 py-4 flex justify-evenly items-center w-full z-10">
      <div>
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="h-20 rounded-2xl cursor-pointer"
        />
      </div>
      <ul className="flex gap-10 relative">
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
            <div className="absolute w-72 left-0 bg-white border border-gray-300 shadow-xl rounded-2xl py-2 z-10">
              {[
                { label: "UPVC Door and Window Gaskets" },
                { label: "Aluminium Door, Window and Facade Gasket & Seals" },
                { label: "Wooden Door and Window System Gaskets" },
                { label: "Roof Window Gaskets and Seals" },
                { label: "Luggage Seals and Gaskets" },
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
        <div className="relative">
          <NavLink
            to="/casestudies"
            className={({ isActive }) =>
              isActive ? "text-teal-700 font-semibold" : "text-gray-800"
            }
          >
            Case Studies
          </NavLink>
        </div>
        
      </ul>
      <button className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
        <Link to="/contact">Contact</Link>
      </button>
    </div>
  );
};

export default Navbar;
