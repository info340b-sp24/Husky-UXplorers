import _ from 'lodash';
import { useParams } from 'react-router-dom';
import PROJECT_DATA from '../data/projects.json';

export default function ProjectPage(props) {

  const { projectName } = useParams();
  let project = _.find(PROJECT_DATA, {title: projectName});

  return (
    <div>
      <p>
        Hiiii in progress.
      </p>
    </div>
  )
}