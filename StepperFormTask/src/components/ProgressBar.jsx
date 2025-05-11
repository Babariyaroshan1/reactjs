import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className="mb-4 w-50 d-flex justify-content-between align-items-center">
      {steps.map((s, index) => (
        <div key={s} className="text-center flex-fill position-relative">
          <div
            className={`rounded-circle mx-auto mb-2 d-flex justify-content-center align-items-center ${
              currentStep > s
                ? 'bg-success text-white'
                : currentStep === s
                ? 'bg-primary text-white'
                : 'bg-light text-secondary'
            }`}
            style={{
              width: '40px',
              height: '40px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            {currentStep > s ? '✓' : s}
          </div>
          <div>Step {s}</div>

          {index < steps.length - 1 && (
            <div
              className={`position-absolute top-50 start-100 translate-middle-y w-100 ${
                currentStep > s ? 'bg-success' : 'bg-light'
              }`}
              style={{ height: '4px', zIndex: -1 }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
