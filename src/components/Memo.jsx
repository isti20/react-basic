import React from "react";
import WithMemo from "./WithMemo";
import WithoutMemo from "./WithoutMemo";

class Memo extends React.Component {
  state = {
    counter: 1,
    withMemoCounter: 1,
  };

  handleAddcounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  handleAddWithMemoCounter = () => {
    const { withMemoCounter } = this.state;
    this.setState({ withMemoCounter: withMemoCounter + 1 });
  };

  render() {
    console.log("RENDER PARENT");
    const { counter, withMemoCounter } = this.state;

    return (
      <div>
        <h1>{counter}</h1>
        <WithMemo withMemoCounter={withMemoCounter} />
        <br />
        <WithoutMemo />
        <button onClick={this.handleAddcounter}>Add Counter</button>
        <br />
        <button onClick={this.handleAddWithMemoCounter}>
          Add With Memo Counter
        </button>
      </div>
    );
  }
}

export default Memo;
