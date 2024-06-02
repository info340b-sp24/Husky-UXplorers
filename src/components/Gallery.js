import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Gallery (props) {
  return (
    <div>
      <Outlet/>
    </div>
  );
}