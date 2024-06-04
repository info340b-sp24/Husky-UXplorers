import React from 'react';

export default function Home(props) {
  return (
    <div>
      <MainHome />
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
      <div className="jumbotron m-5 py-2 text-left">
        <div className="img-left-container">

          <div>
            <div className="my-5">
              <h1 className="display-text display-type">Husky <span className="purple">UX</span>plorers</h1>
              <h2 className="font-italic mb-5"> For <i>students</i>, by <i>students</i>.</h2>
            </div>

            <div className="py-2 my-5">
              <p className="pr-5" style={{"width" : "45%"}}>
                Here to give you your UX design inspiration and needs.
                Share your work with our student community or begin
                your UX journey here.
              </p>
              <a type="button" className="purple-btn primary-btn btn rounded px-4 py-3 text-white" href="guide">
                <b>Start your UX Journey here</b>
              </a>
            </div>
          </div>

          <img src="img/landing_logo.png" alt="UXplorers logo" className="m-5"/>
        </div>
      </div>
    </div>
  );
}

function FeaturedSection() {
  return (
    <div>
      <div className="container">
        <h2 className="mt-5">Projects. <b>Open-sourced.</b></h2>
        <p>
          Husky UXplorers is your map to starting your UX career. Gain inspiration for your
          portfolio or your next project by browsing our selection of community-made projects from students here at the  University of Washington.
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
    <section className="mx-5 mb-5">
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
    <section className="mx-5">
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