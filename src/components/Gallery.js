import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Gallery (props) {
  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  );
}
