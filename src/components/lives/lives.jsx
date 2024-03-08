
import PropTypes from 'prop-types';

const Lives = ({ lives }) => {
  return (
    <div className="lives">
      <p>Lives: {lives}</p>
    </div>
  );
};

Lives.propTypes = {
  lives: PropTypes.number.isRequired,
};

export default Lives;
