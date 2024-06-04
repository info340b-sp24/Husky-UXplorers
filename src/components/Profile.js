import React, { useState, useEffect } from 'react';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import ProfileInfo from './profile_components/ProfileInfo';

export default function Profile(props) {
  const currentUser = props.currentUser;
  const [userData, setUserData] = useState(null);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    const userId = currentUser.userId;
    const db = getDatabase();
    const userRef = dbRef(db, "users/" + userId);

    const unregisterUserData = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setUserData(userData);
    });

    const cleanup = () => {
      unregisterFunction();
    }

    return cleanup;
  }, []);

  return (
    <div>
      <main className="container-fluid mx-5 mt-3">
        <ProfileInfo currentUser={userData} />
        <hr />
        <article>
          <section>
            <h2>My Projects</h2>
            {userProjects.length === 0 ? (
              <p>No projects uploaded yet.</p>
            ) : (
              <div className="row row-cols-1 row-cols-md-3">
                {userProjects.map((project) => (
                  <div className="col" key={project.id}>
                    <div className="card">
                      <img className="card-img-top" src={project.imageUrl} alt={project.title} />
                      <div className="card-body">
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-text">{project.description}</p>
                        {/* Add other project details here */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </article>
      </main>
    </div>
  );
}