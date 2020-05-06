import React, { useState } from "react";
import "../style.css";
import classNames from "classnames";

const QuestionBox = ({ question, options, selected, correct }) => {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const correctSounds = [
    "sound_effects/hit2.wav",
    "sound_effects/hit3.wav",
    "sound_effects/hit4.wav",
    "sound_effects/hit5.wav",
    "sound_effects/hit7.wav",
    "sound_effects/hit8.wav",
    "sound_effects/hit10.wav",
    "sound_effects/crowd5.wav",
    "sound_effects/bat-strike.wav",
    "sound_effects/target-hit.wav",
  ];

  const incorrectSounds = [
    "sound_effects/crowd4.wav",
    "sound_effects/siren.wav",
    "sound_effects/shieldbreak.wav",
    "sound_effects/shell-impact.wav",
    "sound_effects/ricochet.wav",
    "sound_effects/mush-down.wav",
    "sound_effects/menu-no.wav",
    "sound_effects/honk.wav",
    "sound_effects/die2.wav",
    "sound_effects/die1.wav",
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
