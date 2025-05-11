import React from "react";
import CardComp from "./CardComp";

function ExternalCSS() {
  return (
    <>
      <div className="container ">
        <h2>CSS In React</h2>
        <ul>
          <li>External CSS Import</li>
          <li style={{ backgroundColor: "red" }}>Inline CSS</li>
          <li>BootStrap Dependency Install</li>
        </ul>

        <h5 className="pt-5 fs-1 fw-bold">Card</h5>
        <div className="row pt-4">
            <div className="col">

        <CardComp/>
            </div>
            <div className="col">

        <CardComp/>
            </div>
            <div className="col">

        <CardComp/>
            </div>

        </div>
      </div>
    </>
  );
}

export default ExternalCSS;
