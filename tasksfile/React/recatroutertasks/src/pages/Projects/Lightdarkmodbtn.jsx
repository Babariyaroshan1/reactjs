import React, { useState } from "react";
import './Lightdarkmodbtn.css';
import 'bootstrap/dist/css/bootstrap.css';

function Lightdarkmodbtn() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const themes = {
        light: {
            background: "#ffffff",
            text: "#000000",
            buttonBg: "#232323",
            buttonText: "#ffffff",
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

    const currentTheme = isDarkMode ? themes.dark : themes.light;

    const handleModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };


    return (
        <div
            style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.text,
                height: "100vh",
                padding: "20px",
                transition: "background-color 0.3s ease, color 0.3s ease",
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

        </div>
    );
};

export default Lightdarkmodbtn;
