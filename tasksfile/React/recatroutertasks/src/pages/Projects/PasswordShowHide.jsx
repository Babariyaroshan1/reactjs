import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const PasswordShowHide = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            togglePassword();
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h4 className="mb-3">4. Password Show/Hide</h4>
            <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder="Enter password"
                    onKeyDown={handleKeyDown} 
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={togglePassword}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default PasswordShowHide;
