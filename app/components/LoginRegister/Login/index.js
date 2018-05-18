/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import FormComponent from 'components/LoginRegister/GeneralComponent/Form/Loadable';

export default class Login extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Login">
        <div className="Login-dashlineIcon">
          <DashlineIcon />
        </div>
        <div className="Login-title">
          Great to see you again!
        </div>
        <div className="Login-form">
          <FormComponent buttonText="Login" />
        </div>
        <div className="Login-passwordContainer">
          <div>
            <a className="Login-forgotPassword" href="">
              Forgor password?
            </a>
          </div>
          <div className="Login-haveAccount">
            Don’t have an account? <a className="Login-getStarted" href="">Get started</a>
          </div>
        </div>
      </div>
    );
  }
}
