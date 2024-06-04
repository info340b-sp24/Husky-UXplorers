import React, { useState } from 'react';

export default function ProfileInfo(props) {
  const { currentUser, updateProfile } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(currentUser);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateProfile(profileData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData(prevData => ({
        ...prevData,
        profilePic: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <div className="img-left-container">
        <section>
          <img
            className="profile-pic rounded-circle mx-3"
            style={{ width: "150px", height: "150px" }}
            src={profileData.profilePic}
            alt={profileData.profilePicAlt}
          />
        </section>
        <section className="mt-1" style={{ textAlign: "left" }}>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="username"
                value={profileData.username}
                onChange={handleChange}
              />
              <input
                type="file"
                name="profilePic"
                onChange={handleFileChange}
              />
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <h1>{profileData.username}</h1>
              <p>{"@" + profileData.userId}</p>
              <p className="my-4 px-3 py-1 bg-purple rounded-5 text-light">TO DO</p>
              <button onClick={handleEditClick}>Edit Profile</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
