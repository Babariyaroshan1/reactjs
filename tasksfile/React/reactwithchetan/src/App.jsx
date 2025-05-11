import React from "react";
import UnderstandingOfJsx from "./component/foundation_of_react/UnderstandingOfJsx";
import UnderStandingOfComponents from "./component/foundation_of_react/UnderStandingOfComponents";
import UnderStandingOfProps from "./component/foundation_of_react/props/UnderStandingOfProps";
import ExternalCSS from "./component/foundation_of_react/CSSInReact/ExternalCSS";
import EventCompo from "./component/foundation_of_react/EventHandling/EventCompo";
import ConditionalCompo from "./component/foundation_of_react/ConditionalRendering/ConditionalCompo";
import ListCompo from "./component/foundation_of_react/RenderingList/ListCompo";

function App() {
  return (
    <>
      <div className="container bg-dark text-light py-4">
        <h1>Learn React With Chetan Sharma</h1>
        <ol>
          <li>
            <UnderstandingOfJsx />
          </li>
          <hr />
          <li>
            <UnderStandingOfComponents />
          </li>
          <hr />
          <li>
            <UnderStandingOfProps />
          </li>
          <hr />
          <li>
            <ExternalCSS />
          </li>
          <hr />
          <li><EventCompo/> </li>
          <hr />
          <li><ConditionalCompo/> </li>
          <hr />
          <li><ListCompo/></li>
        </ol>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
