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
    <div className="min-h-screen p-5">
      <Header />
      <div className="flex flex-col items-center mt-10">
        <input type="file" multiple onChange={handleImageUpload} className="mb-5" />
        <input 
          type="text" 
          placeholder="Enter quote" 
          value={quote} 
          onChange={(e) => setQuote(e.target.value)} 
          className="mb-5 p-2 border rounded"
        />
        <button 
          onClick={handleSubmit} 
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
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
