import React from 'react'
import StudentData from './StudentData'
import StudentDataProps from './StudentDataProps'
import StudentDataDestructing from './StudentDataDestructuring'

function StudentDetails() {
  return (
    <>
        <h2>Student Details</h2>
        <StudentData name="Arun" age="21" phone= "123456789" email = "arun@gmail.com"/>
        <br />       
        <StudentData name="Dahrath" age="24" phone= "213456897" email = "dashrath@gmail.com"/>
        <br />       
        <StudentData name="Ravi" age="22" phone= "8451548451" email = "ravi@gmail.com"/>
        <br />       
        <StudentData name="Roshan" age="23" phone= "5454354842" email = "roshan@gmail.com"/>
        <br />       
        <h2>Student Details Props</h2>
        <StudentDataProps name="Arun" age="21" phone= "123456789" email = "arun@gmail.com"/>
        <br />       
        <StudentDataProps name="Dahrath" age="24" phone= "213456897" email = "dashrath@gmail.com"/>
        <br />       
        <StudentDataProps name="Ravi" age="22" phone= "8451548451" email = "ravi@gmail.com"/>
        <br />       
        <StudentDataProps name="Roshan" age="23" phone= "5454354842" email = "roshan@gmail.com"/>
        <br />       
        <h2>Student Details Props Destructing</h2>
        <StudentDataDestructing name="Arun" age="21" phone= "123456789" email = "arun@gmail.com"/>
        <br />       
        <StudentDataDestructing name="Dahrath" age="24" phone= "213456897" email = "dashrath@gmail.com"/>
        <br />       
        <StudentDataDestructing name="Ravi" age="22" phone= "8451548451" email = "ravi@gmail.com"/>
        <br />       
        <StudentDataDestructing name="Roshan" age="23" phone= "5454354842" email = "roshan@gmail.com"/>
        <br />       
    </>
  )
}

export default StudentDetails