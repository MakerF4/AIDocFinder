import React, { useState, useEffect } from 'react';
import axios from '../services/axiosConfig';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    gender: '',
    age: 0,
    telephone: '',
    postcode: '',
    healthCondition: '',
    height: '',
    weight: '',
  });

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      console.log("User email is not stored, cannot fetch profile.");
      return;
    }
    fetchProfile(userEmail);
  }, []);

  const fetchProfile = async (userEmail) => {
    try {
      const response = await axios.get(`/api/user/profile/${userEmail}`);
      setProfile(response.data);
      if (response.data.profileImage) {
        
        setPreviewImage(`data:image/png;base64,${response.data.profileImage}`);
      }
    } catch (error) {
      console.error("There was an error fetching the user profile", error);
      setMessage('Failed to fetch profile.');
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace(/^data:.+;base64,/, '');
        setImage(base64String); 
        setPreviewImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      console.error('User email is not stored, cannot update profile.');
      setMessage('User email is not stored, cannot update profile.');
      return;
    }

    
    const updatedProfile = { ...profile, profileImage: image };

    try {
      await axios.put(`/api/user/profile/${userEmail}`, updatedProfile, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage('Profile updated successfully.');
      fetchProfile(userEmail); 
    } catch (error) {
      console.error('There was an error updating the profile:', error);
      setMessage('Failed to update profile. Please check your input.');
    }
  };


  return (
    <div className={styles.userProfileContainer}>
      <h2 className={styles.h2Profile}>Your Profile</h2>
      {message && <p className={styles.pProfile}>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.formProfile}>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Profile Image: (PNG only)</label>
          <input
            type="file"
            name="profileImage"
            onChange={handleImageChange}
            className={styles.inputProfile}
          />
        {previewImage && (
          <div className={styles.imagePreviewContainer}>
            <img src={previewImage} alt="Profile Preview" className={styles.imagePreview} />
          </div>
)}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Gender:</label>
          <select
            name="gender"
            value={profile.gender || ''}
            onChange={handleChange}
            className={styles.selectProfile}>
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Telephone:</label>
          <input
            type="text"
            name="telephone"
            value={profile.telephone || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Postcode:</label>
          <input
            type="text"
            name="postcode"
            value={profile.postcode || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Health Condition:</label>
          <input
            type="text"
            name="healthCondition"
            value={profile.healthCondition || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Height (cm):</label>
          <input
            type="number"
            step="0.01"
            name="height"
            value={profile.height || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Weight (kg):</label>
          <input
            type="number"
            step="0.01"
            name="weight"
            value={profile.weight || ''}
            onChange={handleChange}
            className={styles.inputProfile}
          />
        </div>
        <button type="submit" className={styles.buttonProfile}>Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
