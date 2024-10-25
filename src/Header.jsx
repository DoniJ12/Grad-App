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
            <Link to="/" style={styles.navItem} onMouseEnter={(e) => handleHover(e, true)} onMouseLeave={(e) => handleHover(e, false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/upload" style={styles.navItem} onMouseEnter={(e) => handleHover(e, true)} onMouseLeave={(e) => handleHover(e, false)}>
              Image Uploader
            </Link>
          </li>
          <li>
            <Link to="/profile" style={styles.navItem} onMouseEnter={(e) => handleHover(e, true)} onMouseLeave={(e) => handleHover(e, false)}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/contact" style={styles.navItem} onMouseEnter={(e) => handleHover(e, true)} onMouseLeave={(e) => handleHover(e, false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Hover handler to change styles on hover
const handleHover = (e, isHovering) => {
  if (isHovering) {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = '#555';
  } else {
    e.target.style.backgroundColor = '#555';
    e.target.style.color = '#fff';
  }
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '2px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
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
    flex: 1,  // Ensures the nav items cover more width
    justifyContent: 'space-between',
  },
  navItem: {
    flex: 1,  // Ensure the buttons take up equal space
    margin: '0 5px',  // Slight margin between buttons
    padding: '35px 20px',  // Increased padding for larger buttons
    textAlign: 'center',  // Center the text in the button
    fontSize: '25px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',   // White text
    backgroundColor: '#555',  // Darker button background
    borderRadius: '5px',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease, color 0.3s ease',  // Smooth hover effect
  },
};

export default Header;
