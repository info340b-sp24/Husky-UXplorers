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
    <article className="profile">
      <div>
        <section>
          <img className="profile-pic rounded-circle" src={"img/profiles/"
            + profileData.profilePic} alt={profileData.profilePicAlt}
          />
        </section>
        <section className="text-left">
          <h2>{profileData.name}</h2>
          <p>{"@" + profileData.username}</p>
          <p className="px-3 py-1 bg-purple rounded-5 text-light">{profileData.major}, {profileData.gradYear}</p>
        </section>
      </div>
    </article>
  );

  // ADD EVENT LISTENER
}

// ADD FUNCTION THAT LETS USER EDIT PROFILE