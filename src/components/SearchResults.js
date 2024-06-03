import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults = [] }) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            <Link to={`/details/${result.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

