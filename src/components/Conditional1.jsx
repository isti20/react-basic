import React from "react";

const Conditional1 = () => {
  const [show, setShow] = React.useState(true);

  const buttonToggle = () => {
    setShow(!show);
  };

  // cara 1
  if (!show) {
    return (
      <div>
        <p>Button is hide</p>
        <button onClick={buttonToggle}>Show Button</button>
      </div>
    );
  }

  return (
    <div>
      <p>Button is showing</p>
      <button onClick={buttonToggle}>Hide Button</button>
    </div>
  );
};

export default Conditional1;