import React from 'react'

function Greet() {


    const greetExp = () => {
        alert("Namaste Bharat.")
    }

    
  return (
    <>
        <h1>Greet Functional Component</h1>
        <button onClick={greetExp}>Click Me!</button>
    
    </>
  )
}

export default Greet