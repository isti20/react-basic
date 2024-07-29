import React from "react";

const List = () => {
  const fruits = ["Banana", "Apple", "Mango", "Melon"];

  const renderFruits = fruits.map((fruit) => {
    return (
      <div key={fruit}>
        <h3>{fruit}</h3>
      </div>
    );
  });

  const colors = ["Red", "Green", "Blue"];

  const blackpink = [
    {
      name: "Lisa",
      id: 1,
    },
    {
      name: "Jennie",
      id: 2,
    },
    {
      name: "Rose",
      id: 3,
    },
    {
      name: "Jisoo",
      id: 4,
    },
  ];

  return (
    <div>
      <h1>List of Fruits</h1>
      {renderFruits}

      <h1>List of Colors</h1>
      {colors.map((color) => {
        return (
          <div key={color}>
            <h3>{color}</h3>
          </div>
        );
      })}

      <h1>Member of Blackpink</h1>
      {blackpink.map((member, index) => {
        return (
          <div key={member.id}>
            <h3>{member.name}</h3>
            <h3>{member.id}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default List;