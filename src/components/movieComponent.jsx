import React from 'react';

const MovieComponent = ({match}) => {

  return (
  <h1>Movie {match.params.id}</h1>);
}
 
export default MovieComponent;
