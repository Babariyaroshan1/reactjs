import React from "react";
import FocusInput from "./FocusInput";
import PreviousValueCompo from "./PreviousValueCompo";

function ExplainUseRef() {
  return (
    <>
      <div className="container text-bg-dark p-3">
        <div className="text-center">
          <h1>UseRef Hook Explained Here</h1>
        </div>

        <ul>
          <li>useRef() is a React Hook That Creates a Mutable Object</li>
          <li>
            It persists across renders(doesn't reset when component re-render)
          </li>
          <li>It does not cause a re-render when we change It.</li>
          <li>Mainly used for :</li>
          <ul>
            <li>Accessing and Modifiying DOM Elements directly</li>
            <li>Storing values that we don't want to trigger a re-render.</li>
          </ul>
        </ul>

        <h2 className="py-3">Syntax</h2>
        <code>const myRef = useRef(initialValue);</code>

        <h2 className="py-3">Examples</h2>
        <div className="border border-3 border-danger-subtle p-4">
            <FocusInput/>
        </div>
        <div className="border border-3 border-danger-subtle p-4">
            <PreviousValueCompo/>
        </div>
      
      </div>
    </>
  );
}

export default ExplainUseRef;
