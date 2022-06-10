import React from 'react';
import './style/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Question from './components/Question';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
      ],
    };
  }

  addQuestion = (question) => {
    this.setState({
      questions: [...this.state.questions, question],
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addQuestion} />
        <hr />
        {/* For loop */}
        {this.state.questions.map((question, index) => (
          <Question key={index} index={index+1} question={question.question} answer1={question.answer1} answer2={question.answer2} answer3={question.answer3} answer4={question.answer4} correctAnswer={question.correctAnswer} />
        ))}
      </div>
    );
  }
}

export default App;