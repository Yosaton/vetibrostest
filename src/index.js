import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import quizService from "./quizService";
import QuestionBox from "./components/Questionbox";
import TitleScreen from "./components/TitleScreen";

import Result from "./components/Result";
import BackgroundImage from "./components/BackgroundImage";

class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    titleScreen: true,
    characterChosen: "",
    booty: "",
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

  changeBackground = (background) => {
    this.setState({
      titleScreen: false,
    });
  };

  playAgain = () => {
    this.setState({
      titleScreen: true,
    });
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  fuckTheBackgroundHard = (selectedImage) => {
    //the problem is that the selectedImage is not getting set to the booty
    if ((this.state.bgImg = "")) {
      this.setState({
        booty: "shithole",
      });
    }
    console.log(this.state.booty, "fuck ur mom riht in the mouth");
  };

  componentDidMount() {
    let screenChange;

    if (this.state.titleScreen === true) {
      screenChange = "container";
    } else if (this.state.titleScreen === false && this.state.responses === 5) {
      screenChange = "container2";
    } else if (this.state.titleScreen === false) {
    }
  }

  render() {
    return (
      <div className="container">
        <BackgroundImage
          selectImage={(selectedImage) =>
            this.fuckTheBackgroundHard(selectedImage)
          }
        />
        {console.log(this.state.booty, "donky")}
        {/* {this.state.bgImg ? <div className="container" style={{ backgroundImage: "url(" + bgImg + ")" }}> : <div>} */}
        <div className="title">Super Smash VetiBros</div>
        {this.state.titleScreen === true ? (
          <TitleScreen
            selectedCharacter={(chosenCharacter) =>
              this.getQuestions(chosenCharacter)
            }
            changeBackground={(background) => this.changeBackground(background)}
          />
        ) : (
          this.state.questionBank.length === 5 &&
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
          )
        )}
        {this.state.responses === 5 ? (
          <Result
            className="container-2"
            score={this.state.score}
            playAgain={() => this.playAgain()}
            chosenCharacter={this.state.characterChosen}
          />
        ) : null}
        {/* </div> */}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
