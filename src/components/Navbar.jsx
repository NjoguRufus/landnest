import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMapMarkedAlt, FaFileAlt, FaCut, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/properties", icon: <FaMapMarkedAlt />, text: "Properties" },
    { to: "/title-deeds", icon: <FaFileAlt />, text: "Title Deeds" },
    { to: "/land-division", icon: <FaCut />, text: "Land Division" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">LandNest</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;