import React, { PureComponent } from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import FormComponent from 'components/LoginRegister/GeneralComponent/Form/Loadable';
import config from '../../../../config';

export default class Login extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Login">
        <DashlineIcon />
        <div className="Login-title">
          Great to see you again!
        </div>
        <div className="Login-form">
          <FormComponent buttonText="Login" />
        </div>
        <div className="Login-passwordContainer">
          <div>
            <a className="Login-forgotPassword" href={`${config.BASE_URL}/user/forgot-password`}>
              Forgor password?
            </a>
          </div>
          <div className="Login-haveAccount">
            Don’t have an account? <a className="Login-getStarted" href={`${config.BASE_URL}/user/signup`}>Get started</a>
          </div>
        </div>
      </div>
    );
  }
}
