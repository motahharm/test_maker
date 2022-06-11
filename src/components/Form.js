import React from "react";
import './../style/Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: 1,
        };
    }

    onSubmit = () => {
        this.props.onSubmit(this.state);
        this.setState({
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: 1,
        });
    }

    render() {
        return (
            <div className="Form container py-5">
                {/* Textarea for content of question */}
                <textarea className="question form-control text-start" placeholder="Content of question"
                value={this.state.question} 
                onChange={(e) => this.setState({ question: e.target.value })}
                ></textarea>
                <br />
                {/* Textfield for content of answer1 */}
                <input className="answer1 form-control text-start" placeholder="Content of answer1"
                value={this.state.answer1}
                onChange={(e) => this.setState({ answer1: e.target.value })}
                ></input>
                <br />
                {/* Textfield for content of answer2 */}
                <input className="answer2 form-control text-start" placeholder="Content of answer2"
                value={this.state.answer2}
                onChange={(e) => this.setState({ answer2: e.target.value })}
                ></input>
                <br />
                {/* Textfield for content of answer3 */}
                <input className="answer3 form-control text-start" placeholder="Content of answer3"
                value={this.state.answer3}
                onChange={(e) => this.setState({ answer3: e.target.value })}
                ></input>
                <br />
                {/* Textfield for content of answer4 */}
                <input className="answer4 form-control text-start" placeholder="Content of answer4"
                value={this.state.answer4}
                onChange={(e) => this.setState({ answer4: e.target.value })}
                ></input>
                <br />
                {/* Select for correct answer */}
                <select className="correctAnswer form-select"
                value={this.state.correctAnswer}
                onChange={(e) => this.setState({ correctAnswer: e.target.value })}
                >
                    <option value="1">Answer 1</option>
                    <option value="2">Answer 2</option>
                    <option value="3">Answer 3</option>
                    <option value="4">Answer 4</option>
                </select>
                <hr />
                {/* Button for submit */}
                <button className="btn btn-primary w-100"
                onClick={this.onSubmit}
                >Submit</button>
            </div>
        )
    }
};
