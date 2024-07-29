import React, { Component } from "react";

class EventClass1 extends Component {
  handleClick() {
    console.log("Button Clicked");
  }

  handleClickArrowFunction = (event) => {
    console.log(event);
    console.log(event.target);
  };
  render() {
    return (
      <div>
        <button
          style={{ height: 40, width: 100, fontSize: 17 }}
          onClick={this.handleClick}
        >
          Click me!
        </button>

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

export default EventClass1;