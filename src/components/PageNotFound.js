import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function PageNotFound(props) {
  return (
    <div>
      <NavBar />
      <main className="container-fluid">
        <header>
          <h1>Are you lost?</h1>
          <p>Sorry, this isn't a page!</p>
        </header>

        <section>
          <img src="img/landing_img.png" alt="UXplorers logo" className="m-5"/>
          <Link className="btn purple-btn text-white" to="index">Home Page</Link>
        </section>
      </main>
    </div>
  );
}