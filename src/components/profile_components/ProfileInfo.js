import React, { useState } from 'react';

const defaultProfileData = {
  username: "milllan",
  profilePic: "red-panda.jpg",
  profilePicAlt: "red panda profile picture",
  name: "Mila Nguyen",
  major: "Human Centered Design & Engineering",
  gradYear: "2026"
};

export default function ProfileInfo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(defaultProfileData);

  const currentUser = props.currentUser || profileData;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save changes to the profile (e.g., update the database)
    // Assuming we have a function updateProfile to handle this.
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

  return (
    <div className="profile">
      <div className="img-left-container">
        <section>
          <img
            className="profile-pic rounded-circle mx-3"
            style={{ width: "150px", height: "150px" }}
            src={currentUser.profilePic}
            alt={currentUser.profilePicAlt}
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
                onChange={(e) => {
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
                }}
              />
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <h1>{currentUser.username}</h1>
              <p>{"@" + currentUser.userId}</p>
              <p className="my-4 px-3 py-1 bg-purple rounded-5 text-light">TO DO</p>
              <button onClick={handleEditClick}>Edit Profile</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function updateProfile(profileData) {
  // Placeholder function to update the profile data in your database
  console.log("Profile updated", profileData);
}
