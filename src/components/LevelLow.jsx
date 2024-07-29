import React, { Component } from "react";

class LevelLow extends Component {
  componentWillUnmount() {
    console.log("Component Low WILL UNMOUNT");
  }
  render() {
    return <div>Level Low</div>;
  }
}

export default LevelLow;