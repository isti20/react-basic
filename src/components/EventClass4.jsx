import React, { Component } from "react";

class EventClass4 extends Component {
  state = {
    counter: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    console.log(this.state.counter);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EventClass4;