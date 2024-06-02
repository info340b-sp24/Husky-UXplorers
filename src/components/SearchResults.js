import React from 'react';
import { useLocation } from 'react-router-dom';
import PROJECT_DATA from '../data/projects.json';
import GalleryProjects from './MainGallery.js';

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query').toLowerCase();

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.metadata.title.toLowerCase().includes(query) ||
    project.authorData.author.toLowerCase().includes(query) ||
    project.intro.description.toLowerCase().includes(query)
  );

  return (
    <div>
      <main className="container-fluid mx-5 mt-3">
        <h1>Search Results</h1>
        <p>Showing {filteredProjects.length} results for "{query}"</p>
        <GalleryProjects projects={filteredProjects} />
      </main>
    </div>
  );
}