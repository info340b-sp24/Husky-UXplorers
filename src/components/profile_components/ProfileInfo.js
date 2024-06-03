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

  return (
    <div className="profile">
      <div className="img-left-container">
        <section>
          <img className="profile-pic rounded-circle mx-3" style={Object.assign({"width" : "150px"}, {"height" : "150px"})}src={currentUser.userImg} alt="User Profile Icon"
          />
        </section>
        <section className="mt-1" style={{"textAlign" : "left"}}>
          <h1>{currentUser.username}</h1>
          <p>{"@" + currentUser.userId}</p>
          <p className="my-4 px-3 py-1 bg-purple rounded-5 text-light">TO DO</p>
        </section>
      </div>
    </div>
  );

  // ADD EVENT LISTENER
}

// ADD FUNCTION THAT LETS USER EDIT PROFILE