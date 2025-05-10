import React, { useState, useEffect } from "react";
import FirstForm from "./StepperForm1";
import SecondForm from "./StepperForm2";
import ThirdForm from "./StepperForm3";
import ProgressBar from "./ProgressBar";
import ResultPage from "./Lastpage";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    return savedData || {
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      country: "",
      state: "",
      city: "",
      zip: "",
    };
  });

  useEffect(() => {
    if (step === 4) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, step]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);
  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(4);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow rounded w-100" style={{ maxWidth: "600px" }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Stepper Form</h2>
          <div className="d-flex justify-content-center mb-4">
            <ProgressBar currentStep={step} />
          </div>
          <div className="w-100">
            {step === 1 && (
              <FirstForm
                formData={formData}
                onChange={handleChange}
                onNext={handleNext}
              />
            )}
            {step === 2 && (
              <SecondForm
                formData={formData}
                onChange={handleChange}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {step === 3 && (
              <ThirdForm
                formData={formData}
                onChange={handleChange}
                onPrev={handlePrev}
                onSubmit={handleSubmit}
              />
            )}
            {step === 4 && <ResultPage formData={formData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
