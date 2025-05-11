import React, { useEffect, useRef, useState } from 'react'

function PreviousValueCompo() {

    const [count, setCount] = useState(0)

    const prevCount = useRef()

    useEffect(() => {
      prevCount.current = count;
    
     
    }, [count])
    
  return (
    <>
        <h1>Current : {count}</h1>
        <h2>Previous : {prevCount.current}</h2>
        <button className='btn btn-success' onClick={()=> setCount(count + 1)}>Increment</button>
    
    </>
  )
}

export default PreviousValueCompo