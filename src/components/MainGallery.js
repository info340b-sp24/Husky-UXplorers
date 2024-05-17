import React, { useState } from 'react';

let PROJECT_DATA;
let PORTFOLIO_DATA;

export default function MainGallery(props) {
  PROJECT_DATA = props.projectData;
  PORTFOLIO_DATA = props.portfolioData;

  const [filters, setFilters] = useState({
    type: {
      project: false,
      portfolio: false,
    },
    purpose: {
      school: false,
      client: false,
      fun: false,
    },
    tools: {
      adobeXD: false,
      figma: false,
      framer: false,
      sketch: false,
      webflow: false,
    },
    major: '',
  });

  const handleFilterChange = (category, key) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      },
    }));
  };

  const handleMajorChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      major: value,
    }));
  };

  const filteredProjects = PROJECT_DATA.filter((project) => {
    const filterType = Object.entries(filters.type).every(([key, value]) => !value || project.type?.includes(key));
    const filterPurpose = Object.entries(filters.purpose).every(([key, value]) => !value || project.purpose?.includes(key));
    const filterTools = Object.entries(filters.tools).every(([key, value]) => !value || project.tools?.includes(key));
    const filterMajor = !filters.major || project.major?.includes(filters.major);
    return filterType && filterPurpose && filterTools && filterMajor;
  });

  return (
    <div>
      <main className="container-fluid">
        <GalleryHeader />
        <GalleryContent
          filters={filters}
          onFilterChange={handleFilterChange}
          onMajorChange={handleMajorChange}
          projects={filteredProjects}
        />
      </main>
    </div>
  );
}

function GalleryHeader() {
  return (
    <header className="gallery">
      <h1>Gallery</h1>
    </header>
  );
}

function GalleryContent({ filters, onFilterChange, onMajorChange, projects }) {
  return (
    <div className="container-fluid">
      <GalleryFilter filters={filters} onFilterChange={onFilterChange} onMajorChange={onMajorChange} />
      <GalleryProjects projects={projects} />
      {/* <GalleryPortfolios /> */}
    </div>
  );
}

function GalleryProjects({ projects }) {
  return (
    <section className="projects container">
      <h2 className="mt-5">Projects</h2>
      <ProjectCardRow data={projects} />
    </section>
  );
}

function GalleryFilter({ filters, onFilterChange, onMajorChange }) {
  return (
    <div className="card" style={{ width: '15rem' }}>
      <div className="card-header">
        <h5 className="card-title">Filter</h5>
      </div>
      <div className="card-body">
        <div className="my-3">
          <h6 className="card-subtitle">Type</h6>
          <div>
            <input
              id="projectCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.type.project}
              onChange={() => onFilterChange('type', 'project')}
            />
            <label htmlFor="projectCheckbox" className="form-check-label"> Project</label>
          </div>
          <div>
            <input
              id="portfolioCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.type.portfolio}
              onChange={() => onFilterChange('type', 'portfolio')}
            />
            <label htmlFor="portfolioCheckbox" className="form-check-label"> Portfolio</label>
          </div>
        </div>
        <div className="my-3">
          <h6 className="card-subtitle">Purpose</h6>
          <div>
            <input
              id="schoolCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.purpose.school}
              onChange={() => onFilterChange('purpose', 'school')}
            />
            <label htmlFor="schoolCheckbox" className="form-check-label"> School</label>
          </div>
          <div>
            <input
              id="clientCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.purpose.client}
              onChange={() => onFilterChange('purpose', 'client')}
            />
            <label htmlFor="clientCheckbox" className="form-check-label"> Client</label>
          </div>
          <div>
            <input
              id="funCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.purpose.fun}
              onChange={() => onFilterChange('purpose', 'fun')}
            />
            <label htmlFor="funCheckbox" className="form-check-label"> Fun</label>
          </div>
        </div>
        <div className="my-3">
          <h6 className="card-subtitle">Tools</h6>
          <div>
            <input
              id="adobeCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.tools.adobeXD}
              onChange={() => onFilterChange('tools', 'adobeXD')}
            />
            <label htmlFor="adobeCheckbox" className="form-check-label"> Adobe XD</label>
          </div>
          <div>
            <input
              id="figmaCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.tools.figma}
              onChange={() => onFilterChange('tools', 'figma')}
            />
            <label htmlFor="figmaCheckbox" className="form-check-label"> Figma</label>
          </div>
          <div>
            <input
              id="framerCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.tools.framer}
              onChange={() => onFilterChange('tools', 'framer')}
            />
            <label htmlFor="framerCheckbox" className="form-check-label"> Framer</label>
          </div>
          <div>
            <input
              id="sketchCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.tools.sketch}
              onChange={() => onFilterChange('tools', 'sketch')}
            />
            <label htmlFor="sketchCheckbox" className="form-check-label"> Sketch</label>
          </div>
          <div>
            <input
              id="webflowCheckbox"
              type="checkbox"
              className="form-check-input"
              checked={filters.tools.webflow}
              onChange={() => onFilterChange('tools', 'webflow')}
            />
            <label htmlFor="webflowCheckbox" className="form-check-label"> Webflow</label>
          </div>
        </div>
        <div className="my-3">
          <h6 className="card-subtitle">Major</h6>
          <div>
            <input
              id="allRadioBtn"
              type="radio"
              className="form-check-input"
              checked={filters.major === 'all'}
              onChange={() => onMajorChange('all')}
            />
            <label htmlFor="allRadioBtn" className="form-check-label"> All</label>
          </div>
          <div>
            <input
              id="designRadioBtn"
              type="radio"
              className="form-check-input"
              checked={filters.major === 'design'}
              onChange={() => onMajorChange('design')}
            />
            <label htmlFor="designRadioBtn" className="form-check-label"> Design</label>
          </div>
          <div>
            <input
              id="hcdeRadioBtn"
              type="radio"
              className="form-check-input"
              checked={filters.major === 'hcde'}
              onChange={() => onMajorChange('hcde')}
            />
            <label htmlFor="hcdeRadioBtn" className="form-check-label"> HCDE</label>
          </div>
          <div>
            <input
              id="informaticsRadioBtn"
              type="radio"
              className="form-check-input"
              checked={filters.major === 'informatics'}
              onChange={() => onMajorChange('informatics')}
            />
            <label htmlFor="informaticsRadioBtn" className="form-check-label"> Informatics</label>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCardRow({ data }) {
  return (
    <div className="row row-cols-1 row-cols-md-4">
      {data.map((project) => (
        <div key={project.id} className="col">
          <ProjectCard data={project} />
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ data }) {
  const { metadata, authorData, intro } = data;
  return (
    <div className="card block">
      <a href="project_example.html">
        <img src={`img/projects/${intro

.imgSrc}`} className="card-img-top" alt={intro.imgAlt} />
      </a>
      <div className="card-body">
        <h3 className="card-title">{metadata.title}</h3>
        <img className="arrow" src="img/icons/arrow.png" alt="arrow icon" />
        <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
        <p className="card-text">{`${authorData.author} ${authorData.authorMajor} ${authorData.authorGrad}`}</p>
      </div>
    </div>
  );
}