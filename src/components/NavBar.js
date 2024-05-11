import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function NavBar() {
  const nav = (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="profile">My Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return nav;
}