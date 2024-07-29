import React from "react";

const Conditional2 = () => {
  const [show, setShow] = React.useState(true);

  const buttonToggle = () => {
    setShow(!show);
  };

  // cara 2
  let component;
  if (show) {
    component = <p>Button is showing</p>;
  } else {
    component = <p>Button is hide</p>;
  }

  return (
    <div>
      <p>{component}</p>
      <button onClick={buttonToggle}>Click Button</button>
    </div>
  );
};

export default Conditional2;