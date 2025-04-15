import React from "react";
import Greet from "./Greet";

function UnderStandingOfComponents() {
  return (
    <>
      <h1>UnderStanding Of Components</h1>
      <p>
        In React, components are the fundamental building blocks of user
        interfaces, allowing developers to create reusable and modular UI
        elements.
      </p>
      <ul>
        <li>Class Component - X nhi padhege</li>
        <li>Functional Component</li>
      </ul>

      <h2>Functional Component.</h2>
      <p>
        These are simple JavaScript functions that take props as input and
        return JSX elements.
      </p>
      <h5>Example</h5>
      <Greet />
    </>
  );
}

export default UnderStandingOfComponents;
