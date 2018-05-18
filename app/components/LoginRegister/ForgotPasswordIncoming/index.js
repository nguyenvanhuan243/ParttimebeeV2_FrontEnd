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
import MailingIcon from 'components/LoginRegister/ForgotPasswordIncoming/MailingIcon/Loadable';

export default class ForgotPasswordIncoming extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="ForgotPasswordIncoming">
        <div className="ForgotPasswordIncoming-container">
          <div className="ForgotPasswordIncoming-mailingIcon">
            <MailingIcon />
          </div>
          <div className="ForgotPasswordIncoming-incomingText">
            Incoming!
          </div>
          <div className="ForgotPasswordIncoming-abstract">
            We just sent you an email.<br></br>
            Please follow the link in the email to reset your password.
          </div>
          <div className="ForgotPasswordIncoming-backToHome">
            <div className="ForgotPasswordIncoming-backToHomeText">
              BACK TO HOME
            </div>
          </div>
        </div>
      </div>
    );
  }
}
