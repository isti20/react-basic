import React, { Component } from "react";

class RefComponent2 extends Component {
  inputRef = React.createRef()

  handleFocus = () => {
    const element = this.inputRef.current;
    element.focus();
  };

  handleReset = () => {
    const element = this.inputRef.current;
    element.value = "";
  };

  handleSetValue = () => {
    const element = this.inputRef.current;
    element.value = "Channel Erdecode";
  };

  render() {
    return (
      <div>
        <input type="text" id="focus" ref={this.inputRef} />
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

export default RefComponent2;