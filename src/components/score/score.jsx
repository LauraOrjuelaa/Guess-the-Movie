
import PropTypes from 'prop-types';

const Score = ({ score }) => {
  return (
    <div className="score">
      <p>Score: {score}</p>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
