import React, { useRef, useState } from "react";

const SecondForm = ({ formData, onChange, onPrev, onNext }) => {
  const ageRef = useRef();
  const genderRef = useRef();
  const countryRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.age) ageRef.current.focus();
      else if (newErrors.gender) genderRef.current.focus();
      else if (newErrors.country) countryRef.current.focus();
      return;
    }

    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="mb-2">Age</label>
        <input
          ref={ageRef}
          name="age"
          type="number"
          value={formData.age}
          onChange={onChange}
          placeholder="Enter age"
          className={`form-control ${errors.age ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.age}</div>
      </div>

      <div className="mb-3">
        <label className="mb-2">Gender</label>
        <div>
          <label className="me-3">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={onChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={onChange}
            />{" "}
            Female
          </label>
        </div>
        {errors.gender && (
          <div className="invalid-feedback">{errors.gender}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="mb-2">
          Country
        </label>
        <input
          ref={countryRef}
          id="country"
          name="country"
          type="text"
          list="countryList"
          value={formData.country}
          onChange={onChange}
          placeholder="Enter country"
          className={`form-control ${errors.country ? "is-invalid" : ""}`}
        />
        <datalist id="countryList">
          <option value="India" />
          <option value="United States" />
          <option value="Canada" />
          <option value="Australia" />
          <option value="United Kingdom" />
          <option value="Germany" />
          <option value="France" />
          <option value="Japan" />
          <option value="China" />
          <option value="Brazil" />
        </datalist>
        <div className="invalid-feedback">{errors.country}</div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrev}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default SecondForm;
