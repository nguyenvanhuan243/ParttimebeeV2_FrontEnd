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

export default class ClickEmail2 extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="ClickEmail2">
        <div className="ClickEmail2-dashlineIcon">
          <DashlineIcon />
        </div>
        <div className="ClickEmail2-container">
          <div className="ClickEmail2-passwordUpdated">
            Password Updated
          </div>
          <div className="ClickEmail2-button">
            <a className="ClickEmail2-buttonText" href="">
              Back to MY PROFILE
            </a>
          </div>
        </div>
      </div>
    );
  }
}
