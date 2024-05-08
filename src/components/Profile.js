import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Profile(props) {
  return (
    <div>
      <NavBar />
      <MainProfile />
      <Footer />
    </div>
  );
}

function MainProfile(props) {
  return (
    <main className="container-fluid">
      <header>
        <h1>My Profile</h1>
      </header>

      <ProfileInfo />
      
      <article>
        <ProfileProjects />
        <ProfileBookmarks />
      </article>
    </main>
  );
}

function ProfileInfo(props) {
  return (
    <article className="profile">
      <div>
        <section>
          <img className="profile-pic rounded-circle" src="img/profiles/red-panda.jpg" alt="profile picture" />
          <h2>@milllan</h2>
        </section>
        <section>
          <h3>Mila Nguyen</h3>
          <p>Major: HCDE</p>
          <p>Grad: 2026</p>
        </section>
      </div>
    </article>
  );
}

function ProfileProjects(props) {
  return (
    <section>
      <h2>My Projects</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src="img/projects/p4.jpg" alt="shoe shopping app mockup" />
            <div className="card-body">
              <h3 className="card-title">Shoeholic</h3>
              <p className="card-text">An app for sneakerheads.</p>
              <img className="arrow" src="img/icons/arrow.png" alt = "arrow button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileBookmarks(props) {
  return (
    <section>
      <h2>Bookmarks</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card">
            <img src="img/portfolios/port1.jpeg" className="card-img-top" alt="shoe shopping app mockup" />
            <div className="card-body">
              <h3 className="card-title">Maya Patel's Portfolio</h3>
              <p className="card-text">HCDE '26</p>
              <img className="arrow" src="img/icons/arrow.png" />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="img/portfolios/port2.jpeg" className="card-img-top" alt="shoe shopping app mockup" />
            <div className="card-body">
              <h3 className="card-title">Noah Martinez's Portfolio</h3>
              <p className="card-text">INFO '25</p>
              <img className="arrow" src="img/icons/arrow.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}