import React from 'react';
import Questions from './Questions';
import QuestionCounter from './QuestionCounter';
import Options from './Options';
import PropTypes from 'prop-types';

function Athena(props) {

	  function renderOptions(key) {
    return (
      <Options
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

    return (
       <div className="athena">
         <QuestionCounter
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Questions content={props.question} />
         <ul className="options">
           {props.options.map(renderOptions)}
         </ul>
       </div>
    );
  }

  Athena.propTypes = {
    answer: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Athena;