import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import quizService from "./quizService";
import QuestionBox from "./components/Questionbox";
import TitleScreen from "./components/TitleScreen";
import Result from "./components/Result";
import BackgroundImage from "./components/BackgroundImage";
import BackgroundSong from "./components/BackgroundSong";

class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    titleScreen: true,
    characterChosen: "",
    imgIndex: "",
  };

  getQuestions = (chosenCharacter) => {
    quizService(chosenCharacter.alias).then((question) => {
      this.setState({
        questionBank: question,
        characterChosen: chosenCharacter,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState((prevState) => {
        return { score: this.state.score + 1 };
      });
    }

    this.setState((prevState) => {
      return {
        responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
      };
    });
  };

  isTitleScreen = (background) => {
    this.setState({
      titleScreen: false,
    });
  };

  handleBackground = (background) => {
    this.setState({
      imgIndex: background,
    });
  };

  playAgain = () => {
    this.setState({
      score: 0,
      responses: 0,
      questionBank: [],
      titleScreen: true,
    });
    document.getElementsByClassName("container")[0].style.backgroundImage =
      "url('')";
  };

  render() {
    return (

      <div className="container">
        {this.state.titleScreen === false ? (
          <BackgroundImage
            imgIndexProp={(imgIndexProp) => this.handleBackground(imgIndexProp)}
          />
        ) : null}
        <div className="title">Super Smash VetiBros</div>
        {this.state.titleScreen === true ? (
          <TitleScreen
            selectedCharacter={(chosenCharacter) =>
              this.getQuestions(chosenCharacter)
            }
            changeBackground={(background) => this.isTitleScreen(background)}
          />
        ) : this.state.questionBank.length === 5 && this.state.responses < 5 ? (
          <BackgroundSong imgIndex={this.state.imgIndex} />
        ) : null}
        {this.state.questionBank.length === 5 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                correct={correct}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}

        {this.state.responses === 5 ? (
          <Result
            score={this.state.score}
            playAgain={() => this.playAgain()}
            chosenCharacter={this.state.characterChosen}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
