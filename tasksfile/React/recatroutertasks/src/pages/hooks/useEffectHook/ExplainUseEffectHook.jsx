import React from "react";
import ExampleUseEffectCompo from "./ExampleUseEffectCompo";
import TaskOfUseEffectHook from "./TaskOfUseEffectHook";

function ExplainUseEffectHook() {
  return (
    <>
      <div className="container text-bg-dark">
        <div className="text-center py-4">
          <h1>useEffect Hook Explained Here</h1>
          <p>
            The useEffect hook is a powerful tool in React. js for managing side
            effects in function components. Whether you're fetching data,
            subscribing to events, or managing cleanup operations, useEffect
            empowers you to craft performant and responsive applications while
            adhering to the principles of functional programming.
          </p>
        </div>

        <h2 >Syntax of useEffect Hook</h2>

        <code>
            Check in Code comment
                {/* useEffect(() => {
                    code to be run (side effect)

                    return Cleanup code
                }, [dependencies]); */}

        </code>


        <h2 className="py-3">Example of useEffect in React</h2>

                <div className="border border-3 border-danger">
                    <ExampleUseEffectCompo/>
                </div>
        <h2 className="py-3">Task of useEffect in React</h2>

                <div className="border border-3 border-danger">
                    <TaskOfUseEffectHook/>
                </div>

      </div>
    </>
  );
}

export default ExplainUseEffectHook;
