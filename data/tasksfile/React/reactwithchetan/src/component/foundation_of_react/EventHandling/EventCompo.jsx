import React from "react";

function EventCompo() {
  function handleClick() {
    alert("Button Clicked!");
  }
  function handleClickMsg(msg) {
    alert(msg + " ");
  }
  function handleChange(event) {
    console.log(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent Page Reload
    alert("Form Submitted");
  }

  return (
    <>
      <h2>Event Handling</h2>

      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => handleClickMsg("Hello")}
      >
        Click for Msg
      </button>
      <br />
      <br />
      <h5>Synthetic Event</h5>
      <input type="text" onChange={handleChange} />

      <br />
      <br />

      {/* onClick, onChange, onSubmit, onMouseEnter/onMouseLeave, onKeyDown/onKeyUp, onFocus.onBlur  */}

      <h5>Form Submission</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default EventCompo;
