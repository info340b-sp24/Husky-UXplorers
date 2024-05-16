import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'

export default function CreateProject (props) {
  return (
    <div>
      <NavBar />
      <MainCreateProject />
      <Footer />
    </div>
  );
}

function MainCreateProject (props) {
  return (
      <div>
        <p>In progress</p>

      </div>
  )
}