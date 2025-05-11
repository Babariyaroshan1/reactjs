import React from 'react';

const ResultPage = ({ formData }) => {
  return (
    <div className='d-flex justify-content-center flex-wrap'>
     <div> <h3>Form Submission Summary</h3>
     </div>
      <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Age:</strong> {formData.age}</li>
        <li><strong>Gender:</strong> {formData.gender}</li>
        <li><strong>Country:</strong> {formData.country}</li>
        <li><strong>State:</strong> {formData.state}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>Zip:</strong> {formData.zip}</li>
      </ul>
    </div>
  );
};

export default ResultPage;
