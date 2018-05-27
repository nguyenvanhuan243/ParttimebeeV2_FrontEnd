import React, { PureComponent } from 'react';
import MailingIcon from 'components/LoginRegister/ForgotPasswordIncoming/MailingIcon/Loadable';
import config from '../../../../config';

export default class ForgotPasswordIncoming extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="ForgotPasswordIncoming">
        <MailingIcon />
        <div className="ForgotPasswordIncoming-incomingText">
          Incoming!
        </div>
        <div className="ForgotPasswordIncoming-abstract">
          We just sent you an email.<br></br>
          Please follow the link in the email to reset your password.
        </div>
        <a className="ForgotPasswordIncoming-href" href={`${config.BASE_URL}`}>
          <div className="ForgotPasswordIncoming-backToHome">
            <span className="ForgotPasswordIncoming-backToHomeText">
              BACK TO HOME
            </span>
          </div>
        </a>
      </div>
    );
  }
}
