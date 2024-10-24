import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>MyApp</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li>
            <Link to="/" style={styles.navItem}>Home</Link>
          </li>
          <li>
            <Link to="/upload" style={styles.navItem}>Image Uploader</Link>
          </li>
          <li>
            <Link to="/profile" style={styles.navItem}>Profile</Link>
          </li>
          <li>
            <Link to="/contact" style={styles.navItem}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',  // Reduced padding for a more compact header
    backgroundColor: '#f5f5f5',
    borderBottom: '2px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',  // Smaller logo font size
    fontWeight: 'bold',
    color: '#333',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '15px',  // Reduced margin between buttons
    padding: '8px 16px',  // Slightly reduced button size
    fontSize: '0.9rem',  // Smaller font for the buttons
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#555',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    textTransform: 'uppercase',
  },
  navItemHover: {
    backgroundColor: '#333',
  },
};

export default Header;
