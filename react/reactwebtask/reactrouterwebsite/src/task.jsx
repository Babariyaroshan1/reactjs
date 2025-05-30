import React, { useState } from "react";

const Task = () => {
  const [bgColor, setBgColor] = useState("white");
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [ageResult, setAgeResult] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

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
    <div
      className={`min-h-screen p-6 transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-2xl font-bold mb-4">React JS Mini Tasks</h1>

      {/* Background Color Changer */}
      <div className="mb-4">
        <h2 className="font-semibold">Background Color Changer</h2>
        <input
          type="color"
          onChange={(e) => setBgColor(e.target.value)}
          className="mt-2"
        />
      </div>

      {/* Simple To Do List */}
      <div className="mb-4">
        <h2 className="font-semibold">Simple To-Do List</h2>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a task"
          className="border p-1 mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1">
          Add
        </button>
        <ul className="mt-2 list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Toggle Dark Mode */}
      <div className="mb-4">
        <h2 className="font-semibold">Toggle Dark/Light Mode</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 text-white px-3 py-1"
        >
          Toggle Mode
        </button>
      </div>

      {/* Password Show/Hide */}
      <div className="mb-4">
        <h2 className="font-semibold">Password Show and Hide</h2>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="border p-1 mr-2"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="bg-green-500 text-white px-3 py-1"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {/* Word Counter */}
      <div className="mb-4">
        <h2 className="font-semibold">Word Counter</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          className="border w-full h-20 p-2"
        ></textarea>
        <p className="mt-1">Word Count: {text.trim().split(/\s+/).filter(Boolean).length}</p>
      </div>

      {/* Age Checker */}
      <div className="mb-4">
        <h2 className="font-semibold">Age Checker</h2>
        <input
          type="text"
          placeholder="Enter Birth Year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className="border p-1 mr-2"
        />
        <button
          onClick={checkAge}
          className="bg-purple-500 text-white px-3 py-1"
        >
          Check Age
        </button>
        <p className="mt-1">{ageResult}</p>
      </div>

      {/* Subscribe Button */}
      <div>
        <h2 className="font-semibold">Subscribe Button</h2>
        <button
          onClick={() => setSubscribed(!subscribed)}
          className="bg-red-500 text-white px-3 py-1"
        >
          {subscribed ? "Congratulations, You are Subscribed" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default Task;
