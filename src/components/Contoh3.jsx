import React, { Component } from "react";

class Contoh3 extends Component {
  state = {
    navigation: "initial",
    counter: 0,
  };

  addCounter = () => {
    // cara 2 : mengubah state
    this.setState((prevState) => ({
      ...prevState,
      counter: 10,
    }));
  };

  render() {
    console.log("Render Component");
    const { counter } = this.state;

    return (
      <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={this.addCounter}>Add Counter</button>
      </div>
    );
  }
}

export default Contoh3;