import React from 'react';
import { Routes, Route } from 'react-router-dom'
import PROJECT_DATA from '../data/projects.json';
import PORTFOLIO_DATA from '../data/portfolios.json';
import Home from './Home.js';
import Gallery from './Gallery.js';
import GalleryMain from './MainGallery.js';
import ProjectPage from './ProjectPage.js';
import Profile from './Profile.js';
import Guide from './Guide.js';
import CreateProject from './CreateProject.js';
import PageNotFound from './PageNotFound.js';
import SearchResults from './SearchResults.js';

export default function App(props) {
  return (
    <Routes>
      <Route path = "" element = {<Home />} />
      <Route path = "index" element = {<Home />} />
      <Route path = "gallery" element = {<Gallery />} >
        <Route path = ":projectName" element = {<ProjectPage />} />
        <Route index element = {<GalleryMain projectData={PROJECT_DATA} portfolioData={PORTFOLIO_DATA} />}/>
      </Route>
      <Route path = "profile" element = {<Profile />} />
      <Route path = "guide" element = {<Guide />} />
      <Route path = "create-project" element = {<CreateProject/>} />
      <Route path="search" element={<SearchResults />} />
      <Route path = "*" element = {<PageNotFound />} />
    </Routes>
  );
}