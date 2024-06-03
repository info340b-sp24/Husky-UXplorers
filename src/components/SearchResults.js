import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const SearchResults = ({ projectData, getCorrectImgSrc }) => {
 const location = useLocation();
 const query = new URLSearchParams(location.search).get('query') || '';


 console.log('Search query:', query);
 console.log('Project data:', projectData);


 const filteredProjects = projectData.filter((project) => {
   return project.metadata.title.toLowerCase().includes(query.toLowerCase());
 });


 console.log('Filtered projects:', filteredProjects);


 const projectCount = filteredProjects.length;


 const ProjectRows = () => {
   const rows = [];
   for (let i = 0; i < filteredProjects.length; i += 3) {
     const row = filteredProjects.slice(i, i + 3).map((project) => (
       <div className="col" key={project.metadata.title}>
         <div className="card block mb-3">
           <Link to={`/gallery/${project.metadata.title}`}>
             <img src={getCorrectImgSrc(project.intro.imgSrc)} className="card-img-top" alt={project.intro.imgAlt} />
           </Link>
           <div className="card-body">
             <Link to={`/gallery/${project.metadata.title}`} style={{ textDecoration: 'none', color: 'inherit'}}>
               <h3 className="card-title">{project.metadata.title} <b>&rArr;</b></h3>
             </Link>
             <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
             <p className="card-text">{project.authorData.author + " " + project.authorData.authorMajor + " " + project.authorData.authorGrad}</p>
           </div>
         </div>
       </div>
     ));
     rows.push(<div className="row row-cols-1 row-cols-md-3" key={`row-${i / 3}`}>{row}</div>);
   }
   return rows;
 };


 return (
   <div>
     <div className="d-flex align-items-baseline pt-3">
       <h1>Results</h1>
       <p className="small-text m-3">Showing {projectCount} items</p>
     </div>
     <hr />
     <div className="container">
       {projectCount > 0 ? (
         <ProjectRows />
       ) : (
         <p>No results found.</p>
       )}
     </div>
   </div>
 );
};


export default SearchResults;
