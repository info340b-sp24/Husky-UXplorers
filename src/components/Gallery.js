import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Gallery (props) {
  return (
    <div>
      <NavBar />
      <MainGallery />
      <Footer />
    </div>
  );
}

function MainGallery (props) {
  return (
    <main className = "container-fluid">
      <GalleryHeader />
      <GalleryContent />
    </main>
  )
}

function GalleryHeader (props) {
  return (
    <header class="gallery">
      <h1>Gallery</h1>
      <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Search by project, artist, aesthetic, etc." aria-label="Search" aria-describedby="search-addon" />
        <i class="fas fa-search"></i>
      </div>
    </header>
  );
}

function GalleryContent(props) {
  return (
    <div>
      <GalleryPortfolios />
      <GalleryProjects />
    </div>
  );
}

function GalleryProjects(props) {
  return (
    <section className="projects container">
      <h2 className="mt-5">Projects</h2>
      <div className="row row-cols-1 row-cols-md-4">
        <div className="col">
          <div className="card block">
            <a href="project_example.html">
              <img src="img/projects/p1.jpg" className="card-img-top" alt="Ostomi App Mockup" />
            </a>
            <div className="card-body">
              <h3 className="card-title">Ostomi</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">Jasmine Rivers INFO '26</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/projects/p2.jpg" className="card-img-top" alt="App Home Mockup" />
            <div className="card-body">
              <h3 className="card-title">App Home</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">Aria Donovan INFO '25</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/projects/p3.jpg" className="card-img-top" alt="Park Quest App Mockup" />
            <div className="card-body">
              <h3 className="card-title">Park Quest</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">Jackson Thompson IxD '25</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/projects/p4.jpg" className="card-img-top" alt="Shoeholic App Mockup" />
            <div className="card-body">
              <h3 className="card-title">Shoeholic</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">Mila Nguyen HCDE '24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPortfolios(props) {
  return (
    <section className="portfolios container">
      <h2 className="mt-5">Portfolios</h2>
      <div className="row row-cols-1 row-cols-md-4">
        <div className="col">
          <div className="card block">
            <a href="portfolio_example.html">
              <img src="img/portfolios/port1.jpeg" className="card-img-top" alt="Maya Patel's Portfolio" />
            </a>
            <div className="card-body">
              <h3 className="card-title">Maya Patel </h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">HCDE '26</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/portfolios/port2.jpeg" className="card-img-top" alt="Noah Martinez's Portfolio" />
            <div className="card-body">
              <h3 className="card-title">Noah Martinez</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">Info '25</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/portfolios/port3.jpeg" className="card-img-top" alt="Alec Santiago's Portfolio" />
            <div className="card-body">
              <h3 className="card-title">Alec Santiago</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">Info '24</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/portfolios/port4.jpeg" className="card-img-top" alt="Ava Kim's Portfolio" />
            <div className="card-body">
              <h3 className="card-title">Ava Kim</h3>
              <img className="arrow" src="img/icons/arrow.png" />
              <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
              <p className="card-text">IxD '25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}