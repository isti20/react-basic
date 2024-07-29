import React, { Component } from "react";

class RefComponent4 extends Component {
  handleInputRef = (inputComponent) => {
    this.inputComponent = inputComponent;
  };

  handleFocus = () => {
    const element = this.inputComponent;
    element.focus();
  };

  handleReset = () => {
    const element = this.inputComponent;
    element.value = "";
  };

  handleSetValue = () => {
    const element = this.inputComponent;
    element.value = "Tutorial ref component";
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.handleInputRef} />
        <br />
        <button onClick={this.handleFocus}>Focus</button>
        <br />
        <button onClick={this.handleReset}>Reset</button>
        <br />
        <button onClick={this.handleSetValue}>Set Value</button>
      </div>
    );
  }
}

export default RefComponent4;