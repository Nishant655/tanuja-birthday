// First.jsx
import React from 'react';
import './First.css';

function First() {
  return (
    <body className='first-body'>
    <div className="first-page">
      <div className="header">
        <h1>Happy Birthday!</h1>
      </div>
      <div className="content">
        <p>Welcome to the webpage designed specially for you!!!
            <br />
            Gooo with the flow
        </p>
        <a href="/main">
          <button className="start-button">
            Let's Go!
          </button>
        </a>
      </div>
      <div className="footer">
        <p>Made with love by Nishant</p>
      </div>
    </div>
    
    </body>
  );
}

export default First;