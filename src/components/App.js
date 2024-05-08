import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js';
import NavBar from './NavBar.js';

export default function App(props) {
  return (
    <Routes>
      <Route path = "" element = {<Home />} />
      <Route path = "index" element = {<Home />} />
      <Route path = "gallery" element = {<Home />} />
      <Route path = "profile" element = {<Home />} />
    </Routes>
  );
}