import React from "react";

function DisplayCounter({count, dispatch}) {
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })} className="btn btn-success">Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })} className="btn btn-danger mx-3">Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })} className="btn btn-info">Reset</button>
    </>
  );
}

export default DisplayCounter;
