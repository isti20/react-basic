import React from "react";

function UserFunctional(props) {
  const { channel, email } = props;

  return (
    <div>
      <h1>Youtube</h1>
      <p>Channel: {channel}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserFunctional;