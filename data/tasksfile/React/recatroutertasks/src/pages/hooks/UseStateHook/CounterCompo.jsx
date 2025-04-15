import React, { useState } from "react";

function CounterCompo() {
  // Hooks are Always Defined at Top

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="border border-4 border-danger w-50 my-5">
        <h1 className="py-2">Counter Using useState</h1>

    <div className="m-3">

        <button className="btn btn-danger fs-4" onClick={decrement}>Decrement</button>
        <button className="btn btn-light mx-3 fs-4">Count : {count}</button>
        <button className="btn btn-success fs-4" onClick={increment}>
          Increment
        </button>
    </div>

      </div>
    </>
  );
}

export default CounterCompo;
