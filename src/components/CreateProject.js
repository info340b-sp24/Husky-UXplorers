import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref as dataRef, push, set, onValue } from 'firebase/database';
import { getStorage, getDownloadURL, ref as storageRef } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';

const INIT_PROJECT = {
  authorData : {
    author: "",
    username: "",
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
  technicalDetails: {
    date: "",
    tools: []
  }
}

export default function CreateProject (props) {
  const navigateTo = useNavigate();
  const { uploadProject, currUser } = props;

  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userId = currUser.userId;
    const db = getDatabase();
    const userRef = dataRef(db, "users/" + userId);

    const unregisterFunction = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      console.log(userData);
      setUserData(userData);
    });

    const cleanup = () => {
      unregisterFunction();
    }

    return cleanup;
  }, [currUser]);

  updateAuthorData(userData);

  const [ newProject, setNewProject ] = useState(INIT_PROJECT);
  const [tools, setTools] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handleChecked = (event) => {
    const { name, checked } = event.target;
    let copy = [...tools];

    if (checked) {
      copy.push(name);
    } else if (!checked) {
      const index = copy.indexOf(name);
      copy.splice(index, 1);
    }

    setTools(copy);
  }

  const handleChange = function (event) {
    const { name, value } = event.target;

    const section = name.split("-")[0];
    const key = name.split("-")[1];

    let copy = {...newProject};
    copy[section][key] = value;
    copy.technicalDetails.tools = tools;

    console.log(copy);
    setNewProject(copy);
  }

  const handleImageChange = async (event) => {
    let { files } = event.target;
    if (files.length > 0) {
      const imageFile = files[0];

      const storage = getStorage();
      const projectTitle = newProject.metadata.title;
      const imageRef = storageRef(storage, "projectImages/" + projectTitle + ".png");
      await uploadBytes(imageRef, imageFile);

      const downloadURL = await getDownloadURL(imageRef);
      setImageUrl(downloadURL);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    let copy = { ...newProject };
    copy.technicalDetails.tools = tools;
    copy.intro.imgSrc = imageUrl;
  
    // Here, you need to push the new project data to the database
    const db = getDatabase();
    const projectsRef = dataRef(db, `users/${currUser.userId}/projects`);
    const newProjectRef = push(projectsRef); // eslint-disable-line
    await set(newProjectRef, copy); 
  
    // Reset form fields and navigate to the profile page
    setNewProject(INIT_PROJECT);
    navigateTo("../index");
  }

  return (
    <main className="container-fluid">
      <h1>New Project</h1>
      <p className="small-text">Enter in information to post a new project</p>
      <form onSubmit={handleSubmit} >
        <Intro newProjectData={newProject} changeCallback={handleChange}
        changeImageCallback={handleImageChange} />
        <Descriptions newProjectData={newProject} changeCallback={handleChange} />
        <TechnicalDetails newProjectData={newProject} changeCallback={handleChange}
        tools={tools} changeTools={handleChecked} />

        <button
          className="rounded px-4 py-3 bg-dark text-white"
          href="profile-finished.html"
          type="submit"
        >
          Submit Project
        </button>
      </form>
    </main>
  )
}

const updateAuthorData = (userData) => {
  const {graduatingYear, userImg, username, usertag, major } = userData;

  INIT_PROJECT.authorData.author = username;
  INIT_PROJECT.authorData.username = usertag;
  INIT_PROJECT.authorData.authorGrad = graduatingYear;
  INIT_PROJECT.authorData.authorMajor = major;
  INIT_PROJECT.authorData.authorPicture = userImg;
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
        value={newProject.metadata.title}
        required/>
        <label htmlFor="project-name">Project Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="project-type"
        placeholder="ex: School"
        name = "metadata-typeOfProj"
        onChange={handleChange}
        value={newProject.metadata.typeOfProj}
        required/>
        <label htmlFor="project-type">Project for (School, Fun, Client, Hackathon)</label>
      </div>

      <div className="form-floating mb-3">
        <textarea className="form-control"
          placeholder="Write a Description"
          id="project-description"
          style={{height: "100px"}}
          name = "intro-description"
          onChange={handleChange}
          value={newProject.intro.description}
          required
          >
        </textarea>
        <label htmlFor="project-description">Give an introduction to the project</label>
      </div>

      <div className="mb-3">
        <label htmlFor="project-images" className="form-label">Add images</label>
        <input className="form-control" type="file" id="project-images"
        name="intro.imgSrc"
        onChange={handleImageChange}
        required />
      </div>
    </section>
  );
}

function Descriptions ({newProjectData, changeCallback }) {
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
            value={newProject.problem.description}
            required >
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
            value={newProject.solution.description}
            required >
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
        name = "technicalDetails-date"
        onChange={handleChange}
        value={newProject.technicalDetails.date}
        required />
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