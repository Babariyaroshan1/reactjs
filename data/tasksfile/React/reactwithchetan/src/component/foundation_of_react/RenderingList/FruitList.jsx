import React from "react";

function FruitList() {
  //   const Fruits = ["Apple", "Orange", "Mango", "Gauava", "Grapes", "Banana"];

  //   or

  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Gauava" },
    { id: 5, name: "Grapes" },
    { id: 6, name: "Banana" },
  ];

  return (
    <>
      <div className="border p-3">
        <h5>Fruit List</h5>
        {/* <ul>
          {Fruits.map((fruit, index) => (
            // <li key={index}>{fruit}</li>
            <li key={index}>{fruit} = {index}</li>
          ))}
        </ul> */}

        {/* or */}

        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.id}>{fruit.name} = {fruit.id}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FruitList;
