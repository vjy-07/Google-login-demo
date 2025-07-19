import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="centered-container">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <button onClick={() => navigate('/')}>Login</button>
    </div>
  );
}

export default NotFound;
