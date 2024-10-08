import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>MyApp</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navItem}>Home</Link>
        <Link to="/upload" style={styles.navItem}>Image Uploader</Link>
        <Link to="/profile" style={styles.navItem}>Profile</Link>
        <a href="#contact" style={styles.navItem}>Contact Us</a>
        <a href="#about" style={styles.navItem}>About</a>
      </nav>
    </header>
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
    cursor: 'pointer',
  },
};

export default Header;
