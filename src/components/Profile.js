import React from 'react';
import ProfileInfo from './profile_components/ProfileInfo'

export default function Profile(props) {
  return (
    <div>
      <MainProfile />
    </div>
  );
}

function MainProfile(props) {
  return (
    <main className="container-fluid mx-5 mt-3">
      {/* <header className="pt-3">
        <h1>My Profile</h1>
      </header> */}

      <ProfileInfo />
      <hr />

      <article>
        <ProfileProjects />
        <ProfileBookmarks />
      </article>
    </main>
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
      <h2>Bookmarked Projects</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card">
            <img src="img/portfolios/port1.jpeg" className="card-img-top" alt="shoe shopping app mockup" />
            <div className="card-body">
              <h3 className="card-title">Maya Patel's Portfolio</h3>
              <p className="card-text">HCDE '26</p>
              <img className="arrow" src="img/icons/arrow.png" alt = "arrow button"/>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="img/portfolios/port2.jpeg" className="card-img-top" alt="shoe shopping app mockup" />
            <div className="card-body">
              <h3 className="card-title">Noah Martinez's Portfolio</h3>
              <p className="card-text">INFO '25</p>
              <img className="arrow" src="img/icons/arrow.png" alt = "arrow button"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}