//Contains Quiz Questions
import React from "react";
import PropTypes from "prop-types";

  function Questions(props) {
    return (
      <h2 className="questions">{props.content}</h2>
    );
  }

  Questions.propTypes = {
    content: PropTypes.string.isRequired
  };

export default Questions;

