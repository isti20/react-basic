import React, { Component } from "react";

class Contoh1 extends Component {
  // cara 1 : membuat initial state
  // constructor() {
  //   super();
  //   this.state = {
  //     navigation: "initial",
  //     counter: 0,
  //   };
  // }

  // cara 2 : membuat initial state
  state = {
    navigation: "initial",
    counter: 0,
  };

  addCounter = () => {
    // cara 1 : mengubah state
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
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

export default Contoh1;
