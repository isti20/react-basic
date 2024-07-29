import React, { Component } from "react";

class ComponentLifeCycle1 extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("Component DID MOUNT");
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
    const { counter } = this.state;

    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={this.handleAddCounter}>Add Counter</button>
      </div>
    );
  }
}

export default ComponentLifeCycle1;