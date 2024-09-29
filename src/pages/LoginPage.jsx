// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

const defaultName = 'nish';
const defaultPassword = '1234';

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(''); // Initialize with an empty string
  const [password, setPassword] = useState(''); // Initialize with an empty string
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false); // New state variable to store login status

  // Add a console.log to check the environment variables
  console.log('Default Name:', defaultName);
  console.log('Default Password:', defaultPassword);

  const handleLogin = (event) => {
    event.preventDefault();

    // Validate name and password
    if (!name) {
      setError('Please enter a name');
      return;
    }

    if (!password) {
      setError('Please enter a password');
      return;
    }

    // Check if name and password are correct
    if (name === defaultName && password === defaultPassword) {
      setError(null); // Clear the error state
      setLoginSuccess(true); // Set login success to true

      // Simulate a delay (like waiting for an API call) before redirecting
      setTimeout(() => {
        navigate('/Final'); // Redirect to the final after successful login
      }, 1000); // Add a delay to see the "Login successful!" message

      // Display a successful message
    //   setError('Login successful! You will be redirected to the dashboard.');
    } else {
      setError('Invalid name or password');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Name:</label>
          <input type="text" value={name} onChange={handleNameChange} placeholder='Enter your Name' />
        
        <br />
        <label>
          Password:  </label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder='Enter Password' />
      
        <br />
        <button className="login-button" type="submit">Login</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {loginSuccess && <div style={{ color: 'green' }}>Login successful!</div>}
      </form>
    </div>
  </div>
  );
};

export default LoginPage;