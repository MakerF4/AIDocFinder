import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosConfig'; // Adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    try {
      const response = await axiosInstance.post('/api/login', { email, password });
      console.log('Login successful:', response.data);
      
      // Directly storing the token as it's not nested
      const token = response.data;
      
      // Store JWT token in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email);
  
      console.log('Stored token:', localStorage.getItem('token'));
  
      navigate('/UserProfile'); // Redirect to user profile page
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
};

  

  return (
    <section className="login-base__body">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login-container__header">Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="login-container__input-box">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-container__input"
            />
          </div>

          <div className="login-container__input-box">
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-container__input"
            />
          </div>

          <button type="submit" className="login-container__button">Login</button>

          <div className="login-container__link-text">
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;


