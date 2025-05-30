import React from "react";

function Greetings(isLoggedIn) {
  if (isLoggedIn) {
    return (
      <>
        <h5>Using If Statements</h5><h6>Welcome Back!</h6>
      </>
    );
  }
  return (
    <>
      <h5>Using If Statements</h5><h6>Please Log In!</h6>
    </>
  );
}

export default Greetings;
