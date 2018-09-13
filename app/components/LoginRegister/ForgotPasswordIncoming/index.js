import React from 'react';
import MailingIcon from 'components/LoginRegister/ForgotPasswordIncoming/MailingIcon/Loadable';
import { Link } from 'react-router-dom';
const ForgotPasswordIncoming = () => (
  <div className="ForgotPasswordIncoming">
    <MailingIcon />
    <div className="ForgotPasswordIncoming-incomingText">
      Incoming!
    </div>
    <div className="ForgotPasswordIncoming-abstract">
      {"We've just sent you an email."}<br></br>
      Please follow the link in the email to reset your password.
    </div>
    <Link className="ForgotPasswordIncoming-href" to={'/'}>
      <div className="ForgotPasswordIncoming-backToHome">
        <span className="ForgotPasswordIncoming-backToHomeText">
          BACK TO HOME
        </span>
      </div>
    </Link>
  </div>
);
export default ForgotPasswordIncoming;
