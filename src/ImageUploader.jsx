import React, { useState, useEffect } from 'react';

const ImageUploader = () => {
  const [imageData, setImageData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Load the image and quote data from localStorage on component mount
  useEffect(() => {
    const storedImageData = JSON.parse(localStorage.getItem('submittedImageData'));
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  // Function to handle multiple image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImageData = [];

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        newImageData.push({ src: base64Image, quote: '' });

        // Once all files are read, update the state
        if (newImageData.length === files.length) {
          const updatedImageData = [...imageData, ...newImageData];
          setImageData(updatedImageData);
        }
      };

      if (file) {
        reader.readAsDataURL(file); // Read each file as a data URL
      }
    });
  };

  // Function to handle the quote input
  const handleQuoteChange = (index, newQuote) => {
    const updatedImageData = imageData.map((item, i) => 
      i === index ? { ...item, quote: newQuote } : item
    );
    setImageData(updatedImageData);
  };

  // Handle submit to save images and quotes together
  const handleSubmit = () => {
    localStorage.setItem('submittedImageData', JSON.stringify(imageData));
    setSubmitted(true);
  };

  return (
    <div className="image-uploader">
      <h2>Upload Images and Add Quotes</h2>
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      {imageData.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
          {imageData.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`Uploaded ${index}`} style={{ width: '100%', height: 'auto' }} />
              <textarea
                placeholder="Enter a quote for this image"
                value={image.quote || ''}
                onChange={(e) => handleQuoteChange(index, e.target.value)}
                style={styles.textarea}
              />
            </div>
          ))}
        </div>
      )}
      <button onClick={handleSubmit} style={styles.submitButton}>
        Submit Images and Quotes
      </button>
      {submitted && <p style={styles.message}>Images and quotes submitted!</p>}
    </div>
  );
};

const styles = {
  submitButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  message: {
    marginTop: '10px',
    color: 'green',
  },
  textarea: {
    width: '100%',
    marginTop: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  }
};

export default ImageUploader;
