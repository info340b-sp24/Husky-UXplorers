/** Packages */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, push as firebasePush, onValue} from 'firebase/database';

/** Local components */
import Home from './Home.js';
import Gallery from './Gallery.js';
import GalleryMain from './MainGallery.js';
import ProjectPage from './ProjectPage.js';
import Profile from './Profile.js';
import Guide from './Guide.js';
import CreateProject from './CreateProject.js';
import PageNotFound from './PageNotFound.js';

export default function App() {
  const [projectData, setProjectData] = useState([]);

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

  return (
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
      <Route path = "*" element = {<PageNotFound />} />
    </Routes>
  );
}