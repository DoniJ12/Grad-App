import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ImageUploader from './ImageUploader';
import Profile from './Profile';
import ContactUs from './ContactUs'; // Import ContactUs page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Add Contact Us route */}
      </Routes>
    </Router>
  );
};

export default App;
