import React, { useState } from 'react';
import './Signup.css'; // Ensure this path matches your CSS file location
import { Link, useNavigate } from 'react-router-dom';
import axios from '../services/axiosConfig'; // Adjust the path as per your project structure


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/register', { email, password });

      console.log('Registration successful:', response.data);
      setMessage('Registration successful');
      navigate('/login'); // Redirect to the login page after successful registration
    } catch (error) {
      console.error('Registration error:', error);
      setMessage(`Registration failed: ${error.message}`);
    }
  };

  return (
    <section className="signup-base__body">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h2 className="signup-container__header">Signup</h2>
          {message && <p className="signup-message">{message}</p>}

          <div className="signup-container__input-box">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-container__input"
            />
          </div>

          <div className="signup-container__input-box">
            <input
              type="password"
              placeholder="Create password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-container__input"
            />
          </div>

          <div className="signup-container__input-box">
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="signup-container__input"
            />
          </div>

          <button type="submit" className="signup-container__button">Signup Now</button>

          <div className="signup-container__link-text">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;

