import React, { useState } from 'react';
import Input from '../components/common/txtInput';
import Button from '../components/common/Button';
import '../styles/Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);


  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsSubmitting(true);
    // Mock login API call
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        setLoginSuccess(true);
      } else {
        setIsSubmitting(false);
        setLoginSuccess(false); // moved to here
      }
    }, 2000);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.checkValidity());
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.checkValidity());
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Login</h1>
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            isValid={isValidEmail}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            isValid={isValidPassword}
          />
          {isSubmitting && <div className="login-loading"></div>}
          {loginSuccess === false && !isSubmitting && (
            <div className="login-error"></div>
          )}
          <Button 
            animate 
            className="conditional login-button" 
            onClick={handleSubmit} 
            disabled={!isValidEmail || !isValidPassword || isSubmitting}
          >
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
