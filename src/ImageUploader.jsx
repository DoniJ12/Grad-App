import React, { useState, useEffect } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Load the images from localStorage on component mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('submittedImages'));
    if (storedImages) {
      setImages(storedImages);
    }
  }, []);

  // Function to handle multiple image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        newImages.push(base64Image);

        // Once all files are read, update the state
        if (newImages.length === files.length) {
          const updatedImages = [...images, ...newImages];
          setImages(updatedImages);
        }
      };

      if (file) {
        reader.readAsDataURL(file); // Read each file as a data URL
      }
    });
  };

  // Handle submit to save images
  const handleSubmit = () => {
    localStorage.setItem('submittedImages', JSON.stringify(images));
    setSubmitted(true);
  };

  return (
    <div className="image-uploader">
      <h2>Upload Images</h2>
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      {images.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Uploaded ${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      )}
      <button onClick={handleSubmit} style={styles.submitButton}>
        Submit Images
      </button>
      {submitted && <p style={styles.message}>Images submitted!</p>}
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
};

export default ImageUploader;
