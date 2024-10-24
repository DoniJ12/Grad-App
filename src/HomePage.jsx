import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header

const HomePage = () => {
  const [imageData, setImageData] = useState([]);
  const [expandedStackIndex, setExpandedStackIndex] = useState(null); // To track which stack is expanded

  useEffect(() => {
    const storedImageData = JSON.parse(localStorage.getItem('submittedImageData'));
    if (storedImageData) {
      setImageData(storedImageData);
    }
  }, []);

  const handleToggleExpand = (index) => {
    setExpandedStackIndex(expandedStackIndex === index ? null : index);
  };

  return (
    <div>
      <Header /> {/* Use the Header */}
      <main style={{ padding: '20px' }}>
        <h1>Welcome to the Home Page</h1>
        <Link to="/upload">
          <button style={styles.uploadButton}>Go to Image Uploader</button>
        </Link>
        <div style={{ marginTop: '40px' }}>
          <h2>Uploaded Image Stacks</h2>
          {imageData.length === 0 ? (
            <p>No images uploaded yet.</p>
          ) : (
            <div>
              {imageData.map((stack, index) => (
                <div key={index} style={styles.stackContainer}>
                  {/* Display latest image as thumbnail */}
                  <div style={styles.stackHeader} onClick={() => handleToggleExpand(index)}>
                    <img
                      src={stack.images[stack.images.length - 1]} // Latest image in the stack
                      alt={`Thumbnail ${index}`}
                      style={styles.thumbnail}
                    />
                    <p>{stack.quote}</p>
                    <button style={styles.expandButton}>
                      {expandedStackIndex === index ? 'Collapse' : 'Expand'}
                    </button>
                  </div>

                  {expandedStackIndex === index && (
                    <div style={styles.stackImages}>
                      {stack.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image} alt={`Stacked ${imgIndex}`} style={styles.image} />
                      ))}
                    </div>
                  )}
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
  stackContainer: {
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
  stackHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  thumbnail: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginRight: '10px',
  },
  expandButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  stackImages: {
    marginTop: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default HomePage;
