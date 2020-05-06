import React, { useState } from "react";
import "../style.css";
import classNames from "classnames";

const QuestionBox = ({ question, options, selected, correct }) => {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const correctSounds = [
    "hit2.wav",
    "hit3.wav",
    "hit4.wav",
    "hit5.wav",
    "hit7.wav",
    "hit8.wav",
    "hit10.wav",
    "crowd5.wav",
    "bat-strike.wav",
    "target-hit.wav",
  ];

  const incorrectSounds = [
    "crowd4.wav",
    "siren.wav",
    "shieldbreak.wav",
    "shell-impact.wav",
    "ricochet.wav",
    "mush-down.wav",
    "menu-no.wav",
    "honk.wav",
    "die2.wav",
    "die1.wav",
  ];

  const correctSound =
    correctSounds[Math.floor(Math.random() * correctSounds.length)];

  const incorrectSound =
    incorrectSounds[Math.floor(Math.random() * incorrectSounds.length)];

  const determineResult = (text) => {
    //only make sound effect + change color of button if user hasn't chosen a button yet
    if (answer === "") {
      if (text === correct) {
        setResult("Correct");
        new Audio(correctSound).play();
      } else {
        setResult("Incorrect");
        new Audio(incorrectSound).play();
      }
    }
  };

  //only send text of button to main component if user hasn't selected anything before
  const noDoubleClick = (text) => {
    if (answer === "") {
      selected(text);
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
              determineResult(text);
              noDoubleClick(text);
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
