import React from 'react';

export default function NavBar() {
  const nav = (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="../index">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../profile">My Profile</a>
            </li>
          </ul>

          <div className="nav-item">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
          <div className="nav-item mx-2">
            <a type="button" className="btn purple-btn text-white" href="create-project">Upload Project</a>
          </div>
        </div>
      </div>
    </nav>
  );

  return nav;
}