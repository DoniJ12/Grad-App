import React, { useState, useEffect } from 'react';
import Header from './Header'; // Import the Header

const ImageUploader = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const storedImageData = JSON.parse(localStorage.getItem('submittedImageData'));
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImageData = [];

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        newImageData.push({ src: base64Image, quote: '' });

        if (newImageData.length === files.length) {
          const updatedImageData = [...imageData, ...newImageData];
          setImageData(updatedImageData);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  };

  const handleQuoteChange = (index, newQuote) => {
    const updatedImageData = imageData.map((item, i) =>
      i === index ? { ...item, quote: newQuote } : item
    );
    setImageData(updatedImageData);
  };

  // Remove an image and its quote, and update localStorage
  const handleRemoveImage = (index) => {
    const updatedImageData = imageData.filter((_, i) => i !== index);
    setImageData(updatedImageData);
    localStorage.setItem('submittedImageData', JSON.stringify(updatedImageData)); // Update localStorage immediately
  };

  const handleSubmit = () => {
    localStorage.setItem('submittedImageData', JSON.stringify(imageData));
  };

  return (
    <div>
      <Header /> {/* Use the Header */}
      <div className="image-uploader">
        <h2>Upload Images and Add Quotes</h2>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        {imageData.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
            {imageData.map((image, index) => (
              <div key={index} style={styles.imageContainer}>
                <img src={image.src} alt={`Uploaded ${index}`} style={styles.image} />
                <textarea
                  placeholder="Enter a quote for this image"
                  value={image.quote || ''}
                  onChange={(e) => handleQuoteChange(index, e.target.value)}
                  style={styles.textarea}
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <button onClick={handleSubmit} style={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
    position: 'relative',
    paddingBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  textarea: {
    marginTop: '10px',
    padding: '10px',
    width: '100%',
  },
  removeButton: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    borderRadius: '5px',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
};

export default ImageUploader;
