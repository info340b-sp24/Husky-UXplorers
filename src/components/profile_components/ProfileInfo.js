let profileData = {
  username:"milllan",
  profilePic:"red-panda.jpg",
  profilePicAlt:"red panda profile picture",
  name:"Mila Nguyen",
  major:"Human Centered Design & Engineering",
  gradYear:"2026"
}

export default function ProfileInfo(props) {
  return (
    <div className="profile">
      <div className="img-left-container">
        <section>
          <img className="profile-pic rounded-circle mx-3" style={Object.assign({"width" : "150px"}, {"height" : "150px"})}src={"img/profiles/"
            + profileData.profilePic} alt={profileData.profilePicAlt}
          />
        </section>
        <section className="mt-1" style={{"textAlign" : "left"}}>
          <h1>{profileData.name}</h1>
          <p>{"@" + profileData.username}</p>
          <p className="my-4 px-3 py-1 bg-purple rounded-5 text-light">{profileData.major}, {profileData.gradYear}</p>
        </section>
      </div>
    </div>
  );

  // ADD EVENT LISTENER
}

// ADD FUNCTION THAT LETS USER EDIT PROFILE