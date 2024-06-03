/** Packages */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';
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
import SearchResults from './SearchResults.js';
import SignIn from './SignIn.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';

export default function App() {
  const [projectData, setProjectData] = useState([]);
  const [currentUser, setCurrentUser] = useState({  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigateTo = useNavigate();
  
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
  useEffect(() => {
    const auth = getAuth();
    const nullUser = {
      userId : null
    }

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log("the current user is : ", firebaseUser.displayName);
        console.log(firebaseUser);

        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.username = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";

        setCurrentUser(firebaseUser);
        setIsAuthenticated(true);
        navigateTo("/profile");
      } else {
        setCurrentUser(nullUser);
        setIsAuthenticated(false);
        console.log(firebaseUser);
        console.log("Signed out");
      }
    })
  }, []);

  const signoutUser = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      navigateTo("/index")
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <NavBar currentUser={currentUser} isAuthenticated={isAuthenticated} signoutUser={signoutUser}/>
      <Routes>
        <Route path = "" element = {<Home />} />
        <Route path = "index" element = {<Home />} />
        <Route path = "gallery" element = {<Gallery />} >
          <Route path = ":projectName" element = {<ProjectPage />} />
          <Route index element = {<GalleryMain projectData={projectData} />}/>
        </Route>
        <Route path = "guide" element = {<Guide />} />
        <Route path="search" element={<SearchResults projectData={projectData} />} />
        <Route path="sign-in" element={
          <SignIn signOut={signoutUser} currentUser={currentUser}/>
        } />
        <Route path = "*" element = {<PageNotFound />} />

        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path = "profile" element = {<Profile />} />
          <Route path = "create-project" element = {
          <CreateProject uploadProject={uploadProject} projectData={projectData}/>
        } />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function ProtectedPage(props) {
  if(props.currentUser.userId === null) {
    return <Navigate to="/sign-in" />
  } else {
    return <Outlet />
  }
}