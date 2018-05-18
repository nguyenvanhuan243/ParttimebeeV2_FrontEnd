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

export default class EmailResetPassword extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EmailResetPassword">
        <div className="EmailResetPassword-dashlineIcon">
          <DashlineIcon />
        </div>
        <div className="EmailResetPassword-container">
          <div className="EmailResetPassword-title">
            Hey, [Person in charge name]!
          </div>
          <div className="EmailResetPassword-abstract">
            Seems like you have requested to reset your password. <br></br>
            To reset your password, click the following link:
          </div>
          <div className="EmailResetPassword-form">
            <FormComponent
              buttonText="Reset password"
              showPasswordInput={false}
              showEmailInput={false}
            />
          </div>
          <div className="EmailResetPassword-support">
            In case of difficulty please contact us:
            <a href="" className="EmailResetPassword-emailSupport"> support@parttimebee.my</a>
          </div>
        </div>
      </div>
    );
  }
}
