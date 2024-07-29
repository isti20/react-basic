import React from "react";

function EventFunctional3() {
  const handleClick = (event, id) => {
    console.log(event, id);
  };

  return (
    <div>
      <button
        type="submit"
        onClick={(event) => handleClick(event, { id: 123, name: "La la land" })}
      >
        Click me!
      </button>
    </div>
  );
}

export default EventFunctional3;