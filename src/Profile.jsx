import React, { useState } from 'react';
import Header from './Header';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('A short bio about yourself.');

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <div style={styles.profileContainer}>
        <h2 style={styles.title}>Profile</h2>
        <div style={styles.profileCard}>
          <div style={styles.imageContainer}>
            <img
              src={profileImage || 'https://via.placeholder.com/150'} // Default image if no profile picture is uploaded
              alt="Profile"
              style={styles.profileImage}
            />
            <input type="file" onChange={handleImageUpload} style={styles.fileInput} />
          </div>
          <div style={styles.infoContainer}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />

            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            <label style={styles.label}>Bio:</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              style={styles.textarea}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  profileCard: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    gap: '20px',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  fileInput: {
    marginTop: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  infoContainer: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '1.1rem',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    fontSize: '1rem',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    width: '100%',
    minHeight: '80px',
  },
};

export default Profile;
