
import PropTypes from 'prop-types';

const Movie = ({ emoji }) => {
  return <div className="movie">{emoji}</div>;
};

Movie.propTypes = {
  emoji: PropTypes.string.isRequired,
};

export default Movie;
