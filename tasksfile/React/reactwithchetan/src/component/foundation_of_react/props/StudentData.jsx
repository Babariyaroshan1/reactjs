import React from 'react'

function StudentData(props) {

  return (
    <>
        <table border={1}>
            <tbody>

            <tr>
                <th>Student Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Student Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Student Phone</th>
                <td>{props.phone}</td>
            </tr>
            <tr>
                <th>Student Email</th>
                <td>{props.email}</td>
            </tr>
            </tbody>
        </table>
    
    </>
  )
}

export default StudentData