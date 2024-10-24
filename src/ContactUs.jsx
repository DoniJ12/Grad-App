import React from 'react';
import Header from './Header'; // Import the Header component
import { FaTwitter, FaLinkedin, FaInstagram, FaTelegramPlane } from 'react-icons/fa'; // Icons for social media

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>

        <div style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Address</h2>
          <p style={styles.infoText}>1234 Sample Street, City, Country</p>

          <h2 style={styles.infoTitle}>Phone</h2>
          <p style={styles.infoText}>+123-456-7890</p>
        </div>

        <div style={styles.socialSection}>
          <h2 style={styles.socialTitle}>Follow Us</h2>
          <div style={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
              <FaTwitter size={40} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
              <FaLinkedin size={40} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
              <FaInstagram size={40} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
              <FaTelegramPlane size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center',
    color: '#333',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#007bff',
  },
  infoSection: {
    marginBottom: '50px',
  },
  infoTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  infoText: {
    fontSize: '1.2rem',
    color: '#555',
  },
  socialSection: {
    marginTop: '50px',
  },
  socialTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  socialButton: {
    color: '#007bff',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
};

export default ContactUs;
