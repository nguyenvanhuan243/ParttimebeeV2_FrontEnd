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
import CloseIconAlert from 'components/EditProfile/CloseIconAlert/Loadable';
export default class EditProfileAlert extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EditProfileAlert">
        <div className="EditProfileAlert-content">
          <div className="EditProfileAlert-closeRedIcon">
          </div>
          <div className="EditProfileAlert-textContainer">
            <CloseIconAlert CloseIconAlert />
            <div className="EditProfileAlert-text">
              Please fill in your <b>Contact Name</b> and <b>Company Name.</b>
            </div>
          </div>
          <div className="EditProfileAlert-closeIcon">
          </div>
        </div>
      </div>
    );
  }
}
