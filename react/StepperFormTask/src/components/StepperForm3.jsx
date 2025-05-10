import React, { useRef, useState } from "react";

const ThirdForm = ({ formData, onChange, onPrev, onSubmit }) => {
  const stateRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zip.trim()) newErrors.zip = "Zip code is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.state) stateRef.current.focus();
      else if (newErrors.city) cityRef.current.focus();
      else if (newErrors.zip) zipRef.current.focus();
      return;
    }

    onSubmit(); 
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <input
          ref={stateRef}
          name="state"
          type="text"
          value={formData.state}
          onChange={onChange}
          placeholder="Enter state"
          className={`form-control ${errors.state ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.state}</div>
      </div>

      <div className="mb-3">
        <input
          ref={cityRef}
          name="city"
          type="text"
          value={formData.city}
          onChange={onChange}
          placeholder="Enter city"
          className={`form-control ${errors.city ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.city}</div>
      </div>

      <div className="mb-3">
        <input
          ref={zipRef}
          name="zip"
          type="text"
          value={formData.zip}
          onChange={onChange}
          placeholder="Enter zip code"
          className={`form-control ${errors.zip ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.zip}</div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrev}>
          Previous
        </button>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ThirdForm;
