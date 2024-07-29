import React from "react";

function EventFunctional1() {
  const handleOnChangeForm = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input type="text" name="username" onChange={handleOnChangeForm} />
      <button type="submit">Submit</button>
    </div>
  );
}

export default EventFunctional1;