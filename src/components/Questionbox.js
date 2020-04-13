import React, { useState } from "react";
import "../style.css";

const QuestionBox = ({ question, options, selected, correct }) => {
  const [answer, setAnswer] = useState(options);
  const [result, setResult] = useState("");

  const checkResult = (text) => {
    if (text === correct) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
    console.log("baaaaaaa", text);
  };

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      <div className="answer">
        {answer.map((text, index) => (
          <button
            key={index}
            className={
              result === ""
                ? "answerBtn"
                : result === "Correct"
                ? "correctBtn"
                : "incorrectBtn"
            }
            onClick={() => {
              setAnswer([text]);
              selected(text);
              checkResult(text);
              console.log(result, "meeeem");
            }}
          >
            {text}
          </button>
        ))}

        {result === "Incorrect" ? (
          <h3 className="incorrect">{result}</h3>
        ) : (
          <h3 className="correct">{result}</h3>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
