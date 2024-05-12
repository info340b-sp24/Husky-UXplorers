import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js';
import Gallery from './Gallery.js';
import Profile from './Profile.js';
import Guide from './Guide.js';

// create GLOBAL VARIABLE WITH PROJECTs
// projects = {name:Lily W, major:INFO, projType:project, img:"img1.jpg", description:"blah blah"}
// can be used for project cards and also individual project pages
// something like this

export default function App(props) {
  return (
    <Routes>
      <Route path = "" element = {<Home />} />
      <Route path = "index" element = {<Home />} />
      <Route path = "gallery" element = {<Gallery />} />
      <Route path = "profile" element = {<Profile />} />
      <Route path = "guide" element = {<Guide />} />
    </Routes>
  );
}