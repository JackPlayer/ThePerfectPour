/**
 * LoginRegister.test.js
 * Testing for the LoginRegister component
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import LoginRegister from '../../components/LoginRegister';

describe('<LoginRegister />', () => {
  let component;

  beforeEach(() => {
    component = render(<LoginRegister />);
  });

  it('has login form with proper labels', () => {
    const loginForm = component.getByTestId('login-form');

    expect(loginForm).toHaveTextContent('Email');
    expect(loginForm).toHaveTextContent('Password');
  });

  it('has register form with proper labels', () => {
    const registerForm = component.getByTestId('register-form');

    expect(registerForm).toHaveTextContent('Email');
    expect(registerForm).toHaveTextContent('Username');
    expect(registerForm).toHaveTextContent('Password');
  });

  describe('button interactions', () => {
    it('login button exists', () => {
      const loginForm = component.getByTestId('login-form');
      const btn = loginForm.querySelector('button');

      expect(btn).toHaveTextContent('Login');
    });

    it('register button exists', () => {
      const registerForm = component.getByTestId('register-form');
      const btn = registerForm.querySelector('button');

      expect(btn).toHaveTextContent('Sign Up');
    });

    it('login button functions properly', () => {
      // Complete once this is implemented
    });

    it('register button functions properly', () => {
      // Complete once this is implemented
    });
  });
});
