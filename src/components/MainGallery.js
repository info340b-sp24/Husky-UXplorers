import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function MainGallery(props) {
  const { projectData } = props;

  const [filters, setFilters] = useState({
    purpose: {
      school: false,
      hackathon: false,
      fun: false,
    },
    tools: {
      AdobeXD: false,
      Figma: false,
      Framer: false,
      Sketch: false,
      Webflow: false,
    },
    major: 'AllMajors',
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

  const filteredProjects = projectData.filter((project) => {
    const filterPurpose =
      ((!filters.purpose.school || project.metadata.typeOfProj === 'school') &&
      (!filters.purpose.hackathon || project.metadata.typeOfProj === 'hackathon') &&
      (!filters.purpose.fun || project.metadata.typeOfProj === 'fun'));
    const filterTools = Object.keys(filters.tools).every((key) => !filters.tools[key] || (project.technicalDetails.tools && project.technicalDetails.tools.includes(key)));
    // const filterMajor = !filters.major || project.authorData.authorMajor === filters.major;
    const filterMajor = filters.major === 'AllMajors' || project.authorData.authorMajor === filters.major;
    return filterPurpose && filterTools && filterMajor;
  });

  return (
    <div>
      <main className="container-fluid mx-5 mt-3">
        <GalleryHeader projectAmount={filteredProjects.length}/>
        <hr className="mb-4"/>
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

function GalleryHeader(props) {
  let projectAmount = props.projectAmount

  return (
    <header className="d-flex align-items-baseline pt-3">
      <h1>Gallery</h1>
      <p className="small-text m-3">Showing {projectAmount} items</p>
    </header>
  );
}

function GalleryContent({ filters, onFilterChange, onMajorChange, projects }) {
  return (
    <div className="d-flex flex-row mb-3 align-items-start">
      <GalleryFilter filters={filters} onFilterChange={onFilterChange} onMajorChange={onMajorChange} />
      <GalleryProjects projects={projects} />
    </div>
  );
}

function GalleryProjects({ projects }) {
  return (
    <div className="projects container">
      <ProjectCardRow data={projects} />
    </div>
  );
}

function GalleryFilter({ filters, onFilterChange, onMajorChange }) {
  return (
    <div className="card" style={{"width" : "15rem"}}>
      <div className="card-header">
        <h5 className="card-title">Filter</h5>
      </div>

      <div className="card-body  d-flex flex-wrap">
        <div className="my-2">
          <h6 className="card-subtitle">Purpose</h6>

          <div>
            <input id="schoolCheckbox" type="checkbox" className="form-check-input" checked={filters.purpose.school} onChange={() => onFilterChange('purpose', 'school')}/>
            <label htmlFor="schoolCheckbox" className="form-check-label"> School</label>
          </div>

          <div>
            <input id="clientCheckbox" type="checkbox" className="form-check-input" checked={filters.purpose.hackathon} onChange={() => onFilterChange('purpose', 'hackathon')}/>
            <label htmlFor="clientCheckbox" className="form-check-label"> Hackathon</label>
          </div>

          <div>
            <input id="funCheckbox" type="checkbox" className="form-check-input" checked={filters.purpose.fun} onChange={() => onFilterChange('purpose', 'fun')}/>
            <label htmlFor="funCheckbox" className="form-check-label"> Fun</label>
          </div>
        </div>

        <div className="my-3 mb-3">
          <h6 className="card-subtitle">Tools</h6>

          <div>
            <input id="adobeCheckbox" type="checkbox" className="form-check-input" checked={filters.tools.adobeXD} onChange={() => onFilterChange('tools', 'AdobeXD')}/>
            <label htmlFor="adobeCheckbox" className="form-check-label"> Adobe XD</label>
          </div>

          <div>
            <input id="figmaCheckbox" type="checkbox" className="form-check-input" checked={filters.tools.figma} onChange={() => onFilterChange('tools', 'Figma')}/>
            <label htmlFor="figmaCheckbox" className="form-check-label"> Figma</label>
          </div>

          <div>
            <input id="framerCheckbox" type="checkbox" className="form-check-input" checked={filters.tools.framer} onChange={() => onFilterChange('tools', 'Framer')}/>
            <label htmlFor="framerCheckbox" className="form-check-label"> Framer</label>
          </div>

          <div>
            <input id="sketchCheckbox" type="checkbox" className="form-check-input" checked={filters.tools.sketch} onChange={() => onFilterChange('tools', 'Sketch')}/>
            <label htmlFor="sketchCheckbox" className="form-check-label"> Sketch</label>
          </div>

          <div>
            <input id="webflowCheckbox" type="checkbox" className="form-check-input" checked={filters.tools.webflow} onChange={() => onFilterChange('tools', 'Webflow')}/>
            <label htmlFor="webflowCheckbox" className="form-check-label"> Webflow</label>
          </div>
        </div>

        <div className="my-3 mb-3">
          <h6 className="card-subtitle">Major</h6>

          <div>
            <input id="allRadioBtn" type="radio" className="form-check-input" checked={filters.authorMajor === 'AllMajors'}
              onChange={() => onMajorChange('AllMajors')}/>
            <label htmlFor="allRadioBtn" className="form-check-label"> All</label>
          </div>

          <div>
            <input id="designRadioBtn" type="radio" className="form-check-input" checked={filters.authorMajor === 'Design'}
              onChange={() => onMajorChange('Design')} />
            <label htmlFor="designRadioBtn" className="form-check-label"> Design</label>
          </div>

          <div>
            <input id="hcdeRadioBtn" type="radio" className="form-check-input" checked={filters.authorMajor === 'HCDE'}
              onChange={() => onMajorChange('HCDE')}/>
            <label htmlFor="hcdeRadioBtn" className="form-check-label"> HCDE</label>
          </div>

          <div>
            <input id="informaticsRadioBtn" type="radio" className="form-check-input" checked={filters.authorMajor === 'INFO'}
              onChange={() => onMajorChange('INFO')}/>
            <label htmlFor="informaticsRadioBtn" className="form-check-label"> Informatics</label>
          </div>

        </div>
      </div>
    </div>
  )
}

function ProjectCardRow({ data }) {
  const row = data.map((currData) => {
    return (
      <ProjectCard
        data={currData}
        key={currData.metadata.title + currData.authorData.author}
      />
    );
  });

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {row}
    </div>
  );
}

function ProjectCard({ data }) {
  const { metadata, authorData, intro } = data;

  return (
    <div className="col">
      <div className="card block mb-3">
        <Link to={"/gallery/" + metadata.title}>
          <img src={getCorrectImgSrc(intro.imgSrc)} className="card-img-top" alt={intro.imgAlt} />
        </Link>
        <div className="card-body">
          <Link to={"/gallery/" + metadata.title} style={{ textDecoration: 'none', color: 'inherit'}}>
            <h3 className="card-title">{metadata.title} <b>&rArr;</b></h3>
          </Link>
          <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
          <p className="card-text">{authorData.author + " " + authorData.authorMajor + " " + authorData.authorGrad}</p>
        </div>
      </div>
    </div>
  );
}

function getCorrectImgSrc (imgSrc) {
  if (!imgSrc.includes("https://firebasestorage.googleapis.com/")) {
    imgSrc = "img/projects/" + imgSrc;
  }
  return imgSrc;
}