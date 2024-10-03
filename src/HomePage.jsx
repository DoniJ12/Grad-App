import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [images, setImages] = useState([]);

  // Load the submitted images from localStorage
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('submittedImages'));
    if (storedImages) {
      setImages(storedImages);
    }
  }, []);

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.logo}>MyApp</div>
        <nav style={styles.nav}>
          <a href="#contact" style={styles.navItem}>Contact Us</a>
          <a href="#about" style={styles.navItem}>About</a>
          <a href="#profile" style={styles.navItem}>Profile</a>
        </nav>
      </header>
      <main style={styles.main}>
        <h1>Welcome to MyApp!</h1>
        <Link to="/upload">
          <button style={styles.button}>Go to Image Uploader</button>
        </Link>
      </main>
      <section style={styles.imageSection}>
        <h2>Your Uploaded Images</h2>
        {images.length > 0 ? (
          <div style={styles.imageGrid}>
            {images.map((image, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img src={image} alt={`Uploaded ${index}`} style={styles.image} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Images</p>
        )}
      </section>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navItem: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imageSection: {
    marginTop: '40px',
    padding: '20px',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  imageWrapper: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default HomePage;
