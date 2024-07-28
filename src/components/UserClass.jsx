import React, { Component } from "react";

class UserClass extends Component {
  render() {
    const { name, email, subscriber } = this.props;

    return (
      <div>
        <h1>Biodata</h1>
        <p>Nama: {name}</p>
        <p>Email: {email}</p>
        <p>Subscriber: {subscriber}</p>
      </div>
    );
  }
}

export default UserClass;
