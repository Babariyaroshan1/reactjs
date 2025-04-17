import React from 'react';
import './App.css';

const ProfileCard = () => {
  const name = "Roshan Babariya";
  const age = 20;
  const bio = "A passionate full-stack developer exploring the world of React and AI.";

  return (
   
      <div className='justify-content-center'>
        <div className='profile-card'>
          <h2>{name}</h2>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Bio:</strong> {bio}</p>
        </div>
      </div>
 
  );
};

export default ProfileCard;
