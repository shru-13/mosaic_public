import React, { useContext, useState, useEffect } from 'react';
import { FaUser, FaHome, FaEdit } from 'react-icons/fa';
import './ProfilePage.css';
import { UserContext } from '../components/UserContext'; // Ensure this path is correct
import axios from 'axios';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    gender: '',
    degree: '',
    address: ''
  });

  useEffect(() => {
    if (user && user.email) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/profile/${user.email}`);
          setUserProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    console.log('Profile details saved:', userProfile);
    axios.put('http://localhost:8080/profile', userProfile)
      .then(response => {
        console.log('Profile updated:', response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  const handleInputChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <FaUser className="profile-icon" />
        <h2>User Profile</h2>
      </div>
      <div className="profile-details">
        <FaEdit className="edit-icon" onClick={handleEditClick} />
        <div className="profile-item">
          <span className="profile-label">Name:</span>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userProfile.name}
              onChange={handleInputChange}
              className="edit-input"
            />
          ) : (
            <span className="profile-value">{userProfile.name}</span>
          )}
        </div>
        <div className="profile-item">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{userProfile.email}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Phone Number:</span>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={userProfile.phone}
              onChange={handleInputChange}
              className="edit-input"
            />
          ) : (
            <span className="profile-value">{userProfile.phone}</span>
          )}
        </div>
        <div className="profile-item">
          <span className="profile-label">Institution:</span>
          {isEditing ? (
            <input
              type="text"
              name="institution"
              value={userProfile.institution}
              onChange={handleInputChange}
              className="edit-input"
            />
          ) : (
            <span className="profile-value">{userProfile.institution}</span>
          )}
        </div>
        <div className="profile-item">
          <span className="profile-label">Gender:</span>
          {isEditing ? (
            <input
              type="text"
              name="gender"
              value={userProfile.gender}
              onChange={handleInputChange}
              className="edit-input"
            />
          ) : (
            <span className="profile-value">{userProfile.gender}</span>
          )}
        </div>
        <div className="profile-item">
          <span className="profile-label">Degree:</span>
          {isEditing ? (
            <input
              type="text"
              name="degree"
              value={userProfile.degree}
              onChange={handleInputChange}
              className="edit-input"
            />
          ) : (
            <span className="profile-value">{userProfile.degree}</span>
          )}
        </div>
      </div>
      <div className="profile-address">
        <FaHome className="address-icon" />
        <div className="address-details">
          <span className="profile-label">Address:</span>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={userProfile.address}
              onChange={handleInputChange}
              className="edit-input"
            />
          ) : (
            <span className="profile-value">{userProfile.address}</span>
          )}
        </div>
      </div>
      {isEditing && (
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
      )}
    </div>
  );
};

export default ProfilePage;
