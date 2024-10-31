// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignUpPage';
import ImageUploader from './ImageUploader';
import Profile from './Profile';
import ContactUs from './ContactUs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageStacks, setImageStacks] = useState([]);

  // Load initial data from localStorage
  useEffect(() => {
    const storedStacks = JSON.parse(localStorage.getItem('imageStacks')) || [];
    setImageStacks(storedStacks);

    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedLoginStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const addImageStack = (newStack) => {
    const updatedStacks = [...imageStacks, newStack];
    setImageStacks(updatedStacks);
    localStorage.setItem('imageStacks', JSON.stringify(updatedStacks));
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Public routes */}
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          // Protected routes
          <>
            <Route path="/" element={<HomePage imageStacks={imageStacks} />} />
            <Route path="/upload" element={<ImageUploader addImageStack={addImageStack} />} />
            <Route path="/profile" element={<Profile imageStacks={imageStacks} setImageStacks={setImageStacks} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
