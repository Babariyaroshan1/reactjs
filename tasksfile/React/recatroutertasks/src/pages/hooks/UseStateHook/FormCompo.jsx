import React, { useState } from "react";

function FormCompo() {
  // useState

  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <div className="border border-4 border-danger w-50 my-5">
        <h2>Form Component using useState</h2>

        <div className="m-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-control"
            value={userName}
            onChange={handleChange}
            // onChange={(e)=> setUserName(e.target.value)}
          />

          <p className="fs-4 pt-4">Namaste {userName}</p>
        </div>
      </div>
    </>
  );
}

export default FormCompo;
