import React, { Component } from "react";
import Question from "./Question";
import { loadQuestions } from "../helpers/Helper";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null,
      loading: true,
    };
  }
  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      console.log(questions);

      this.setState({
        questions,
        currentQuestion: questions[0],
        loading: false,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <div id="loader"></div>}
        {!this.state.loading && this.state.currentQuestion && (
          <Question question={this.state.currentQuestion} />
        )}
      </>
    );
  }
}
