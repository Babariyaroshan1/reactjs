
import React from 'react';

const CustomButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      className='btn btn-primary px-4 py-2 rounded'
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default CustomButton; 
