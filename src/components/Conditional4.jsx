import React from "react";

const Conditional4 = () => {
  const [show, setShow] = React.useState(true);

  const buttonToggle = () => {
    setShow(!show);
  };

  // cara 4
  return show ? <p>Button is showing</p> : <p>Button is hide</p>;
};

export default Conditional4;