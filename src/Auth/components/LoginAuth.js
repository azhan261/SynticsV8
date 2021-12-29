import React, { Component } from 'react';
import { Link , useHistory, useLocation} from 'react-router-dom';
import LoginService from '../services/LoginService';
import Message from '../elements/Message';
import Error from '../elements/Error';

import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from '../MessageBundle';

export default class LoginAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
      loginSuccess: false,
    };
  }
  
  handleOnChangeUserName = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onSubmit = async (e) => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const loginResult = await LoginService(data);
    if (loginResult !== 200) {
      this.setState({
        error: true,
        loginSuccess: false,
      });
    } else {
      this.setState({
        loginSuccess: true,
        error: false,
      });
      console.log("Error not hit")
    }
  };

  render() {
    const { loginSuccess, error } = this.state;

    return (
      <section className="services-section mt-5 mb-5 coursesCard">
      <div className="container">
      <div className="row justify-content-center">
      <h4> Log In To Your Account</h4>
      <div className="Login"> {' '}
        <form onSubmit={this.onSubmit}>
          <div>
            <div className="fields">
              <p> {COMMON_FIELDS.EMAIL} </p>    {' '}
              <input
                type="text"
                name="Username"
                onChange={this.handleOnChangeUserName}
                autoComplete="Username"
                required
              />
            </div>{' '}
            {' '}
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={this.handleOnChangePassword}
                autoComplete="Password"
                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn btn-outline-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
                  <Link to="/registration">
                     {REGISTRATION_FIELDS.REGISTER} </Link> 
                      {' '}
                      {' '}
                  <Link to="/main/reset-password-confirmation">
                     Forgot your password? </Link> 
                      {' '}
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {' '}
        </form>{' '}
            {loginSuccess && <Message message={LOGIN_MESSAGE}  />}    {' '}
        {error && <Error message={ERROR_IN_LOGIN} />}    {' '}
      </div>
      </div>
      </div>
      </section>
    );
  }
}
