import React, { useState} from "react";
import './Lightdarkmodbtn.css';
import 'bootstrap/dist/css/bootstrap.css';

function SimpleBackgroundColorChanger () {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [textColor] = useState("#000000");

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleRandomClick = () => {
        const newRandomColor = getRandomColor();
        setBackgroundColor(newRandomColor);
    };

    const handleColorInputChange = (event) => {
        const pickedColor = event.target.value;
        setBackgroundColor(pickedColor);
    };

    return (

        <>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                    height: "60vh",
                    padding: "20px",
                    transition: 'background-color 0.3s ease',
                }}
            >

                {/* Random Color Button */}
                <button
                    onClick={handleRandomClick}
                    style={{
                        display:"flex",
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px 20px",
                        margin: "10px",
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius: "5px",
                        border: "0.5px solid white",
                    }}
                >
                    CLICK TO CHANGE RANDOM COLOR
                </button>

                {/* Color Picker */}
                <input
                    type="color"
                    value={backgroundColor}
                    onChange={handleColorInputChange}
                    style={{
                        margin: "10px",
                        width: "50px",
                        height: "40px",
                        cursor: "pointer",
                    }}
                />

                <p>Current Background Color: {backgroundColor}</p>
            </div>

        </>
    );
};

export default SimpleBackgroundColorChanger;
