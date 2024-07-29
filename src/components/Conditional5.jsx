import React from "react";

const Level = ({ counter }) => {
  switch (counter) {
    case 1:
      return <p>Level rendah</p>;
    case 2:
      return <p>Level sedang</p>;
    case 3:
      return <p>Level tinggi</p>;
    default:
      return <p>Level tidak terdefinisi</p>;
  }
};

const Conditional5 = () => {
  const [counter, setCounter] = React.useState(1);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Level counter={counter} />
      <button onClick={addCounter}>Add Counter</button>
    </div>
  );
};

export default Conditional5;
