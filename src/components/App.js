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
import FirstTimeSignIn from './FirstTimeSignIn.js';

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


  const getCorrectImgSrc = function (imgSrc) {
    if (!imgSrc.includes("https://firebasestorage.googleapis.com/")) {
      imgSrc = "img/projects/" + imgSrc;
      console.log(imgSrc);
    }
    return imgSrc;
  }

  // USER AUTH
  useEffect(() => {
    const auth = getAuth();
    const nullUser = {
      userId : null
    }

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.username = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";

        const creationTime = new Date(firebaseUser.metadata.creationTime).getTime();
        const lastSignInTime = new Date(firebaseUser.metadata.lastSignInTime).getTime();

        setCurrentUser(firebaseUser);
        setIsAuthenticated(true);
        console.log(currentUser);

        if (creationTime === lastSignInTime) {
          console.log("First time sign-in for " + firebaseUser.username);
          navigateTo("/first-time-sign-in")
        } else {
          console.log("Welcome back, " + firebaseUser.username);
          navigateTo("/profile");
        }
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
          <Route path = ":projectName" element = {
            <ProjectPage projectData={projectData}
            getCorrectImgSrc={getCorrectImgSrc} />
          } />
          <Route index element = {<GalleryMain projectData={projectData}
            getCorrectImgSrc={getCorrectImgSrc} />}
          />
        </Route>
        <Route path = "guide" element = {<Guide />} />
        <Route path="search" element={<SearchResults projectData={projectData} getCorrectImgSrc={getCorrectImgSrc} />} />
        <Route path="sign-in" element={
          <SignIn signOut={signoutUser} currentUser={currentUser}/>
        } />
        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path = "profile" element = {<Profile currentUser={currentUser}/>} />
          <Route path="first-time-sign-in" element={<FirstTimeSignIn currentUser={currentUser}/>} />
          <Route path = "create-project" element = {
          <CreateProject uploadProject={uploadProject} projectData={projectData}
            currUser={currentUser}/>
        } />
        </Route>

        <Route path = "*" element = {<PageNotFound />} />
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