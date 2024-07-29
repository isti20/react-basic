import React, { Component } from "react";
import Level from "./Level";

class ComponentLifeCycle2 extends Component {
  state = {
    navigation: "initial",
    counter: 0,
  };

  componentDidMount() {
    console.log("Component DID MOUNT");
    // fetching data
    setTimeout(() => {
      this.setState({ navigation: "ready" });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE");
    console.log("PREV", prevProps, prevState);
    console.log("CURRENT", this.state, this.props);
  }

  handleAddCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    console.log("Component RENDER");
    const { navigation, counter } = this.state;

    if (navigation === "initial") {
      return <p>Loading</p>;
    }

    return (
      <div>
        <h2>Counter: {counter}</h2>
        <Level level={counter} />
        <button onClick={this.handleAddCounter}>Add Counter</button>
      </div>
    );
  }
}

export default ComponentLifeCycle2;