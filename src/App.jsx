import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ImageUploader from './ImageUploader';
import Profile from './Profile';
import ContactUs from './ContactUs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload" element={<ImageUploader />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
