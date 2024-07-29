import React, { useState } from "react";

const Dashboard = () => {
  console.log("Render Dashboard");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const addCounter = () => {
    const nexCounter = counter + 1;
    setCounter(nexCounter);
  };

  const showComponent = () => {
    setShow(true);
  };

  const hideComponent = () => {
    setShow(false);
  };

  if (show) {
    return (
      <div>
        <h1>Show Component</h1>
        <button onClick={hideComponent}>Hide Component</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={addCounter}>Add Counter</button>
      <br />
      <h1>Component</h1>
      <button onClick={showComponent}>Show Component</button>
    </div>
  );
};

export default Dashboard;
