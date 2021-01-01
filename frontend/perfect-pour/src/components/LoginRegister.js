/**
 * LoginRegister.js
 * React component for logging in or registering for the site.
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import Page from './reusable/Page';

const LoginRegister = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/home');
  };

  const renderLogin = () => (
      <div id="login">
        <h2>Login</h2>
        <form data-testid="login-form" id="login-form" onSubmit={() => handleLogin()}>
          <div className="form-field">
            <label>Email</label>
            <input type="email"></input>
          </div>

          <div className="form-field">
            <label>Password</label>
            <input type="password"></input>
          </div>

          <button className="btn-primary" type="submit">Login</button>
        </form>
      </div>
  );

  const renderRegister = () => (
      <div id="register">
        <h2>Create Account</h2>
        <form data-testid="register-form" id="register-form">
          <div className="form-field">
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className="form-field">
            <label>Username</label>
            <input type="text"></input>
          </div>

          <div className="form-field">
            <label>Password</label>
            <input type="password"></input>
          </div>

          <button className="btn-primary" type="submit">Sign Up</button>
        </form>
      </div>
  );
  return (
    <Page login={true}>
        <div id="login-reg-page">
          {renderLogin()}
          <div className="vertical-divider"></div>
          {renderRegister()}
        </div>
    </Page>
  );
};
export default LoginRegister;
