import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header

const HomePage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const storedImageData = JSON.parse(localStorage.getItem('submittedImageData'));
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  return (
    <div>
      <Header /> {/* Use the Header */}
      <main style={{ padding: '20px' }}>
        <h1>Welcome to the Home Page</h1>
        <Link to="/upload">
          <button style={styles.uploadButton}>Go to Image Uploader</button>
        </Link>
        <div style={{ marginTop: '40px' }}>
          <h2>Uploaded Images</h2>
          {imageData.length === 0 ? (
            <p>No images uploaded yet.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {imageData.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={`Uploaded ${index}`} style={{ width: '100%', height: 'auto' }} />
                  <p>{image.quote || 'No quote provided.'}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const styles = {
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
};

export default HomePage;
