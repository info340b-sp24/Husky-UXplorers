let profileData = {
  username:"milllan",
  profilePic:"red-panda.jpg",
  profilePicAlt:"red panda profile picture",
  name:"Mila Nguyen",
  major:"HCDE",
  gradYear:"2026"
}

export default function ProfileInfo(props) {
  return (
    <article className="profile">
      <div>
        <section>
          <img className="profile-pic rounded-circle" src={"img/profiles/"
            + profileData.profilePic} alt={profileData.profilePicAlt}
          />
          <h2>{"@" + profileData.username}</h2>
        </section>
        <section>
          <h3>{profileData.name}</h3>
          <p>Major: {profileData.major}</p>
          <p>Grad: {profileData.gradYear}</p>
        </section>
      </div>
    </article>
  );

  // ADD EVENT LISTENER
}

// ADD FUNCTION THAT LETS USER EDIT PROFILE