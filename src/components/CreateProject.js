import React, { useState, useEffect } from 'react';

export default function CreateProject (props) {
  const { uploadProject } = props;

  return (
    <div>
      <MainCreateProject uploadProject={uploadProject}/>
    </div>
  );
}

function MainCreateProject (props) {
  const { uploadProject } = props;

  const init = {
    authorData : {
      author: "Jasmine Rivers",
      username: "jazzyr",
      authorMajor: "INFO",
      authorGrad: 2026,
      links: [
        "linked.in/sjfj",
        "jasminerivers.com"
      ]
    },
    metadata : {
      title : "",
      typeOfProj : ""
    },
    intro : {
      description : "",
      imgSrc : "",
      imgAlt: "",
    },
    problem : {
      description : ""
    },
    solution: {
      description : ""
    },
    technical: {
      date: "",
      tools: []
    }
  }
  // saves each section of the form in a single object
  const [ newProject, setNewProject ] = useState(init);

  // tools state
  const [tools, setTools] = useState([]);

  /** Toggles a single tool to be true or false */
  const handleChecked = (event) => {
    const { name, checked } = event.target;

    // if the checkbox was checked
    if (checked) {
      tools.push(name);
    } else if (!checked) {  // if the checkbox was unchecked
      const index = tools.indexOf(name);
      tools.splice(index, 1);
    }

    const copy = [...tools];
    setTools(copy);
  }

  // const handleToolsChange = function (toolsObj) {
  //   const toolsKeys = Object.keys(toolsObj);
  //   const toolsArr = toolsKeys.map((key) => {
  //     const tool = toolsObj[key];
  //     if (tool === true) {
  //       return tool;
  //     }
  //   });
  //   const projCopy = {...newProject};
  //   projCopy.technicalDetails.tools = toolsArr;
  //   setNewProject(projCopy);
  // }

  // updates new Project's fields based on inputs
  const handleChange = function (event) {
    let copy = [ ...newProject ];
    const { name, value } = event.target;

    setNewProject(copy);
  }

  const handleImageChange = function (event) {
    // save image to firebase storage and get download url

  }

  // adds project to firebase database
  const handleSubmit = function (event) {
    event.preventDefault();
    uploadProject(newProject);
    setNewProject({});
  }

  return (
    <main className="container-fluid">
      <h1>New Project</h1>
      <p className="small-text">Enter in information to post a new project</p>
      <form>
        <Intro newProjectData={newProject} changeCallback={handleChange}
        changeImageCallback={handleImageChange} />
        <Descriptions newProjectData={newProject} changeCallback={handleChange} />
        <TechnicalDetails newProjectData={newProject} changeCallback={handleChange}
        tools={tools} changeTools={handleChecked} />

        <button
          className="rounded px-4 py-3 bg-dark text-white"
          href="profile-finished.html"
          type="submit"
          onChange={handleSubmit}
        >
          Submit Project
        </button>
      </form>
    </main>
  )
}

function Intro ({ newProjectData, changeCallback, changeImageCallback }) {
  const newProject = newProjectData;
  const handleChange = changeCallback;
  const handleImageChange = changeImageCallback;

  return (
    <section>
      <h2>Project Introduction</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-name"
        placeholder="ex: Cooking Master App"
        name="metadata-title"
        onChange={handleChange}
        value={newProject.metadata.title}/>
        <label htmlFor="project-name">Project Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-type"
        placeholder="ex: School"
        name = "metadata-typeOfProj"
        onChange={handleChange}
        value={newProject.metadata.typeOfProj}/>
        <label htmlFor="project-type">Project for (School, Fun, Client)</label>
      </div>

      <div className="form-floating mb-3">
        <textarea className="form-control"
          placeholder="Write a Description"
          id="project-description"
          style={{height: "100px"}}
          name = "intro-description"
          onChange={handleChange}
          value={newProject.intro.description}
          >
        </textarea>
        <label htmlFor="project-description">Give an introduction to the project</label>
      </div>

      <div className="mb-3">
        <label htmlFor="project-images" className="form-label">Add images</label>
        <input className="form-control" type="file" id="project-images"
        name="metadata-title"
        onChange={handleImageChange}
        value={newProject.metadata.title} />
      </div>
    </section>
  );
}

function Descriptions ({newProjectData, changeCallback, ...props}) {
  const newProject = newProjectData;
  const handleChange = changeCallback;

  return (
    <div>
      <section>
        <h2>Problem</h2>
        <div className="form-floating mb-3">
          <textarea className="form-control"
            placeholder="Write a Description"
            id="project-problem"
            style={{height: "100px"}}
            type="text"
            name = "problem-description"
            onChange={handleChange}
            value={newProject.problem.description}>
          </textarea>
          <label htmlFor="project-problem">Give a description of the problem</label>
        </div>
      </section>
      <section>
        <h2>Solution</h2>
        <div className="form-floating mb-3">
          <textarea className="form-control"
            placeholder="Write a Description"
            id="project-solution"
            style={{height: "100px"}}
            name = "solution-description"
            onChange={handleChange}
            value={newProject.solution.description}>
          </textarea>
          <label htmlFor="project-solution">Give a description of the solution</label>
        </div>
      </section>
    </div>
  );
}

function TechnicalDetails ({newProjectData, changeCallback, tools,
  changeTools }) {
  const newProject = newProjectData;
  const handleChange = changeCallback;
  const handleChecked = changeTools;

  return (
    <section>
      <h2>Technical Details</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-date"
        placeholder="ex: March 2021"
        name = "technical-date"
        onChange={handleChange}
        value={newProject.technical.date} />
        <label htmlFor="project-date">Month and year of project</label>
      </div>
      <div className="mb-3">
        <h3 className="fs-5">Tools Used</h3>

        <input type="checkbox" className="btn-check" id="btn-check-1"
        autoComplete="off" checked={tools.Figma} onChange={handleChecked}
        name="Figma" />
        <label className="btn" htmlFor="btn-check-1">Figma</label>

        <input type="checkbox" className="btn-check" id="btn-check-2"
        autoComplete="off" checked={tools["Adobe XD"]} onChange={handleChecked}
        name="Adobe XD" />
        <label className="btn" htmlFor="btn-check-2">Adobe XD</label>

        <input type="checkbox" className="btn-check" id="btn-check-3"
        autoComplete="off" checked={tools.Framer} onChange={handleChecked}
        name="Framer" />
        <label className="btn" htmlFor="btn-check-3">Framer</label>

        <input type="checkbox" className="btn-check" id="btn-check-4"
        autoComplete="off" checked={tools.Webflow} onChange={handleChecked}
        name="Webflow" />
        <label className="btn" htmlFor="btn-check-4">WebFlow</label>

        <input type="checkbox" className="btn-check" id="btn-check-5"
        autoComplete="off" checked={tools.Sketch} onChange={handleChecked}
        name="Sketch" />
        <label className="btn" htmlFor="btn-check-5">Sketch</label>
      </div>
    </section>
  );
}