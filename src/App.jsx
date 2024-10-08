import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ImageUploader from './ImageUploader';
import Profile from './Profile'; // Import Profile

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/profile" element={<Profile />} /> {/* Add Profile Route */}
      </Routes>
    </Router>
  );
}

export default App;
