// Profile.js
import React from 'react';
import Header from './Header';

const Profile = ({ imageStacks, updateImageStacks }) => {
  const deleteStack = (indexToDelete) => {
    const updatedStacks = imageStacks.filter((_, index) => index !== indexToDelete);
    updateImageStacks(updatedStacks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>
        {imageStacks.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          imageStacks.map((stack, index) => (
            <div key={index} className="mb-6 border p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <p className="italic">{stack.quote}</p>
                <button
                  onClick={() => deleteStack(index)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete Stack
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {stack.images.map((image, i) => (
                  <img key={i} src={image} alt={`Image ${i + 1}`} className="w-full h-auto" />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
