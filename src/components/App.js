/** Packages */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, push as firebasePush, onValue} from 'firebase/database';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

/** Local components */
import Home from './Home.js';
import Gallery from './Gallery.js';
import GalleryMain from './MainGallery.js';
import ProjectPage from './ProjectPage.js';
import Profile from './Profile.js';
import Guide from './Guide.js';
import CreateProject from './CreateProject.js';
import PageNotFound from './PageNotFound.js';
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function App() {
  const [projectData, setProjectData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // PROJECT DATA
  useEffect(() => {
    const db = getDatabase();
    const projectsRef = ref(db, "projects");

    const unregisterFunction = onValue(projectsRef, (snapshot) => {
      const projectsObj = snapshot.val();

      const projectKeys = Object.keys(projectsObj);
      const projectsArr = projectKeys.map((keyName) => {
        const currProject = projectsObj[keyName];
        currProject.key = keyName;
        return projectsObj[keyName];
      });

      setProjectData(projectsArr);
    });


    function cleanup() {
      unregisterFunction();
    }

    return cleanup;
  }, []);

  const uploadProject = (newProject) => {
    const db = getDatabase();
    const projectsRef = ref(db, "projects");
    firebasePush(projectsRef, newProject);
  }

  // USER AUTH
  const auth = getAuth();

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      firebaseUser.userId = firebaseUser.uid;
      firebaseUser.username = firebaseUser.displayName;
      firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";

      setCurrentUser(firebaseUser);
      console.log("the current user is : " + currentUser + " " + currentUser.userId);
      /** TO DO: Figure out how to navigate user to home screen on login */
    } else {
      setCurrentUser(null);
      /** TO DO: Make a default user with null VALUES for userId, and so on. */
    }
  }, []);

  const handleSignout = (event) => {
    signOut(getAuth());
  }

  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route path = "" element = {<Home />} />
        <Route path = "index" element = {<Home />} />
        <Route path = "gallery" element = {<Gallery />} >
          <Route path = ":projectName" element = {<ProjectPage />} />
          <Route index element = {<GalleryMain projectData={projectData}/>} />
        </Route>
        <Route path = "profile" element = {<Profile />} />
        <Route path = "guide" element = {<Guide />} />
        <Route path = "create-project" element =
          {<CreateProject uploadProject={uploadProject} />}
        />
        <Route path = "sign-in" element = {
          <SignIn currentUser={currentUser} signOutCallback={handleSignout}/>
        } />
        <Route path = "*" element = {<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}