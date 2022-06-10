import React from "react";
import exportAsImage from "./../utils/exportAsImage";


export default class Question extends React.Component {
    render() {
        const question_div = React.createRef()
        return (
            <div>
                <div ref={question_div} className="Question container py-3">
                    <h3>{this.props.index}. {this.props.question}</h3>
                    <div className="answers">
                        <div className="answer">
                            <input className="form-check-input" id={'q'+this.props.index+'a1'}
                            type="radio" name="answer" value="1" />
                            <label className="ml-1 form-check-label" htmlFor={'q'+this.props.index+'a1'}
                            ><p className="mx-2 fs-6">{this.props.answer1}</p></label>
                        </div>
                        <div className="answer">
                            <input className="form-check-input" id={'q'+this.props.index+'a2'}
                            type="radio" name="answer" value="2" />
                            <label className="ml-1 form-check-label" htmlFor={'q'+this.props.index+'a2'}
                            ><p className="mx-2 fs-6">{this.props.answer2}</p></label>
                        </div>
                        <div className="answer">
                            <input className="form-check-input" id={'q'+this.props.index+'a3'}
                            type="radio" name="answer" value="3" />
                            <label className="ml-1 form-check-label" htmlFor={'q'+this.props.index+'a3'}
                            ><p className="mx-2 fs-6">{this.props.answer3}</p></label>
                        </div>
                        <div className="answer">
                            <input className="form-check-input" id={'q'+this.props.index+'a4'}
                            type="radio" name="answer" value="4" />
                            <label className="ml-1 form-check-label" htmlFor={'q'+this.props.index+'a4'}
                            ><p className="mx-2 fs-6">{this.props.answer4}</p></label>
                        </div>
                    </div>
                </div>
                <div className="container d-flex flex-row justify-content-center mb-3">
                    <button className="btn btn-primary btn-sm"
                    onClick={() => exportAsImage(question_div.current, 'TestQuestion'+this.props.index)}
                    >Export as image</button>
                </div>
                <hr />
            </div>
        )
    }
};
