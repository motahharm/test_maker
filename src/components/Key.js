import React from "react";
import exportAsImage from "./../utils/exportAsImage";

export default class Key extends React.Component {


    render() {
        const key_div = React.createRef()
        return (
            <div>
                <div ref={key_div} className="Key container py-3">
                    <h3>Key</h3>
                    <div className="answers d-flex flex-col flex-wrap justify-content-start">
                        {/* For in questions */}
                        {this.props.questions.map((question, index) => (
                            <div className="answer mx-2" key={index}>
                                {index+1}.
                                <input className="form-check-input mx-1"
                                type="radio" name={"answer-"+index} value="1"
                                id={"q"+index+"a1-k"}
                                checked={question.correctAnswer === "1" || question.correctAnswer === 1}
                                 />
                                <input className="form-check-input mx-1"
                                type="radio" name={"answer-"+index} value="2"
                                id={"q"+index+"a1-k"}
                                checked={question.correctAnswer === "2" || question.correctAnswer === 2}
                                 />
                                <input className="form-check-input mx-1"
                                type="radio" name={"answer-"+index} value="3"
                                id={"q"+index+"a1-k"}
                                checked={question.correctAnswer === "3" || question.correctAnswer === 3}
                                 />
                                <input className="form-check-input mx-1"
                                type="radio" name={"answer-"+index} value="4"
                                id={"q"+index+"a1-k"}
                                checked={question.correctAnswer === "4" || question.correctAnswer === 4}
                                 />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container d-flex flex-row justify-content-center mb-3">
                    <button className="btn btn-primary btn-sm mx-1"
                    onClick={() => exportAsImage(key_div.current, 'TestKey'+this.props.index)}
                    >Export as image</button>
                </div>
                <hr />
            </div>
        )
    }
};
