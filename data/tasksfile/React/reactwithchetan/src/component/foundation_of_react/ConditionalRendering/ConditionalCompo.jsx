import React from 'react'
import Greetings from './Greetings'
import UserStatus from './UserStatus'

function ConditionalCompo() {

    // const userOnline = true;
    const userOnline = false;
  return (
    <>
        <h2>Conditional Rendering</h2>
        <ol>
            <li><Greetings/></li>
            <li><UserStatus isOnline={userOnline}/></li>
        </ol>
    </>
  )
}

export default ConditionalCompo