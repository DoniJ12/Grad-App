import React, { useState, useEffect } from 'react';
import Header from './Header'; // Import Header

const ImageUploader = () => {
  const [imageData, setImageData] = useState([]);
  const [currentStack, setCurrentStack] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const storedImageData = JSON.parse(localStorage.getItem('submittedImageData'));
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImageData = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        newImageData.push(base64Image);

        if (newImageData.length === files.length) {
          setCurrentStack([...currentStack, ...newImageData]);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  };

  const handleSubmitStack = () => {
    if (currentStack.length > 0 && quote) {
      const newStack = { images: currentStack, quote };
      const updatedImageData = [...imageData, newStack];
      setImageData(updatedImageData);
      localStorage.setItem('submittedImageData', JSON.stringify(updatedImageData));
      setCurrentStack([]);
      setQuote('');
    }
  };

  return (
    <div>
      <Header /> {/* Use the Header */}
      <div className="image-uploader">
        <h2>Upload Images and Add a Quote for the Stack</h2>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

        {currentStack.length > 0 && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
              {currentStack.map((image, index) => (
                <div key={index} style={styles.imageContainer}>
                  <img src={image} alt={`Uploaded ${index}`} style={styles.image} />
                </div>
              ))}
            </div>

            <textarea
              placeholder="Enter a quote for this stack of images"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              style={styles.textarea}
            />
          </>
        )}

        {currentStack.length > 0 && (
          <button onClick={handleSubmitStack} style={styles.submitButton}>
            Submit Stack
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
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
