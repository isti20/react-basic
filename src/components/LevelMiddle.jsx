import React, { Component } from "react";

class LevelMiddle extends Component {
  componentWillUnmount() {
    console.log("Component Middle WILL UNMOUNT");
  }
  render() {
    return <div>Level Middle</div>;
  }
}

export default LevelMiddle;