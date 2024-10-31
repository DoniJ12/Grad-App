// HomePage.jsx
import React, { useState } from 'react';
import Header from './Header';

const HomePage = ({ imageStacks }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Welcome to the Gallery</h1>
      {imageStacks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageStacks.map((stack, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4">
              {/* Thumbnail or Stack Title */}
              <div onClick={() => toggleExpand(index)} className="cursor-pointer">
                <img
                  src={stack.images[0].url}
                  alt="Stack thumbnail"
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <p className="text-center font-semibold">{stack.quote}</p>
              </div>

              {/* Expandable Section */}
              {expandedIndex === index && (
                <div className="mt-2">
                  {stack.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image.url}
                      alt={`Image ${imgIndex}`}
                      className="w-full h-32 object-cover rounded-md mb-2 cursor-pointer"
                      onClick={() => window.open(image.url, '_blank')}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};

export default HomePage;
