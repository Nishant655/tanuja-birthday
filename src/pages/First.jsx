import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './First.css';

function First() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = () => {
    navigate('/main'); // Navigate to the Main page
  };

  return (
    <div className='first-body'>
      <div className="first-page">
        <div className="header">
          <h1>Happy Birthday! <br />
          Tanujaa</h1>
        </div>
        <div className="content">
          <p>Welcome to the webpage designed specially for you!!!
            <br />
            Gooo with the flow
          </p>
          <button className="start-button" onClick={handleNavigate}>
            Let's Go!
          </button>
        </div>
        <div className="footer">
          <p>Made with love by Nishant</p>
        </div>
      </div>
    </div>
  );
}

export default First;
