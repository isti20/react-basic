import React from "react";

function EventFunctional2() {
  const [username, setUsername] = React.useState("");

  const handleOnChangeForm = (event) => {
    setUsername(event.target.value);
  };

  const handleOnSubmitForm = () => {
    console.log(username);
  };

  return (
    <div>
      <input type="text" name="username" onChange={handleOnChangeForm} />
      <button type="submit" onClick={handleOnSubmitForm}>
        Submit
      </button>
    </div>
  );
}

export default EventFunctional2;