import React from "react";

const HeroTitle = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: props.titles,
      title: props.titles[0],
      counter: 1,
    };
  }

  componentDidMount = () => {
    this.createTimer(this.state.counter);
  }

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  }

  createTimer = (counter) => {
    if (counter === this.state.titles.length) {
      counter = 0;
    }
    this.timer = setTimeout(() => {
      this.setState({
        title: this.state.titles[counter],
        counter: counter + 1,
      }, () => {
        clearTimeout(this.timer);
        this.createTimer(this.state.counter);
      });
    }, 5000);
  }

  render() {
    return (
      <span>{this.state.title}</span>
    );
  }
};

export default HeroTitle;
