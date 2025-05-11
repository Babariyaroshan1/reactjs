import React from 'react';

const StudentList = () => {
  const students = [ "Tanishk","Ayush","Dashrath", "Jay"];

  return (
    <div >
      <h2>List of Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
