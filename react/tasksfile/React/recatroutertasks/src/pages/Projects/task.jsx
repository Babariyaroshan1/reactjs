import React, { useState, useEffect } from "react";
import './Lightdarkmodbtn.css';
import 'bootstrap/dist/css/bootstrap.css';

function SimpleBackgroundColorChanger  () {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const themes = {
    light: {
      background: "#ffffff",
      text: "#000000",
      buttonBg: "#232323",
      buttonText: "white",
      inputBorder: "#ccc",
    },
    dark: {
      background: "#1a1a1a",
      text: "#ffffff",
      buttonBg: "#ffffff",
      buttonText: "#1a1a1a",
      inputBorder: "#555",
    },
  };

  useEffect(() => {
    const currentTheme = isDarkMode ? themes.dark : themes.light;
    setBackgroundColor(currentTheme.background);
    setTextColor(currentTheme.text);
  }, [isDarkMode]);



  const handleModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const addTodo = () => {
    if (!task.trim()) return;
    const newTodo = { id: Date.now(), text: task };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

 

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        height: "100vh",
        padding: "20px",
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Toggle Dark/Light Mode Button */}
      <button
        onClick={handleModeToggle}
        style={{
          backgroundColor: currentTheme.buttonBg,
          color: currentTheme.buttonText,
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "5px",
          border: "2px solid white",
        }}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> 


      {/* To-Do List */}
      <div className="container text-bg-dark p-3 mt-4 rounded">
        <h2>To-Do List In React</h2>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter a Task Here...."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success my-3" onClick={addTodo}>
          Add Task
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger ms-3"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

     
    </div>
  );
};

export default SimpleBackgroundColorChanger;
