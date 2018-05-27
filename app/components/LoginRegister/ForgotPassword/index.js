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

export default class ForgotPassword extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="ForgotPassword">
        <DashlineIcon />
        <div className="ForgotPassword-title">
          Forgot your password?
        </div>
        <div className="ForgotPassword-abstract">
          We`ll send you an email with a reset link.
        </div>
        <div className="ForgotPassword-form">
          <FormComponent buttonText="Reset password" showPasswordInput={false} />
        </div>
      </div>
    );
  }
}
