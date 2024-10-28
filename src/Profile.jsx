import React, { useState } from 'react';
import Header from './Header';

const Profile = ({ imageStacks, updateImageStacks }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [newQuote, setNewQuote] = useState('');

  // Handle deleting an image from a stack
  const deleteImage = (stackIndex, imageIndex) => {
    const updatedStacks = imageStacks.map((stack, i) =>
      i === stackIndex
        ? { ...stack, images: stack.images.filter((_, j) => j !== imageIndex) }
        : stack
    ).filter(stack => stack.images.length > 0);
    updateImageStacks(updatedStacks);
  };

  // Handle editing a quote for a stack
  const editQuote = (index) => {
    setEditIndex(index);
    setNewQuote(imageStacks[index].quote || '');
  };

  const saveQuote = (index) => {
    const updatedStacks = imageStacks.map((stack, i) =>
      i === index ? { ...stack, quote: newQuote } : stack
    );
    updateImageStacks(updatedStacks);
    setEditIndex(null);
    setNewQuote('');
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setNewQuote('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageStacks.length > 0 ? (
            imageStacks.map((stack, stackIndex) => (
              <div key={stackIndex} className="bg-white p-4 rounded-lg shadow">
                <div className="relative">
                  <img
                    src={stack.images[0]}
                    alt="Thumbnail"
                    className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  />
                  {editIndex === stackIndex ? (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={newQuote}
                        onChange={(e) => setNewQuote(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full"
                      />
                      <div className="flex mt-2">
                        <button
                          onClick={() => saveQuote(stackIndex)}
                          className="mr-2 bg-green-500 text-white p-2 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-red-500 text-white p-2 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-gray-700">
                      {stack.quote}
                      <button
                        onClick={() => editQuote(stackIndex)}
                        className="ml-2 text-blue-500 underline"
                      >
                        Edit
                      </button>
                    </p>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {stack.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <img
                        src={image}
                        alt={`Image ${imageIndex + 1}`}
                        className="w-full h-24 object-cover rounded cursor-pointer"
                      />
                      <button
                        onClick={() => deleteImage(stackIndex, imageIndex)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">No Images</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
