import React from 'react';
import Header from './Header';

const Profile = () => {
  return (
    <div className="min-h-screen p-5">
      <Header />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-5">Profile Page</h1>
        <p className="text-gray-600">User details and profile information can be displayed here.</p>
        {/* Add more profile content here */}
      </div>
    </div>
  );
};

export default Profile;
