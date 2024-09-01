import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(() => {
      navigate('/profile');
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
