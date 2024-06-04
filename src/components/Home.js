import React from 'react';
import { Link } from 'react-router-dom'

export default function Home(props) {
  const { projectData, getCorrectImgSrc } = props;
  const recentProjects = projectData.slice(-3);

  return (
    <div>
      <MainHome projectData={recentProjects} getCorrectImgSrc={getCorrectImgSrc}/>
    </div>
  );
}

function MainHome (props) {
  const { projectData, getCorrectImgSrc } = props;

  return (
    <main className="container-fluid">
      <Spotlight />
      <FeaturedSection projectData={projectData} getCorrectImgSrc={getCorrectImgSrc}/>
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

          <img src="/img/landing_logo.png" alt="UXplorers logo" className="m-5"/>
        </div>
      </div>
    </div>
  );
}

function FeaturedSection(props) {
  const { projectData, getCorrectImgSrc } = props;

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

      <FeaturedProjects projectData={projectData} getCorrectImgSrc={getCorrectImgSrc}/>
    </div>
  );
}

function FeaturedProjects(props) {
  const { projectData, getCorrectImgSrc } = props;

  return (
    <section className="mx-5 mb-5">
      <h3 className="mt-5">Recent Projects</h3>
      <GalleryContent
          projects={projectData}
          getCorrectImgSrc={getCorrectImgSrc}
        />
      {/* <div className="row row-cols-1 row-cols-md-3">
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
      </div> */}
    </section>
  );
}

function GalleryContent({ projects, getCorrectImgSrc }) {
  return (
    <div className="d-flex flex-row mb-3 align-items-start">
      <GalleryProjects projects={projects} getCorrectImgSrc={getCorrectImgSrc} />
    </div>
  );
}

function GalleryProjects({ projects, getCorrectImgSrc }) {
  return (
    <div className="projects container">
      <ProjectCardRow data={projects} getCorrectImgSrc={getCorrectImgSrc} />
    </div>
  );
}

function ProjectCardRow({ data, getCorrectImgSrc }) {
  const row = data.map((currData) => {
    return (
      <ProjectCard
        data={currData}
        key={currData.metadata.title + currData.authorData.author}
        getCorrectImgSrc={getCorrectImgSrc}
      />
    );
  });

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {row}
    </div>
  );
}

function ProjectCard({ data, getCorrectImgSrc }) {
  const { metadata, authorData, intro } = data;
  const projectPath = getProjectPath(metadata, authorData);

  return (
    <div className="col">
      <div className="card block mb-3">
        <Link to={"/gallery/" + projectPath}>
          <img src={getCorrectImgSrc(intro.imgSrc)} className="card-img-top" alt={intro.imgAlt} />
        </Link>
        <div className="card-body">
          <Link to={"/gallery/" + projectPath} style={{ textDecoration: 'none', color: 'inherit'}}>
            <h3 className="card-title">{metadata.title} <b>&rArr;</b></h3>
          </Link>
          <p className="card-text">{authorData.author + " " + authorData.authorMajor + " " + authorData.authorGrad}</p>
        </div>
      </div>
    </div>
  );
}

const getProjectPath = (metadata, authorData) => {
  const title = metadata.title;
  const username = authorData.username;

  return (title + "-" + username);
}