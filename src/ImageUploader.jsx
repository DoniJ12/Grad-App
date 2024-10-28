import React, { useState } from 'react';
import Header from './Header';

const ImageUploader = ({ addImageStack }) => {
  const [images, setImages] = useState([]);
  const [quote, setQuote] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setImages(fileURLs);
  };

  const handleSubmit = () => {
    if (images.length > 0) {
      addImageStack({ images, quote });
      setImages([]);
      setQuote("");
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center p-8">
        <h2 className="text-3xl font-semibold mb-6">Upload Images</h2>
        <input 
          type="file" 
          multiple 
          onChange={handleImageUpload} 
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          placeholder="Enter quote" 
          value={quote} 
          onChange={(e) => setQuote(e.target.value)} 
          className="mb-4 p-2 w-full max-w-md border border-gray-300 rounded"
        />
        <button 
          onClick={handleSubmit} 
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
        {showPopup && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
            Images uploaded successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
