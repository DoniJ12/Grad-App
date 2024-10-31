// SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      // Add signup logic here
      alert("Account created successfully. Please log in.");
      navigate('/login');
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 shadow-md rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-6 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Sign Up
        </button>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
