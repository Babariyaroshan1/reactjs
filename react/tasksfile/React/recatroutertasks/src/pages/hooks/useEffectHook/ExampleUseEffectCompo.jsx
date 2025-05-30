import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function ExampleUseEffectCompo() {
  // 1. Run once on component mount (like componentDidMount()

  // useEffect(() => {
  //     console.log("Component Mounted");

  // }, [])

  // 2 Run when a value Change

  const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Count changed:", count);
    }, [count]);

  //   3. Cleanup side Effect

//   useEffect(() => {
//     console.log("Component Mounted");

//     console.log("Count changed:", count);

//     //   cleanup Function
//     return () => {
//       console.log("Cleanup on Unmount");
//     };
//   }, [count]);

  return (
    <>
      <h2>Example Component of useEffect Hook</h2>

      <div className="p-3 border border-3 w-25 m-3">
        <h6>Run when a value Change</h6>

        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <div className="p-3 border border-3 w-25 m-3">
        <h6>Cleanup Side Effect</h6>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="p-3 border border-3 w-50 m-3">
            <ProductList/>
      </div>
    </>
  );
}

export default ExampleUseEffectCompo;
