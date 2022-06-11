import React from 'react';
import './style/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Question from './components/Question';
import Key from './components/Key';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: "Q",
          answer1: "a1",
          answer2: "a2",
          answer3: "a3",
          answer4: "a4",
          correctAnswer: 3,
        }
      ],
    };
  }

  addQuestion = (question) => {
    this.setState({
      questions: [...this.state.questions, question],
    });
  }
  deleteQuestion = (index) => {
    this.setState({
      questions: this.state.questions.filter((_, i) => i !== index-1),
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addQuestion} />
        <hr />
        {/* For loop */}
        {this.state.questions.map((question, index) => (
          <Question key={index} index={index+1}
          question={question.question}
          answer1={question.answer1} answer2={question.answer2} answer3={question.answer3} answer4={question.answer4}
          correctAnswer={question.correctAnswer} deleteQuestion={(index) => this.deleteQuestion(index)} />
        ))}
        
        <Key questions={this.state.questions} />
      </div>
    );
  }
}

export default App;