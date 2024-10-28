import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 py-2 bg-gray-100 border-b-2 border-gray-300">
      <div className="text-lg font-bold text-gray-700">
        <h1>GCGALL</h1>
      </div>
      <nav className="flex items-center">
        <ul className="flex w-full space-x-2">
          <li>
            <Link to="/" className="block px-4 py-2 text-center font-semibold uppercase bg-gray-700 text-white rounded hover:bg-white hover:text-gray-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/upload" className="block px-4 py-2 text-center font-semibold uppercase bg-gray-700 text-white rounded hover:bg-white hover:text-gray-700 transition">
              Image Uploader
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block px-4 py-2 text-center font-semibold uppercase bg-gray-700 text-white rounded hover:bg-white hover:text-gray-700 transition">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block px-4 py-2 text-center font-semibold uppercase bg-gray-700 text-white rounded hover:bg-white hover:text-gray-700 transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
