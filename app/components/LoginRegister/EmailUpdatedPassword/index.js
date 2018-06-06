import React from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';

const EmailUpdatedPassword = () => (
  <div className="EmailUpdatedPassword">
    <div className="EmailUpdatedPassword-dashlineIcon">
      <DashlineIcon />
    </div>
    <div className="EmailUpdatedPassword-container">
      <div className="EmailUpdatedPassword-title">
        Your password has been changed!
      </div>
      <div className="EmailUpdatedPassword-abstract">
        [Person in charge name], your password has been changed on Parttime Bee. If you did not request this change, please contact our support:
      </div>
      <div className="EmailUpdatedPassword-button">
        <a className="EmailUpdatedPassword-buttonText" href="">
          Contact Support
        </a>
      </div>
      <div className="EmailUpdatedPassword-support">
        In case of difficulty please contact us:
        <a href="" className="EmailUpdatedPassword-supportLink"> support@parttimebee.my </a>
      </div>
    </div>
  </div>
);
export default EmailUpdatedPassword;
