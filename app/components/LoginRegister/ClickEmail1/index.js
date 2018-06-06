import React from 'react';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';
import FormComponent from 'components/LoginRegister/GeneralComponent/Form/Loadable';

const ClickEmail1 = () => (
  <div className="ClickEmail1">
    <div className="ClickEmail1-dashlineIcon">
      <DashlineIcon />
    </div>
    <div className="ClickEmail1-container">
      <div className="ClickEmail1-changePassword">
        Change Password
      </div>
      <div className="ClickEmail1-form">
        <FormComponent
          buttonText="Change Password"
          showEmailInput={false}
        />
      </div>
    </div>
  </div>
);
export default ClickEmail1;
