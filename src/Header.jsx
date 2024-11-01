// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">My App</Link>
      </h1>
      <nav className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/" className="hover:bg-gray-600 p-2 rounded">Home</Link>
            <Link to="/upload" className="hover:bg-gray-600 p-2 rounded">Upload</Link>
            <Link to="/profile" className="hover:bg-gray-600 p-2 rounded">Profile</Link>
            <Link to="/contact" className="hover:bg-gray-600 p-2 rounded">Contact Us</Link>
            <button onClick={onLogout} className="bg-red-500 p-2 rounded hover:bg-red-600">Logout</button>
          </>
        ) : (
          <>
          
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
