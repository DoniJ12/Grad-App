import React from 'react';
import Header from './Header';
import { FaTwitter, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen p-5">
      <Header />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
        <p className="text-gray-600">Reach us at the sample address below:</p>
        <p className="mt-2">1234 Example Street, City, Country</p>
        <p>+123 456 7890</p>
        <div className="flex space-x-4 mt-5">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
            <FaLinkedin size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">
            <FaInstagram size={30} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
            <FaTelegram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
