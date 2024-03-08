import { useState } from 'react';
import PropTypes from 'prop-types';

const Answer = ({ checkAnswer }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAnswer(inputValue.trim().toLowerCase());
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your answer"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

Answer.propTypes = {
  checkAnswer: PropTypes.func.isRequired,
};

export default Answer;
