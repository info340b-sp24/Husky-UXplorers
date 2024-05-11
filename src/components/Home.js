import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'

export default function Home(props) {
  return (
    <div>
      <NavBar />
      <MainHome />
      <Footer />
    </div>
  );
}

function MainHome (props) {
  return (
    <main className="container-fluid">
      <Spotlight />
      <FeaturedSection />
    </main>
  );
}

function Spotlight() {
  return (
    <div>
      <h1 className="text-center">Husky UXplorers</h1>
      <div className="jumbotron m-5 text-center">
        <h1 className="py-4">For students, by students.</h1>
        <p>
          Here to give you your UX design inspiration and needs.
          Share your work with our student community or begin
          your UX journey here.
        </p>
        <div className="input-group rounded">
          <input type="search" className="form-control rounded" placeholder="Find your next design inspiration" aria-label="Search" aria-describedby="search-addon" />
          <i className="fas fa-search"></i>
        </div>
        <h3 className="py-3">or</h3>
        <div className="m-2">
          <button type="button" className="rounded px-4 py-3 bg-dark text-white">Begin your UX journey</button>
        </div>
      </div>
    </div>
  );
}

function FeaturedSection() {
  return (
    <div>
      <div className="container">
        <h2 className="mt-5">Projects. Open-sourced.</h2>
        <p>
          Husky UXplorers is your map to starting your UX career. Gain inspiration for your
          portfolio or your next project by browsing our selection of community projects.
          Want to share your successes? Upload your project to inspire the next generation
          of designers.
        </p>
      </div>
      <FeaturedPortfolios />
      <FeaturedProjects />
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section>
      <h3 className="mt-5">Featured Projects</h3>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card block">
            <img src="img/projects/bloom.png" className="card-img-top" alt="Bloom Mentor Matcher" />
            <div className="card-body">
              <h4 className="card-title">Bloom Mentor Matcher</h4>
              <p className="card-text">Darrel Sudra IxD '26</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/projects/p4.jpg" className="card-img-top" alt="Shoeholic" />
            <div className="card-body">
              <h4 className="card-title">Shoeholic</h4>
              <p className="card-text">Mila Nguyen HCDE '24</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/projects/career_assistant.jpeg" className="card-img-top" alt="AI Career Assistant" />
            <div className="card-body">
              <h4 className="card-title">AI Career Assistant</h4>
              <p className="card-text">Lauren James INFO '24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedPortfolios() {
  return (
    <section>
      <h3 className="mt-5">Featured Portfolios</h3>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card block">
            <img src="img/portfolios/port1.jpeg" className="card-img-top" alt="Maya Patel's Portfolio" />
            <div className="card-body">
              <h4 className="card-title">Maya Patel </h4>
              <p className="card-text">HCDE '26</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/portfolios/emily_walter.jpg" className="card-img-top" alt="Emily Walter's Portfolio" />
            <div className="card-body">
              <h4 className="card-title">Emily Walter</h4>
              <p className="card-text">IxD '26</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card block">
            <img src="img/portfolios/marcel_mounie.png" className="card-img-top" alt="Marcel Mounie's Portfolio" />
            <div className="card-body">
              <h4 className="card-title">Marcel Mounie</h4>
              <p className="card-text">INFO '25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}