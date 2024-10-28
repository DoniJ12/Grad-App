import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';

const HomePage = ({ imageStacks }) => {
  const [expandedStackIndex, setExpandedStackIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleExpandStack = (index) => {
    setExpandedStackIndex(expandedStackIndex === index ? null : index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageStacks.length > 0 ? (
            imageStacks.map((stack, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="relative">
                  <img
                    src={stack.images[0]}
                    alt="Thumbnail"
                    className="w-full h-48 object-cover rounded-lg cursor-pointer"
                    onClick={() => toggleExpandStack(index)}
                  />
                  <p className="mt-2 text-sm text-gray-700">{stack.quote}</p>
                </div>
                {expandedStackIndex === index && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {stack.images.map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt={`Image ${i + 1}`}
                        className="w-full h-24 object-cover rounded cursor-pointer"
                        onClick={() => openModal(image)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">No Images</p>
          )}
        </div>
      </div>

      {/* Modal for viewing individual images */}
      <Modal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default HomePage;
