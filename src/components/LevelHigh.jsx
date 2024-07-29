import React, { Component } from "react";

class LevelHigh extends Component {
  componentWillUnmount() {
    console.log("Component High WILL UNMOUNT");
  }
  render() {
    return <div>Level High</div>;
  }
}

export default LevelHigh;