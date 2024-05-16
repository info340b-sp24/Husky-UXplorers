import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

let PROJECT_DATA;
let PORTFOLIO_DATA;

export default function Gallery (props) {
  PROJECT_DATA = props.projectData;
  PORTFOLIO_DATA = props.portfolioData;

  return (
    <div>
      <NavBar />
      <MainGallery/>
      <Footer />
    </div>
  );
}

function MainGallery (props) {
  return (
    <main className = "container-fluid">
      <GalleryHeader/>
      <GalleryContent />
    </main>
  )
}

function GalleryHeader (props) {
  return (
    <header className="gallery">
      <h1>Gallery</h1>
    </header>
  );
}

function GalleryContent(props) {
  return (
    <div>
      <GalleryProjects />
      {/* <GalleryPortfolios /> */}
    </div>
  );
}

function GalleryProjects(props) {

  return (
    <section className="projects container">
      <h2 className="mt-5">Projects</h2>
      <ProjectCardRow data={PROJECT_DATA} />
    </section>
  );
}

// function GalleryPortfolios(props) {
//   console.log(PORTFOLIO_DATA);
//   return (
//     <section className="projects container">
//       <h2 className="mt-5">Portfolios</h2>
//       <PortfolioCardRow data={PORTFOLIO_DATA} />
//     </section>
//   )
// }

function ProjectCardRow(props) {
  let data = props.data;
  const row = data.map((currData) => {
    let {metadata, authorData} = currData;
    return (
      <ProjectCard
        data={currData}
        key={authorData.author + metadata.title}
      />
    );
  });

  return (
    <div className="row row-cols-1 row-cols-md-4">
      {row}
    </div>
  )
}

function ProjectCard(props) {
  let {metadata, authorData, intro} = props.data;

  return (
    <div className="col">
      <div className="card block">
        <a href="project_example.html">
          <img src={"img/projects/" + intro.imgSrc} className="card-img-top" alt={intro.imgAlt} />
        </a>
        <div className="card-body">
          <h3 className="card-title">{metadata.title}</h3>
          <img className="arrow" src="img/icons/arrow.png" />
          <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
          <p className="card-text">{authorData.author + " " + authorData.authorMajor + " " + authorData.authorGrad}</p>
>>>>>>> b260c04662f4b58ade8f564156dbb49947237e3e
        </div>
      </div>
    </div>
  );
}

// function GalleryPortfolios(props) {
//   return (
//     <section className="portfolios container">
//       <h2 className="mt-5">Portfolios</h2>
//       <div className="row row-cols-1 row-cols-md-4">
//         <div className="col">
//           <div className="card block">
//             <a href="portfolio_example.html">
//               <img src="img/portfolios/port1.jpeg" className="card-img-top" alt="Maya Patel's Portfolio" />
//             </a>
//             <div className="card-body">
//               <h3 className="card-title">Maya Patel </h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">HCDE '26</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card block">
//             <img src="img/portfolios/port2.jpeg" className="card-img-top" alt="Noah Martinez's Portfolio" />
//             <div className="card-body">
//               <h3 className="card-title">Noah Martinez</h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">Info '25</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card block">
//             <img src="img/portfolios/port3.jpeg" className="card-img-top" alt="Alec Santiago's Portfolio" />
//             <div className="card-body">
//               <h3 className="card-title">Alec Santiago</h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">Info '24</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card block">
//             <img src="img/portfolios/port4.jpeg" className="card-img-top" alt="Ava Kim's Portfolio" />
//             <div className="card-body">
//               <h3 className="card-title">Ava Kim</h3>
//               <img className="arrow" src="img/icons/arrow.png" />
//               <img className="bookmark" src="img/icons/bookmark-white.png" alt="bookmark" />
//               <p className="card-text">IxD '25</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
