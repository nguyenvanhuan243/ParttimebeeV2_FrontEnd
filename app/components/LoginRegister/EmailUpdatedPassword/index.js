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

export default class EmailUpdatedPassword extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
  }
}
