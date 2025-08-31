import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div className="detail-container">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="video-container">
        <iframe
          src={movie.trailerLink}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <Link to="/" className="btn">⬅ Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDetail;
