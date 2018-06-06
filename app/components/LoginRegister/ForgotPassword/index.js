import React from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import FormComponent from 'components/LoginRegister/GeneralComponent/Form/Loadable';

const ForgotPassword = () => (
  <div className="ForgotPassword">
    <DashlineIcon />
    <div className="ForgotPassword-title"> Forgot your password? </div>
    <div className="ForgotPassword-abstract"> We`ll send you an email with a reset link. </div>
    <div className="ForgotPassword-form">
      <FormComponent buttonText="Reset password" showPasswordInput={false} />
    </div>
  </div>
);
export default ForgotPassword;
