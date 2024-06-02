import React, { useState } from 'react';

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
      "author": "Jasmine Rivers",
      "username": "jazzyr",
      "authorMajor": "INFO",
      "authorGrad": 2026,
      "links": [
        "linked.in/sjfj",
        "jasminerivers.com"
      ]
    }
  }

  // saves each section of the form in a single object
  const [ newProject, setNewProject ] = useState(init);
  console.log(newProject);

  // updates new Project's fields based on inputs
  const handleChange = function (section, key, value) {
    let copy = [ ...newProject ];

    /** TO BE FILLED IN */
    if (section === "metadata") {
      // "metadata": {
      //   "timestamp": 1,
      //   "title": "Ostomi",
      //   "typeOfProj": "school"
      // }
      copy[key] = value;
    } else if (section === "intro") {

    } else if (section === "problem") {

    } else if (section === "solution") {

    } else if (section === "technicalDetails") {
      if (key === "date") {

      } else if (key === "tools") {
        // push value into tools array

      }
    }

    setNewProject(copy);
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
        <IntroCreateProject handleChange={handleChange} />
        <DescribeCreateProject />
        <TechnicalCreateProject />

        <button
          className="rounded px-4 py-3 bg-dark text-white"
          href="profile-finished.html"
          type="submit"
          onSubmit={handleSubmit}
        >
          Submit Project
        </button>
      </form>
    </main>
  );
}

function IntroCreateProject (props) {
  const handleChange = props.handleChange;
  const [typeSelected, setTypeSelected] = useState({});
  const changeTypeSelected = (newType) => {
    setTypeSelected(newType);
  }
  const [title, setTitle] = useState("");

  return (
    <section>
      <h2>Project Introduction</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-name"
        handleChange={() => {handleChange("metadata", "title", title)}}
        placeholder="ex: Cooking Master App" value={title}/>
        <label htmlFor="project-name">Project Name</label>
      </div>

      <TypeOfProject typeSelected={typeSelected} changeTypeSelected={changeTypeSelected}/>

      <div className="form-floating mb-3">
        <textarea className="form-control"
          placeholder="Write a Description"
          id="project-description"
          style={{height: "100px"}}>
        </textarea>
        <label htmlFor="project-description">Give an introduction to the project</label>
      </div>

      <div className="mb-3">
        <label htmlFor="project-images" className="form-label">Add images</label>
        <input className="form-control" type="file" id="project-images" />
      </div>
    </section>
  );
}

function TypeOfProject (props) {
  const typeSelected = props.typeSelected;
  const changeTypeSelected = props.changeTypeSelected;
  const handleChange = (newType) => {
    changeTypeSelected(newType);
  }

  return(
    <div>
      <label htmlFor="project-type-option1" className="form-label mb-3">Type of Project: </label>
      <div className="form-check form-check-inline mx-2">
        <input className="form-check-input" type="radio"
        id="project-type-option1" value="For School" name="project-type"
        checked={typeSelected === "For School"} onChange={() => { handleChange("For School") }}/>
        <label className="form-check-label" htmlFor="project-type-option1">For School</label>
      </div>
      <div className="form-check form-check-inline mx-2">
        <input className="form-check-input" type="radio"
        id="project-type-option2" value="For a Client" name="project-type"
        checked={typeSelected === "For a Client"} onChange={() => { handleChange("For a Client") }}/>
        <label className="form-check-label" htmlFor="project-type-option2">For a Client</label>
      </div>
      <div className="form-check form-check-inline mx-2">
        <input className="form-check-input" type="radio"
        id="project-type-option3" value="For Fun" name="project-type"
        checked={typeSelected === "For Fun"} onChange={() => { handleChange("For Fun") }}/>
        <label className="form-check-label" htmlFor="project-type-option3">For Fun</label>
      </div>
    </div>
  );
}

function DescribeCreateProject (props) {
  return (
    <div>
      <section>
        <h2>Problem</h2>
        <div className="form-floating mb-3">
          <textarea className="form-control"
            placeholder="Write a Description"
            id="project-problem"
            style={{height: "100px"}}
            type="text">
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
            style={{height: "100px"}}>
          </textarea>
          <label htmlFor="project-solution">Give a description of the solution</label>
        </div>
      </section>
    </div>
  );
}

function TechnicalCreateProject (props) {
  return (
    <section>
      <h2>Technical Details</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-date" placeholder="ex: March 2021" />
        <label htmlFor="project-date">Month and year of project</label>
      </div>
      <div className="mb-3">
        <h3 className="fs-5">Tools Used</h3>

        <input type="checkbox" className="btn-check" id="btn-check-1" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-1">Figma</label>

        <input type="checkbox" className="btn-check" id="btn-check-2" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-2">Adobe XD</label>

        <input type="checkbox" className="btn-check" id="btn-check-3" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-3">Framer</label>

        <input type="checkbox" className="btn-check" id="btn-check-4" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-4">WebFlow</label>

        <input type="checkbox" className="btn-check" id="btn-check-5" autoComplete="off" />
        <label className="btn" htmlFor="btn-check-5">Sketch</label>
      </div>
    </section>
  );
}