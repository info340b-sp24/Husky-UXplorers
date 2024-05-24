import _ from 'lodash';
import { useParams } from 'react-router-dom';
import PROJECT_DATA from '../data/projects.json';

export default function ProjectPage(props) {

  const { projectName } = useParams();
  console.log(projectName);
  let project = _.find(PROJECT_DATA, (project) => _.get(project, 'metadata.title') == projectName);

  return (
    <div className="m-5">
      <ProjectInfo data={project}/>
      <p>
        Hiiii in progress.
      </p>
    </div>
  )
}

function ProjectInfo({ data }) {
  const { metadata, authorData, intro } = data;

  return (
    <div>
      <h1>{metadata.title}</h1>
      <div className="img-left-container align-items-center">
        <img className="profile-pic rounded-circle mx-3" style={Object.assign({"width" : "50px"}, {"height" : "50px"})} src={"/img/profiles/" + authorData.authorPicture}/>
        <h3>{authorData.author}</h3>
      </div>
    </div>
  )

}