import React, { Component } from "react";

class EventClass3 extends Component {
  state = {
    counter: 0,
  };

  handleClickArrowFunction = () => {
    console.log("Button Clicked");
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    console.log(this.state.counter);
    return (
      <div>
        <button
          style={{ height: 40, width: 100, fontSize: 17 }}
          onClick={this.handleClickArrowFunction}
        >
          Click here!
        </button>
      </div>
    );
  }
}

export default EventClass3;