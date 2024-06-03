import _ from 'lodash';
import { useParams } from 'react-router-dom';
// import PROJECT_DATA from '../data/projects.json';
import { Link } from 'react-router-dom';

export default function ProjectPage(props) {
  const { projectData, getCorrectImgSrc } = props;
  const { projectName } = useParams();
  let project = _.find(projectData, (project) => _.get(project, 'metadata.title') === projectName);

  return (
    <div className="m-5">
      <p>
        <Link to="/gallery" style={{color: 'inherit'}}>&lArr; Back</Link>
      </p>
      <div className="d-flex" style={{"gap" : "1rem"}}>
        <ProjectInfo data={project}/>
        <ProjectImage data={project} getCorrectImgSrc={getCorrectImgSrc} />
      </div>
    </div>
  )
}

function ProjectImage({ data, getCorrectImgSrc }) {
  const { intro } = data;
  const imgSrc = getCorrectImgSrc(intro.imgSrc);

  return (
    <img src={imgSrc}
      className="rounded"
      style={{"width" : "50%", "height" : "50%"}}
      alt={intro.imgAlt}
    />
  )
}

function ProjectInfo({ data }) {
  const { authorData, intro, metadata, problem, solution, technicalDetails } = data;
  const toolsUsed = technicalDetails.tools.join(", ");
  let links = authorData.links;

  if (links) {
    links = authorData.links.map((link, index) => {
      let workingLink;

      if(link.includes("linked.in")) {
        workingLink = <a key={index} href={link} target="_blank" rel="noreferrer">LinkedIn</a>
      } else if (link.includes("behance.net")) {
        workingLink = <a key={index} href={link} target="_blank" rel="noreferrer">Behance</a>
      } else {
        workingLink = <a key={index} href={link} target="_blank" rel="noreferrer">{authorData.author}'s Website</a>
      }

      return workingLink;
    });
  } else {
    links = <p>None</p>
  }

  return (
    <div className="card p-4" style={{"width" : "30rem"}}>
      <div className="d-flex" style={{"gap" : "0.2rem"}}>
        <p className="py-1 px-3 text-light bg-purple rounded-pill">
          {authorData.authorMajor}
        </p>
        <p className="py-1 px-3 text-light bg-purple rounded-pill">
          {"For " + metadata.typeOfProj.charAt(0).toUpperCase() + metadata.typeOfProj.slice(1)}
        </p>
      </div>
      <h1>{metadata.title}</h1>
      <div className="d-flex align-items-center">
        <img className="profile-pic rounded-circle mx-3"
          style={Object.assign({"width" : "50px"}, {"height" : "50px"})}
          src={"/img/profiles/" + authorData.authorPicture}
          alt={authorData.username + "'s profile picture"}
        />
        <h5 className="heading-body-typeface">{authorData.author}</h5>
      </div>
      <p>{intro.description}</p>
      <p><b>Problem</b></p>
      <p>{problem.description}</p>
      <p><b>Solution</b></p>
      <p>{solution.description}</p>
      <hr />
      <h6><b>Tools</b></h6>
      <p>{toolsUsed}</p>
      <h6><b>Links</b></h6>
      {links}
    </div>
  )
}