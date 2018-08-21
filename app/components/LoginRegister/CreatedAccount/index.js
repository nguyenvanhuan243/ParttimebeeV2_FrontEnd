import React from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';

const CreatedAccount = () => (
  <div className="ForgotPassword">
    <DashlineIcon />
    <div className="ForgotPassword-title">
      Hooray! Your account has been created!
    </div>
    <div className="ForgotPassword-abstract">
      Please check email to confirm it.
    </div>
  </div>
);
export default CreatedAccount;
