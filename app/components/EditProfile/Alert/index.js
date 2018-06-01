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
