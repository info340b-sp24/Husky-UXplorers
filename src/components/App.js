import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PROJECT_DATA from '../data/projects.json';
import PORTFOLIO_DATA from '../data/portfolios.json';
import Home from './Home.js';
import Gallery from './Gallery.js';
import GalleryMain from './MainGallery.js';
import ProjectPage from './ProjectPage.js';
import Profile from './Profile.js';
import Guide from './Guide.js';
import CreateProject from './CreateProject.js';

// create GLOBAL VARIABLE WITH PROJECTs
// projects = {name:Lily W, major:INFO, projType:project, img:"img1.jpg", description:"blah blah"}
// can be used for project cards and also individual project pages
// something like this



export default function App(props) {
  return (
    <Routes>
      <Route path = "" element = {<Home />} />
      <Route path = "index" element = {<Home />} />
      <Route path = "gallery" element = {<Gallery />} >
        <Route index element = {<GalleryMain projectData={PROJECT_DATA} portfolioData={PORTFOLIO_DATA} />}/>
        <Route path = "projects" element = {<ProjectPage />} />
      </Route>
      <Route path = "profile" element = {<Profile />} />
      <Route path = "guide" element = {<Guide />} />
      <Route path = "create-project" element = {<CreateProject/>} />
    </Routes>
  );
}