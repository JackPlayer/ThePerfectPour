import React from 'react'
import Page from './reusable/Page'
import { useHistory } from 'react-router-dom'

const LoginRegister = () => {
  const history = useHistory()
  const handleLogin = () => {
    history.push('/home')
  }

  const renderLogin = () => {
    return (
      <div id="login">
        <h2>Login</h2>
        <form id="login-form" onSubmit={() => handleLogin()}>
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
    )
  }

  const renderRegister = () => {
    return (
      <div id="register">
        <h2>Create Account</h2>
        <form id="register-form">
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
    )
  }
  return (
    <Page login={true}>
        <div id="login-reg-page">
          {renderLogin()}
          <div className="vertical-divider"></div>
          {renderRegister()}
        </div>      
    </Page>
  )
}
export default LoginRegister