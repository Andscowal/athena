//Contains answers to the quiz questions
 import React from 'react';
 import PropTypes from 'prop-types';

  function Options(props) {
    return (
      <li className="option">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  Options.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Options;