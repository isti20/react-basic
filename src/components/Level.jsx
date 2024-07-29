import React, { Component } from "react";
import LevelHigh from "./LevelHigh";
import LevelLow from "./LevelLow";
import LevelMiddle from "./LevelMiddle";

class Level extends Component {
  render() {
    const { level } = this.props;

    if (level < 5) {
      return <LevelLow />;
    }
    if (level < 10) {
      return <LevelMiddle />;
    }
    return <LevelHigh />;
  }
}

export default Level;