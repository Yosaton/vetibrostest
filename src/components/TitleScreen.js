import React, { useState } from "react";

const TitleScreen = ({ selectedCharacter, changeBackground }) => {
  const [character, setCharacter] = useState("");

  const maw =
    "http://www.avatarsinpixels.com/chibi/eyJIYWlyTG93ZXIiOiIzIiwiU29ja3MiOiIxIiwiUGFudHMiOiIxMCIsIlRvcCI6IjE5IiwiRXllYnJvd3MiOiIxIiwiRXllcyI6IjExIiwiTW91dGgiOiIxNiIsIkhhaXJUb3AiOiI1Iiwic2tpblRvbmUiOiJmOGQyYjkiLCJoYWlyVG9uZSI6ImNmMjUyNSIsImV5ZXNUb25lIjoiOWI1NDI1IiwicGFudHNUb25lIjoiYjAzMWJhIiwidG9wVG9uZSI6Ijg3MDBlZiJ9/1/show.png";

  const isara =
    "http://www.avatarsinpixels.com/chibi/eyJTb2NrcyI6IjEiLCJFeWVicm93cyI6IjEiLCJFeWVzIjoiNiIsIk1vdXRoIjoiMjEiLCJIYWlyVG9wIjoiMyIsImhhaXJUb25lIjoiNDUyMTE3IiwiZXllc1RvbmUiOiI2ZTM0MjQifQ==/1/show.png";

  const skeeter =
    "http://www.avatarsinpixels.com/chibi/eyJTaG9lcyI6IjQiLCJQYW50cyI6IjEwIiwiVG9wIjoiNSIsIkV5ZWJyb3dzIjoiMSIsIkV5ZXMiOiI3IiwiTW91dGgiOiIxMyIsIkhhaXJUb3AiOiI2IiwiaGFpclRvbmUiOiIzZDFmMTUiLCJleWVzVG9uZSI6IjU0MjQxNCIsInBhbnRzVG9uZSI6ImJjNjcyZiIsInBhbnRzVG9uZTIiOiJiYzY3MmYiLCJ0b3BUb25lIjoiNjBjYjVlIn0=/1/show.png";

  const sharon =
    "http://www.avatarsinpixels.com/chibi/eyJIYWlyTG93ZXIiOiIzIiwiU2hvZXMiOiIyIiwiUGFudHMiOiIxIiwiVG9wIjoiMyIsIkV5ZXMiOiI4IiwiTW91dGgiOiIxMSIsIkhhaXJUb3AiOiI4IiwiaGFpclRvbmUiOiJhYTRkMTAiLCJleWVzVG9uZSI6ImFhNGQxMCIsInBhbnRzVG9uZTIiOiJmZmZmZmYiLCJzaG9lc1RvbmUiOiJmZmZmZmYifQ==/1/show.png";

  const aaron =
    "http://www.avatarsinpixels.com/chibi/eyJTaG9lcyI6IjEiLCJQYW50cyI6IjIiLCJUb3AiOiIxNSIsIkV5ZXMiOiI0IiwiTW91dGgiOiI0IiwiSGFpclRvcCI6IjEiLCJoYWlyVG9uZSI6ImQxNWYxNCIsInBhbnRzVG9uZSI6ImYxYTI2ZSIsInBhbnRzVG9uZTIiOiJmMWEyNmUiLCJ0b3BUb25lIjoiNjdhNjI4IiwidG9wVG9uZTIiOiI2N2E2MjgifQ==/1/show.png";

  return (
    <div className="container-character-selection">
      <audio controls autoPlay="autoPlay">
        <source src="background_songs/smashbros.mp3" type="audio/mpeg"></source>
      </audio>
      <div className="choose-character-title">Choose your character</div>
      <div className="characterBoxes">
        <div
          onClick={() => {
            setCharacter({
              pic: maw,
              alias: "Maw",
            });
          }}
          className="characterBox"
        >
          Maw
          <br />
          <img src={maw} alt="maw" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: isara,
              alias: "Isara",
            });
          }}
          className="characterBox"
        >
          Isara
          <img src={isara} alt="isara" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: skeeter,
              alias: "Skeeter",
            });
          }}
          className="characterBox"
        >
          Skeeter
          <img src={skeeter} alt="skeeter" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: sharon,
              alias: "Sharon",
            });
          }}
          className="characterBox"
        >
          Sharon
          <img src={sharon} alt="sharon" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: aaron,
              alias: "Aaron",
            });
          }}
          className="characterBox"
        >
          Aaron
          <img src={aaron} alt="aaron" />
        </div>
      </div>
      <div className="selectedCharacterBox">
        <img
          onClick={() => {
            if (character) {
              selectedCharacter(character);
              changeBackground(false);
            }
          }}
          className="selectedBigBox"
          src={
            character.pic
              ? character.pic
              : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }
          alt="selected character"
        ></img>
        <h3>{character.alias}</h3>
      </div>
      {character !== "" && (
        <h2 className="pressStartText">Press Start To Play!</h2>
      )}
    </div>
  );
};

export default TitleScreen;
//blah
