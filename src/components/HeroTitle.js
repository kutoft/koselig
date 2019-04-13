import React from "react";

const HeroTitle = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: props.titles,
      title: props.titles[0]
    };
  }

  componentDidMount = () => {
    for (let i = 0; i < this.state.titles.length; i++) {
      this.setDelay(i);
    }
  }

  setDelay = (i) => {
    setTimeout(function(){
      this.setState({
        title: this.state.titles[i]
      });
    }.bind(this), i * 5000);
  }

  render() {
    return (
      <span>{this.state.title}</span>
    );
  }
};

export default HeroTitle;
