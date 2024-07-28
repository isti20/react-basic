import React, { Component } from "react";

class Contoh2 extends Component {
  state = {
    navigation: "initial",
    counter: 0,
  };

  getData = () => {
    this.setState({ navigation: "ready" });
  };

  addCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    console.log("Render Component");
    const { navigation, counter } = this.state;

    if (navigation === "initial") {
      return (
        <div>
          <p>Loading</p>
          <button onClick={this.getData}>Get Data</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={this.addCounter}>Add Counter</button>
      </div>
    );
  }
}

export default Contoh2;
