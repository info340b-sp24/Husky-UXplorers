import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js';
import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function App(props) {
  return (
    <Routes>
      <Route path = "" element = {<Home />} />
      <Route path = "index" element = {<Home />} />
      <Route path = "gallery" element = {<Gallery />} />
      <Route path = "profile" element = {<Profile />} />
    </Routes>
  );
}