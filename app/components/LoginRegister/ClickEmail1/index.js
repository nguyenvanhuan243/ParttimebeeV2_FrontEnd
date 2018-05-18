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

export default class ClickEmail1 extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
  }
}
