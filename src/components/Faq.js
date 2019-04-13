import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/pro-light-svg-icons'

const Faq = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer,
      isOpen: false,
      maxHeight: 0,
    };
    this.messageBody = React.createRef();
  }

  componentDidMount = () => {
  }

  handleHeight = () => {
    let height = 0;
    if(this.state.isOpen === false) {
      height = this.messageBody.current.scrollHeight
    }
    console.log(height);
    return (height);
  }

  handleClick = (e) => {
    if(e.currentTarget.parentElement.classList.contains('is-active')) {
      e.currentTarget.parentElement.classList.remove('is-active');
    } else {
      e.currentTarget.parentElement.classList.add('is-active');
    }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      maxHeight: this.handleHeight()
    }));

  }

  render() {
    return (
      <article className="message">
        <div className="message-header" onClick={(e) => this.handleClick(e)}>
          <p>{this.state.question}</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div
          className="message-body"
          ref={this.messageBody}
          style={{
            maxHeight: this.state.maxHeight
          }}
        >
          <div className="message-body-inner">
            {this.state.answer}
          </div>
        </div>
      </article>
    );
  }
};

export default Faq;
