import React from "react";

function StudentDataProps(props) {
  let name = props.name;
  let age = props.age;
  let phone = props.phone;
  let email = props.email;

  return (
    <>
      <table border={1}>
        <tbody>

        <tr>
          <th>Student Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Student Age</th>
          <td>{age}</td>
        </tr>
        <tr>
          <th>Student Phone</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>Student Email</th>
          <td>{email}</td>
        </tr>
        </tbody>
      </table>
    </>
  );
}

export default StudentDataProps;
