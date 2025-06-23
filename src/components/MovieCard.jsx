import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ image, episode, movieName }) => {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={image} alt={movieName} />
        <p className="episode">{episode}</p>
      </div>
      <h3 className="movieName">{movieName}</h3>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};

export default MovieCard; 