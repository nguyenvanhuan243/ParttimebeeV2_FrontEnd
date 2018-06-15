import React, { PureComponent, PropTypes } from 'react';
import CloseIconAlert from 'components/EditProfile/CloseIconAlert/Loadable';

export default class EditProfileAlert extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      showEmail,
      showPassword,
      showConfirmPassword,
      showContactName,
      showCompanyName,
    } = this.props;
    return (
      <div className="EditProfileAlert">
        <div className="EditProfileAlert-content">
          <div className="EditProfileAlert-closeRedIcon">
          </div>
          <div className="EditProfileAlert-textContainer">
            <CloseIconAlert CloseIconAlert />
            <div className="EditProfileAlert-text">
              Please fill in your
              { showEmail && <b> { showEmail }</b> } {showEmail && 'and' }
              { showPassword && <b> { showPassword }</b> } {showPassword && 'and' }
              { showConfirmPassword && <b> { showConfirmPassword }</b> } {showConfirmPassword && 'and' }
              { showContactName && <b> { showContactName }</b> } {showContactName && 'and' }
              { showCompanyName && <b> { showCompanyName }</b> }
            </div>
          </div>
          <div className="EditProfileAlert-closeIcon">
          </div>
        </div>
      </div>
    );
  }
}
EditProfileAlert.propTypes = {
  showEmail: PropTypes.string,
  showPassword: PropTypes.string,
  showConfirmPassword: PropTypes.string,
  showContactName: PropTypes.string,
  showCompanyName: PropTypes.string,
};
