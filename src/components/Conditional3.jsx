import React from "react";

const Conditional3 = () => {
  const [show, setShow] = React.useState(true);

  const buttonToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <p>Button is showing</p>}
      {!show && <p>Button is hide</p>}
      <button onClick={buttonToggle}>Click Button</button>
    </div>
  );
};

export default Conditional3;