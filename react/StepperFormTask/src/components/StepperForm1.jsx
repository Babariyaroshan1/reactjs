import React, { useState } from "react";

const FirstForm = ({ formData, onChange, onNext }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4" style={{ maxWidth: "500px" }}>
      <h4 className="mb-4 text-center">Personal Details</h4>

      <div className="form-group mb-3">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter your full name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter your email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="form-group mb-4">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="number"
          value={formData.phone}
          onChange={onChange}
          placeholder="Enter your phone number"
          className={`form-control `}
        />
        <div className="invalid-feedback">{errors.phone}</div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Next
      </button>
    </form>
  );
};

export default FirstForm;
