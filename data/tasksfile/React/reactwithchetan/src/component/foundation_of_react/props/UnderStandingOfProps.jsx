import React from "react";
import StudentDetails from "./StudentDetails";

function UnderStandingOfProps() {
  return (
    <>
      <h1>UnderStanding Of Props</h1>
      <p>
        Props is a special keyword in React that stands for properties and is
        used for passing data from one component to another. Data with props are
        passed in a unidirectional flow from parent to child.
      </p>
      <StudentDetails/>
    </>
  );
}

export default UnderStandingOfProps;
