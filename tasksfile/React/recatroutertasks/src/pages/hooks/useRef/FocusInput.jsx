import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.value = "Auto filled Text"
    inputRef.current.focus();
  };

  return (
    <>
      <h2>Focus the Input Field</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type Something"
        className="form-control w-50"
      />
      <br /> <br />
      <button className="btn btn-primary my-3" onClick={handleFocusInput}>
        Focus Input
      </button>
    </>
  );
}

export default FocusInput;
