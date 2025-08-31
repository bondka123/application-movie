import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../data/movies';

const MovieList = () => {
  return (
    <div className="container">
      <h1>🎬 Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`} className="btn">Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
