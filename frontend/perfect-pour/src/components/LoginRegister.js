/**
 * LoginRegister.js
 * React component for logging in or registering for the site.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import Page from './reusable/Page';
import { LOGIN, CREATE_USER } from '../queries';

const LoginRegister = ({ setUser, setMessage }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [login, loginResult] = useMutation(LOGIN, {
    onError: () => {
      setMessage('Invalid username or password');
    },
  });

  const [create, createResult] = useMutation(CREATE_USER, {
    onError: () => {
      setMessage('Failed to create account.');
    },
  });
  console.log(createResult);
  useEffect(() => {
    if (loginResult.data) {
      if (loginResult.data.login === null) return;
      const token = loginResult.data.login.value;
      setUser(token);
      // eslint-disable-next-line no-undef
      localStorage.setItem('perfectpour-token', token);
    }
  }, [loginResult.data, setUser]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginUsername.length === 0 || loginPassword.length === 0) {
      setMessage('Login fields must be filled.');
      return;
    }
    login(
      {
        variables: { username: loginUsername, password: loginPassword },
      },
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (registerUsername.length === 0
      || registerPassword.length === 0
      || registerEmail.length === 0) {
      setMessage('Register fields must be filled.');
      return;
    }
    create({
      variables:
      { username: registerUsername, password: registerPassword, email: registerEmail },
    });

    setMessage('New user created');
  };

  const renderLogin = () => (
      <div id="login">
        <h2>Login</h2>
        <form data-testid="login-form" id="login-form" onSubmit={(e) => handleLogin(e)}>
          <div className="form-field">
            <label>Username</label>
            <input value={loginUsername} type="text" onChange={(e) => setLoginUsername(e.target.value)}></input>
          </div>

          <div className="form-field">
            <label>Password</label>
            <input value={loginPassword} type="password" onChange={(e) => setLoginPassword(e.target.value)}></input>
          </div>

          <button className="btn-primary" type="submit">Login</button>
        </form>
      </div>
  );

  const renderRegister = () => (
      <div id="register">
        <h2>Create Account</h2>
        <form data-testid="register-form" id="register-form" onSubmit={(e) => handleSignup(e)}>
          <div className="form-field">
            <label>Email</label>
            <input value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} type="email"></input>
          </div>
          <div className="form-field">
            <label>Username</label>
            <input value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} type="text"></input>
          </div>

          <div className="form-field">
            <label>Password</label>
            <input value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} type="password"></input>
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

LoginRegister.propTypes = {
  setMessage: PropTypes.func,
  setUser: PropTypes.func,
};
