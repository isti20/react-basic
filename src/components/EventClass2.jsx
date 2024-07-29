import React, { Component } from "react";

class EventClass2 extends Component {
  state = {
    counter: 0,
  };

  handleClick() {
    console.log("Handle Click Me!");
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    console.log(this.state.counter);
    return (
      <div>
        <button
          style={{ height: 40, width: 100, fontSize: 17 }}
          onClick={this.handleClick.bind(this)}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default EventClass2;