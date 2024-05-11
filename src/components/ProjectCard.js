const projects = [
  {
    title:"Ostomi",
    author:"Jasmine Rivers",
    major:"INFO",
    grad:"26",
    img:"p1.jpg",
    imgAlt:"Ostomi App Mockup"
  }
];

function ProjectCard () {
  currProject = projects[0];
  // in the future the current card will be passed down as a prop from the component
  // that creates a list of project cards.

  return (
    <div className="card block">
      <a href="project_example.html">
        <img src={"img/projects/" + currProject.img} className="card-img-top" alt={currProject.imgAlt} />
      </a>
      <div className="card-body">
        <h3 className="card-title">{currProject.name}</h3>
        <img className="arrow" src="img/icons/arrow.png" />
        <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
        <p className="card-text">{currProject.author + " " + currProject.major + " '" + currProject.grad}</p>
      </div>
    </div>
  );
}