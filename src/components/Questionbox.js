import React, { useState } from "react";
import "../style.css";
import classNames from "classnames";

const QuestionBox = ({ question, options, selected, correct }) => {
  const [answer, setAnswer] = useState("");
  const [index, setIndex] = useState("");
  const [result, setResult] = useState("");

  const determineResult = (text) => {
    if (text === correct) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
  };

  const bullshit = classNames({
    hidden: answer !== "",
    answerBtn: result === "",
  });

  const bullshit2 = classNames({
    correctBtn: result === "Correct",
    incorrectBtn: result === "Incorrect",
  });

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      <div className="answer">
        {options.map((text, index) => (
          <button
            key={index}
            className={index !== answer ? bullshit : bullshit2}
            onClick={() => {
              setAnswer(index);
              selected(text);
              determineResult(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
