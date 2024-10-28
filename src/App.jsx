// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ImageUploader from './ImageUploader';
import Profile from './Profile';
import ContactUs from './ContactUs';

const App = () => {
  const [imageStacks, setImageStacks] = useState([]);

  const addImageStack = (stack) => {
    setImageStacks([...imageStacks, stack]);
  };

  const updateImageStacks = (updatedStacks) => {
    setImageStacks(updatedStacks);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage imageStacks={imageStacks} />} />
      <Route path="/upload" element={<ImageUploader addImageStack={addImageStack} />} />
      <Route path="/profile" element={<Profile imageStacks={imageStacks} updateImageStacks={updateImageStacks} />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
