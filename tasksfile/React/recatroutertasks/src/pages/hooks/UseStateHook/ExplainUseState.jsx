import React from "react";
import CounterCompo from "./CounterCompo";
import FormCompo from "./FormCompo";

function ExplainUseState() {
  return (
    <>
      <div className="container text-bg-dark border border-3 border-secondary-subtle my-4">
        <div className="text-center">
          <h1>useState Hook Explained Here !</h1>
          <p>
            useState is a React Hook that enables functional components to
            manage state. It provides a way to declare state variables and
            update them, triggering re-renders of the component when the state
            changes.
          </p>
        </div>
        <h3 className="text-decoration-underline">Synatx of useState Hook</h3>
        <code>
          const [stateVaribale, setStateFunction] = useState(InitialValue);
        </code>

        <ul>
          <li>stateVaribale = the current value of the state</li>
          <li>setStateFunction = function to update the state</li>
          <li>InitialValue = the default value we want to start with</li>
        </ul>

        <h2 className="text-decoration-underline">Examples of useState Hook</h2>

        <CounterCompo />
        <FormCompo />

        <h3>Practical Task For Students</h3>

        <ol>
          <li>Background Color Changer</li>
          <li>Simple To Do List (To add Task)</li>
          <li>Toggle Dark Mode and Light Mode</li>
          <li>Password Show and Hide</li>
          <li>Word Counter</li>
          <li>Age Checker</li>
          <li>
            Subscribe Button - Create a "Subscribe" Button that toggles between
            "Subscribe" and "Congralutaions, You are Subscribed"
          </li>
        </ol>
      </div>
    </>
  );
}

export default ExplainUseState;
