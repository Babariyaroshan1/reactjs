import React from 'react'

function UserStatus({isOnline}) {
  return (
    <>
    <h5>Using Ternary Operator</h5>
        <p>{isOnline ? 'User is Online' : 'User is Offline'}</p>
    </>
  )
}

export default UserStatus