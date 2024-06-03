let profileData = {
  username:"milllan",
  profilePic:"red-panda.jpg",
  profilePicAlt:"red panda profile picture",
  name:"Mila Nguyen",
  major:"Human Centered Design & Engineering",
  gradYear:"2026"
}

export default function ProfileInfo(props) {
  const currentUser = props.currentUser;
  console.log(currentUser);

  return (
    <div className="profile">
      <div className="img-left-container">
        <section>
          <img className="profile-pic rounded-circle mx-3" style={Object.assign({"width" : "150px"}, {"height" : "150px"})}src={"img/profiles/"
            + profileData.profilePic} alt={profileData.profilePicAlt}
          />
        </section>
        <section className="mt-1" style={{"textAlign" : "left"}}>
          <h1>test</h1>
          <p>@</p>
          <p className="my-4 px-3 py-1 bg-purple rounded-5 text-light">asd</p>
        </section>
      </div>
    </div>
  );

  // ADD EVENT LISTENER
}

// ADD FUNCTION THAT LETS USER EDIT PROFILE