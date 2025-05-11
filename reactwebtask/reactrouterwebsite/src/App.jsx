import React, { useState } from 'react';
import ProfileCard from './profilecard';
import './App.css';
import CARONE from './assets/cruze.jpg';
import CARtwo from './assets/rangerover.jpg';
import CARthree from './assets/bmw.jpg';
import CARfour from './assets/Scorpio.jpeg';
import Product from './product';
import Custombutton from './Custombutton.jsx';
import StudentList from './StudentList';
import Task from './task.jsx';


function App() {
  // Define the state variables
  const [bgColor, setBgColor] = useState("white");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };




  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [ageResult, setAgeResult] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]); // Add new task to the list
      setTaskInput(''); // Reset input field
    }
  };
  // Handle deleting a specific task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task at the specified index
  };

  // Handle removing the last task
  const removeLastTask = () => {
    setTasks(tasks.slice(0, -1)); // Remove the last task
  };



  // Age checking function
  const checkAge = () => {
    const year = parseInt(birthYear);
    if (!isNaN(year)) {
      const age = new Date().getFullYear() - year;
      setAgeResult(`You are ${age} years old.`);
    } else {
      setAgeResult("Enter a valid year.");
    }
  };

  return (
    <>
      <div className="App">
        <h1>My Profile</h1>
        <ProfileCard />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Product
              productName="Cruze"
              price={1700000}
              productImage={CARONE}
              productDescription="Luxury and tradition go hand in hand from Gujarat’s business circuits to global elegance."
            />
          </div>
          <div className="col-md-3">
            <Product
              productName="Rangrover"
              price={24000000}
              productImage={CARtwo}
              productDescription="Luxury and tradition go hand in hand from Gujarat’s business circuits to global elegance."
            />
          </div>
          <div className="col-md-3">
            <Product
              productName="Bmw"
              price={18900000}
              productImage={CARthree}
              productDescription="Luxury and tradition go hand in hand from Gujarat’s business circuits to global elegance."
            />
          </div>
          <div className="col-md-3">
            <Product
              productName="Scorpio s11"
              price={220000}
              productImage={CARfour}
              productDescription="Luxury and tradition go hand in hand from Gujarat’s business circuits to global elegance."
            />
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h1>Bootstrap Button click Me!</h1>
        <Custombutton />
      </div>

      <div className="container justify-content-center align-items-center min-vh-100">
        <div className="row justify-content-center">
          <div className="col-md-6 border p-4 shadow-lg rounded">
            <h3 className="text-center mb-4">Welcome to the Student Portal</h3>
            <StudentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
