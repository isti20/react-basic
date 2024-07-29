import React, { Component } from "react";

class EventClass5 extends Component {
  state = {
    counter: 0,
    list: [
      { id: 123, name: "Channel ngoding" },
      { id: 456, name: "Tutorial React" },
    ],
  };

  handleItemOnClick = (event, item) => {
    console.log(event.target, item);
  };

  render() {
    console.log(this.state.counter);
    const { list } = this.state;
    return list.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <button
            style={{ height: 100, width: 150, fontSize: 17 }}
            onClick={(event) => this.handleItemOnClick(event, item)}
          >
            Click {item.name}
          </button>
        </div>
      );
    });
  }
}

export default EventClass5;