import React, { Component } from "react";

class RefComponent1 extends Component {
  handleOnFocus = () => {
    const element = document.getElementById("focus");
    element.focus();
  };

  handleOnReset = () => {
    const element = document.getElementById("focus");
    element.value = "";
  };

  handleOnSetValue = () => {
    const element = document.getElementById("focus");
    element.value = "Tutorial reactjs";
  };

  render() {
    return (
      <div>
        <input type="text" id="focus" />
        <br />
        <button onClick={this.handleOnFocus}>Focus</button>
        <br />
        <button onClick={this.handleOnReset}>Reset</button>
        <br />
        <button onClick={this.handleOnSetValue}>Set Value</button>
      </div>
    );
  }
}

export default RefComponent1;