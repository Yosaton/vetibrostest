// import React, { Component } from "react";
import React, { useEffect, useState } from "react";

const Result = ({ score, playAgain }) => {
  const myDate = new Date();
  const newDate = myDate.toLocaleString();

  var localStorageScores = [];
  localStorageScores =
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || [];
  localStorageScores.push({ score, newDate });

  localStorage.setItem(
    "myValueInLocalStorage",
    JSON.stringify(localStorageScores)
  );

  // useEffect(() => {
  //   localStorage.setItem("myValueInLocalStorage", JSON.stringify(score));
  // }, [score]);

  // useEffect(() => {
  //   window.localStorage.setItem("myValueInLocalStorage", JSON.stringify(score));
  // });

  console.log(localStorageScores.length, "lengther");

  return (
    <div className="score-board">
      <div className="score">You scored {score} / 5 correct answers!</div>

      <div className="score-2">
        {localStorageScores
          .sort((a, b) => b.score - a.score) //display scores descending
          .slice(0, 5) //only displays top 5 scores
          .map((localStorageScore, index) => (
            <li key={index}>
              {index + 1}. score: {localStorageScore.score} *** date:
              {localStorageScore.newDate}
            </li>
          ))}
      </div>
      <button
        className="playBtn"
        onClick={() => {
          playAgain();
        }}
      >
        Play Again!
      </button>
    </div>
  );
};

export default Result;
