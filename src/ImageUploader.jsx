// ImageUploader.js
import React, { useState } from 'react';
import Header from './Header';

const ImageUploader = ({ addImageStack }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [quote, setQuote] = useState('');

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileReaders = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file); // Convert to Base64
      });
    });

    Promise.all(fileReaders).then((base64Images) => {
      setSelectedImages(base64Images);
    });
  };

  const handleSubmit = () => {
    if (selectedImages.length > 0) {
      addImageStack({ images: selectedImages, quote });
      setSelectedImages([]);
      setQuote('');
      alert("Images uploaded successfully!"); // Popup notification
    } else {
      alert("Please select at least one image.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Upload Images</h1>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Add a quote for these images"
          className="p-2 border border-gray-300 rounded w-full mb-4"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
