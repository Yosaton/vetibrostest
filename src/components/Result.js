import React from "react";

const Result = ({ score, playAgain, chosenCharacter }) => {
  const myDate = new Date();
  const newDate = myDate.toLocaleString();
  const chosenCharacterName = chosenCharacter.alias;

  const victorySongs = [
    "zelda.mp3",
    "samus.mp3",
    "mario.mp3",
    "captain_falcon.mp3",
    "donkey_kong.mp3",
    "fox.mp3",
    "kirby.mp3",
    "ness.mp3",
    "pikachu.mp3",
    "yoshi.mp3",
  ];

  const victorySong =
    victorySongs[Math.floor(Math.random() * victorySongs.length)];

  var localStorageScores = [];
  localStorageScores =
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || [];
  localStorageScores.push({ score, newDate, chosenCharacterName });

  localStorage.setItem(
    "myValueInLocalStorage",
    JSON.stringify(localStorageScores)
  );

  return (
    <div>
      <div className="score-board">
        <audio controls autoPlay="autoPlay">
          <source src={victorySong} type="audio/mpeg"></source>
        </audio>
        <div className="score">You scored {score} / 5 correct answers!</div>

        <div className="score-2">
          {localStorageScores
            .sort((a, b) => b.score - a.score) //display scores descending
            .slice(0, 5) //only displays top 5 scores
            .map((localStorageScore, index) => (
              <li key={index}>
                {index + 1}.{localStorageScore.chosenCharacterName}{" "}
                {localStorageScore.score}{" "}
                {localStorageScore.score === 1 ? " point" : "points"} || date:
                {localStorageScore.newDate}
              </li>
            ))}
        </div>
      </div>

      <button
        className="playBtn"
        onClick={() => {
          playAgain();
        }}
      >
        Play Again!
      </button>
      <div className="resultScreenCharacter">
        <img src={chosenCharacter.pic} />
      </div>
    </div>
  );
};

export default Result;
